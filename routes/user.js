const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');

// 회원가입
router.post('/api/signup', userController.signUp);
// 로그인
router.post('/api/login', userController.login);
// 이메일 중복검사
router.get('/api/duplicates/email', userController.duplicatesEmail);
// 닉네임 중복검사
router.get('/api/duplicates/nickname', userController.duplicatesNickname);

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
