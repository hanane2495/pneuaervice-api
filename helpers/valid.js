//Validation helpers
const { check } = require('express-validator')

//Register
exports.validRegister = [
    check('first_name', 'Name is required').notEmpty()
    .isLength({
        min:4,
        max:32
    }).withMessage('name must be between 3 to 32 characters'),
    check('last_name', 'Name is required').notEmpty()
    .isLength({
        min:4,
        max:32
    }).withMessage('name must be between 3 to 32 characters'),
    check('email').isEmail().withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min:6
    }).withMessage('password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

//Login
exports.validLogin = [
    check('email').isEmail().withMessage('Must be a valid email address'),

    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min:6
    }).withMessage('password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

//Forget password 
exports.forgotPasswordValidator = [
    check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid email address')
]

//Reset password
exports.resetPasswordValidator = [
    check('newPassword')
    .not()
    .isEmpty()
    .isLength({
        min:6
    }).withMessage('Password must be at least 6 characters long')
]