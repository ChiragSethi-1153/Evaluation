const mongoose =  require('mongoose');

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const validatePassword = function(password) {
    // Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
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
        validate: [validatePassword, "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character"],
    }

}, {timestamps: true});

module.exports = mongoose.model('users', userSchema);
