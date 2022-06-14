const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error finding user'
                });
            }
            if (user) return res.status(409).json({
                message: 'User already exists'
            });

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _User = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            _User.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'Error saving user'
                    });
                }
                if (data) {
                    return res.status(201).json({
                        message: 'User created successfully',
                        // user: data
                    })
                }
            });

        });


}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) {
                if (err) return res.status(400).json({ err });
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, username, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        message: 'User created successfully',
                        user: { _id, firstName, lastName, username, email, role, fullName }
                    });
                } else {
                    return res.status(401).json({
                        message: 'Invalid Password'
                    });
                }
            } else {
                return res.status(401).json({
                    message: 'Something went wrong'
                });
            }
        });
}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    next();
}