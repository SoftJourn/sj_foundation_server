'use strict'

const _ = require('underscore');

const helper = {
    split: (value) => {
        return _.filter(value.split(','), el => el !== '');
    }
}

module.exports = helper;
