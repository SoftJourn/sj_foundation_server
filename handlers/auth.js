var ldap = require('ldapjs');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

function ldapAuth(username, password) {
    var dn = 'uid=' + username + ',ou=People,ou=Users,dc=ldap,dc=sjua';
    return new Promise((resolve, reject) => {
        var client = ldap.createClient({
            url: 'ldap://ldap.softjourn.if.ua:389'
        });

        client.bind(dn, password, (err) => {
            if (err === null) {
                var ops = {
                    filter: '(uid=' + username + ')',
                    scope: 'sub'
                }
                var base = 'ou=People,ou=Users,dc=ldap,dc=sjua';
                var userFullName = '';
                var token = '';
                client.search(base, ops, (err, res) => {
                    if (err) {
                        reject({ notAllowed: true });
                    } else {
                        res.on('searchEntry', function (entry) {
                            userFullName = entry.object.cn;
                            token = jwt.sign({ id: entry.object.mail }, config.secret, {
                                expiresIn: 600
                            });
                        });
                        res.on('error', function (err) {
                            console.log('Error is', err);
                            client.unbind();
                            reject({ notAllowed: true });
                        });
                        res.on('end', function (result) {
                            client.unbind();
                            resolve({ username: userFullName, token: token });
                        });
                    }
                });
            } else {
                reject({ notAllowed: true });
            }
        });
    });
}

exports.login = (params, req, res) => {
    return ldapAuth(params.username, params.password)
};
