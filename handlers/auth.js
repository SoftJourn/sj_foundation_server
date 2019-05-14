var ldap = require('ldapjs');

function ldapAuth(username, password) {
    var dn = 'uid=' + username + ',ou=People,ou=Users,dc=ldap,dc=sjua';
    return new Promise((resolve, reject) => {
        var client = ldap.createClient({
            url: 'ldap://ldap.softjourn.if.ua:389'
        });

        client.bind(dn, password, (err) => {
            client.unbind();
            if (err === null) {
                resolve({ success : true, username: username });
                return;
            }

            reject({ notAllowed: true });
        });
    });
}

exports.login = (params) => {
    return ldapAuth(params.username, params.password);
};
