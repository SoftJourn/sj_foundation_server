'use strict'

module.exports = {
    env: process.env.ENV || 'development',
    port: process.env.PORT || 3000,
    secret: process.env.SECRET
}
