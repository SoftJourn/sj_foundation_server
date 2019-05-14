var ldap = require('ldapjs');

exports.login = (params) => {
    function authDN(dn, password, cb) {
        var client = ldap.createClient({
            url: 'ldap://ldap.softjourn.if.ua:389'
        });

        client.bind(dn, password, function(err) {
            client.unbind();
            cb(err === null, err);
        });
    }

    function output(res, err) {
        if (res) {
            console.log('success');
        } else {
            console.log(err);
        }
    }

    var dn = 'uid=' + params.username + ',ou=People,ou=Users,dc=ldap,dc=sjua';
    authDN(dn, params.password, output);

    if (params.username === 'user' && params.password === 'user') {
        return { success : true, username: params.username };
    }

    throw { notAllowed: true };
};
