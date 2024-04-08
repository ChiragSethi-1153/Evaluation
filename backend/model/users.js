const mongoose =  require('mongoose');


const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        required: true
    },
    attemptedTests: [{
        test: {
            type: String,
        },
        marksScored: {
            type: Number
        },
        default: []
    }]

}, {timestamps: true});

module.exports = mongoose.model('users', userSchema);


