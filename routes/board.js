const express = require('express');
const Board = require('../models/board');
const router = express.Router();
const postController = require('../controllers/boardController');
const db = require('../models');
const multer = require('multer');
const fs = require('fs');

// multer 세팅 ==================================================================

// try {
//     fs.readdirSync('uploads'); // 폴더 확인
// } catch (err) {
//     console.error('uploads 폴더가 없습니다. 폴더를 생성합니다.');
//     fs.mkdirSync('uploads'); // 폴더 생성
// }

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // 파일 원본이름 저장
//     },
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5메가로 용량 제한
// });

// const upload = multer({ storage: storage }); // 미들웨어 생성

//-------------------------------------------------------------------------------

// // 게시물 작성

router.post('/api/travels', postController.createPost);
// router.post('/api/travels/img',upload.single('img'), postController.createImage);

// ========================================================================================

// // 게시물 조회
router.get('/api/travels', postController.getPost);

//=============================================================================================

// //게시물 상세 조회
router.get('/api/travels/:boardId', postController.getPostId);

//--------------------------------------------------------------------------------------------

// // 게시물 수정
router.patch('/api/travels/:boardId', postController.patchPost);

//---------------------------------------------------------------------------------

// // 게시물 삭제
router.delete('/api/travels/:boardId', postController.deletePost);

module.exports = router;
