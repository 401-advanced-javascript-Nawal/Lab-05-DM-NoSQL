'use strict';

// connect our DB to the app we are building 
const mongoose = require('mongoose');

const Categories = require('./models/categories-schema.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// for testing 
const bag = new Categories({name :'bags bags'});

console.log('bag : ', bag);
bag.save();
console.log('after saveing  : ' );