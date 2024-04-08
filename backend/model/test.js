const mongoose =  require('mongoose');
const users = require('./users');






const testSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: users
    },
    testName: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true, 
    },
    instructions: {
        type: String,
        required: true,
    },
    totalMarks: {
        type: Number
    }

}, {timestamps: true});

module.exports = mongoose.model('tests', testSchema);
