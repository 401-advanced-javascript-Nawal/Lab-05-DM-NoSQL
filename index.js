'use strict';

// connect our DB to the app we are building 
const mongoose = require('mongoose');

const MONGOOSE_URL = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

