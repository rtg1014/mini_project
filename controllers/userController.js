const Services = require('../services/userServices');
const Joimiddleware = require('../middlewares/joi-middleware');
const jwt = require('jsonwebtoken');
const Bcrypt = require('bcrypt');
const Joi = require('joi');
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
// require('express-async-errors');

// 카카오 로그인
// passport.use(
//     'kakao',
//     new KakaoStrategy(
//         {
//             clientID: '24eeca31e725cd6eed9c099a0be0eb81',
//             callbackURL: 'http://localhost:4000/auth/kakao/callback', // 위에서 설정한 Redirect URI
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             //console.log(profile);
//             console.log(accessToken);
//             console.log(refreshToken);
//         }
//     )
// );

// 회원가입
exports.signUp = async (req, res, next) => {
    // #swagger.tags = ['Users']
    if (req.headers.authorization) { 
        return res.status(400).send
        ({ ereorMessage: '이미 로그인 되어있습니다.', }); 
    }
    try {
        const { nickname, email, password, confirmPassword } =
            await Joimiddleware.validateAsync(req.body);
        const user = await Services.duplicatesEmail(email);
        if (user) {
            return res.status(400).send({
                errorMessage: '이메일 중복검사 해주세요',
            });
        }
        const usernickname = await Services.duplicatesNickname(nickname);
        if (usernickname) {
            return res.status(400).send({
                errorMessage: '닉네임 중복검사 해주세요',
            });
        }
        let rows = await Services.signUp(nickname, email, password, confirmPassword);
        if (!rows) {
            return res.status(200).send({ message: '회원가입 완료!' });
        }
    } catch (err) {
        res.status(400).send({
            errorMessage: '요청한 방식이 올바르지 않음',
        });
    }
};

// 로그인 joi
const AuthScheam = Joi.object({
    email: Joi.string()
        .empty()
        .email()
        .required()
        .messages({ 'string.empty': '이메일을 입력해 주세요' }),
    password: Joi.string()
        .empty()
        .required()
        .messages({ 'any.required': '패스워드를 입력해주세요.' }),
});

// 로그인
exports.login = async (req, res, next) => {
    // #swagger.tags = ['Users']
    if (req.headers.authorization) { 
        return res.status(400).send
        ({ ereorMessage: '이미 로그인 되어있습니다.', }); 
    }
    
    try {
        const { email, password } = await AuthScheam.validateAsync(req.body);

        const user = await Services.login(email);
        const passwordcheck = Bcrypt.compareSync(password, user.password);
        if (!user || !passwordcheck) {
            return res.status(400).json({ Message: '이메일또는 패스워드가 잘못됨' });
        }

        const token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY);
        const nickname = user.nickname;
        res.status(200).send({
            token,
            nickname,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            errorMessage: ' 로그인 실패.',
        });
    }
};

// 이메일 중복검사
exports.duplicatesEmail = async (req, res, next) => {
    // #swagger.tags = ['Users']

    try {
        const { email } = req.params;
        const user = await Services.duplicatesEmail(email);
        console.log(user);
        if (user) {
            res.status(400).json({
                success: false,
                msg: '중복된 이메일 있습니다.',
            });
            return;
        } else {
            res.status(200).send({ Message: '사용 가능한 이메일 입니다' });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            errorMessage: '요청방식이 올바르지 않음.',
        });
    }
};

// 닉네임 중복검사
exports.duplicatesNickname = async (req, res, next) => {
    // #swagger.tags = ['Users']

    try {
        const { nickname } = req.params;
        const user = await Services.duplicatesNickname(nickname);
        if (user) {
            res.status(400).json({
                success: false,
                msg: '중복된 닉네임이 있습니다',
            });
            return;
        } else {
            res.status(200).send({ Message: '사용 가능한 닉네임 입니다' });
        }
    } catch (err) {
        res.status(400).json({
            success: false,
            errorMessage: '요청방식이 올바르지 않음.',
        });
    }
};
