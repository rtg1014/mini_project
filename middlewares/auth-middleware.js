const jwt = require('jsonwebtoken');
const User = require('../models/user');

require('dotenv').config;

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const [tokenType, tokenValue] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
        res.status(401).send({
            errorMessage: '로그인 후 사용 하세요',
        });
        return;
    }
    try {
        const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);

        User.findById(userId)
            .exec()
            .then((_user) => {
                res.locals.user = User;
                next();
            });
    } catch (error) {
        res.status(401).send({
            errorMessage: '로그인 후 사용 하세요',
        });
        return;
    }
};
