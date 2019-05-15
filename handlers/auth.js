var ldap = require('ldapjs');

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
                client.search(base, ops, (err, res) => {
                    if (err) {
                        reject({ notAllowed: true });
                    } else {
                        res.on('searchEntry', function (entry) {
                            console.log('Entry', JSON.stringify(entry.object));
                            userFullName = entry.object.cn;
                        });
                        res.on('error', function (err) {
                            console.log('Error is', err);
                            client.unbind();
                            reject({ notAllowed: true });
                        });
                        res.on('end', function (result) {
                            client.unbind();
                            resolve({ success : true, username: userFullName });
                        });
                    }
                });
            } else {
                reject({ notAllowed: true });
            }
        });
    });
}

exports.login = (params) => {
    return ldapAuth(params.username, params.password);
};
