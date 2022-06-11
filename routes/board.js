const express = require("express");
const Board = require("../models/board")
const router = express.Router();
const postCtrl = require('../controllers/boardController')
const db = require('../models');


// // 게시물 작성
// router.post('/api/Travels.',postCtrl.createPost); 


router.post('/api/Travels', async (req,res)=>{
    console.log(1)
//     try{
//     // const {boardId} = req.parms;
 
// // } catch {
// //     res.status(400).send({
// //         errorMessage: '게시물 작성 조건이 올바르지 않습니다.'
// //       }); 
// // } 

console.log(2)
const {content,image} = req.body;
console.log(3)
const createPost = await db.Board.create({ imageUrl :image, desc:content })
console.log(4)
res.status(200).send({
    createPost
})

});



// // 여행 게시물 조회
// router.get('/api/Travels.',postCtrl.getPost); 

// //게시물 상세 조회
// router.get('/api/Travels/:id', postCtrl.getPostId );

// // 게시물 수정
// router.patch('/api/Travels/:id', postCtrl.patchPost);

// // 게시물 삭제
// router.delete('/api/Travels/:id', postCtrl.deletePost);




module.exports = router;