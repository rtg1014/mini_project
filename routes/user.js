const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const loging = require('../middlewares/login-middleware');

// 회원가입
router.post('/api/signup', loging, userController.signUp);
// 로그인
router.post('/api/login', loging, userController.login);
// 이메일 중복검사
router.get('/api/duplicatesemail/:email', userController.duplicatesEmail);
// 닉네임 중복검사
router.get('/api/duplicatesnick/:nickname', userController.duplicatesNickname);

// 카카오 로그인
router.get('/kakao', passport.authenticate('kakao'));

router.get(
    '/kakao/callback',
    passport.authenticate('kakao', {
        failureRedirect: '/',
    }),
    (res, req) => {
        res.redirect('/auth');
    }
);

module.exports = router;
