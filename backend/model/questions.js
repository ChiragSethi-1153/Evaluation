const mongoose =  require('mongoose');
const test = require('./test');




const questionSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: test
    },
    question: {
        type: String,
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
    },
    option4: {
        type: String,
    },
    correctOption: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    }
    
}, {timestamps: true});

module.exports = mongoose.model('questions', questionSchema);
