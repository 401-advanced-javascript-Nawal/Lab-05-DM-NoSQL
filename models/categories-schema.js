'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true }
});

module.exports = mongoose.model('categories', categories);