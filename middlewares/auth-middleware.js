const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config;

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const [tokenType, tokenValue] = authorization.split(' ');

    if (tokenType !== 'Bearer') {
        v;
        res.status(401).send({
            errorMessage: '로그인 후 사용 하세요',
        });
        return; ///오류가 났으니 더이상 진행시키면 안되서 return
    }
    try {
        const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);

        User.findById(userId).then((_user) => {
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
