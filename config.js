'use strict'

module.exports = {
    env: process.env.ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: '',
        name: 'foundation',
        user: 'root',
        password: ''
    }
}