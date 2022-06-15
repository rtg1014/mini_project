const Bcrypt = require('bcrypt');
const db = require('../models');
// require('express-async-errors');

// 회원가입
exports.signUp = async (nickname, email, password, confirmPassword) => {
    const salt = await Bcrypt.genSalt();
    const pwhash = await Bcrypt.hash(password, salt);
    // 비밀번호 해싱

    await db.User.create({
        nickname,
        email,
        password: pwhash,
    });
};

// 로그인
exports.login = async (email) => {
    return await db.User.findOne(
        { attributes: ['nickname', 'password', 'userId'] },
        { where: { email } }
    );
};
// 이메일 중복검사
exports.duplicatesEmail = async (email) => {
    return await db.User.findOne({ where: { email } });
};
// 닉네임 중복검사
exports.duplicatesNickname = async (nickname) => {
    return await db.User.findOne({ where: { nickname } });
};
