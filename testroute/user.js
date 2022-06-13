// const express = require('express');
// const router = express.Router();
// const Joi = require('joi');
// const Bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../models');
// require('express-async-errors');

// require('dotenv').config();

// // 회원가입 joi
// const UsersSchema = Joi.object({
//     nickname: Joi.string()
//         .min(3)
//         .max(15)
//         .empty()
//         .pattern(new RegExp(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9]+$/)) // 닉네임은 한글,알파벳 대소문자 (a~z, A~Z), 숫자(0~9)로 구성
//         .required()
//         .messages({
//             'string.min': '짧다고',
//             'string.max': '길다고 샠',
//             'string.empty': '입력해라',
//             'string.pattern.base': '알맞게 써라',
//         }),
//     email: Joi.string().email().empty().required().messages({
//         'string.email': '이메일 형식 아님',
//         'string.empty': '입력해라',
//     }),
//     password: Joi.string()
//         .min(8)
//         .max(20)
//         .empty()
//         .pattern(new RegExp(/^[a-z|A-Z|0-9]+$/)) // 알파벳 대소문자 (a~z, A~Z), 숫자(0~9)로 구성
//         .required()
//         .messages({
//             'string.min': '존나 짧아요',
//             'string.max': '존나 기네',
//             'string.empty': '입력해라',
//             'string.pattern.base': '맞게써라',
//         }),
//     confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
//         'any.only': '안맞아',
//     }),
//     // password 일치하는지
// });
// // 회원가입
// router.post('/api/signup', async (req, res) => {
//     const { nickname, password, confirmPassword, email } =
//         await UsersSchema.validateAsync(req.body);

//     const pwhash = Bcrypt.hashSync(password, 10);
//     // 비밀번호 해싱
//     await db.User.create({
//         nickname,
//         email,
//         password: pwhash,
//     });

//     res.status(200).json({ Message: '회원가입 성공' });
// });

// // 로그인 joi
// const AuthScheam = Joi.object({
//     email: Joi.string()
//         .empty()
//         .email()
//         .required()
//         .messages({ 'string.empty': '입력해라' }),
//     password: Joi.string().empty().required().messages({ 'any.required': '입력해라' }),
// });

// // 로그인
// router.post('/api/login', async (req, res, next) => {
//     try {
//         const { email, password } = await AuthScheam.validateAsync(req.body);
//         const user = await db.User.findOne({ where: { email } });

//         if (!user) {
//             return res.json({ Message: '이메일또는 패스워드가 잘못됨' });
//         }

//         const Password = Bcrypt.compareSync(password, user.password);

//         if (!Password) {
//             return res.json({ Message: '이메일또는 패스워드가 잘못됨' });
//         }
//         const token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY);

//         res.send({
//             token,
//         });
//     } catch (error) {
//         next(error);
//     }
// });

// // 이메일 중복검사
// router.get('/api/duplicates/email', async (req, res) => {
//     const { email } = req.body;
//     const existUser = await db.User.findOne({ where: { email } });
//     if (existUser) {
//         res.status(400).json({
//             success: false,
//             msg: '이미 존재합니다',
//         });
//         return;
//     } else {
//         res.status(200).send({ email: email });
//     }
// });
// // 닉네임 중복검사
// router.get('/api/duplicates/nickname', async (req, res) => {
//     const { nickname } = req.body;
//     const existUser = await db.User.findOne({ where: { nickname } });
//     if (existUser) {
//         res.status(400).json({
//             success: false,
//             msg: '이미 존재합니다',
//         });
//         return;
//     } else {
//         res.status(200).send({ nickname });
//     }
// });
// module.exports = router;
