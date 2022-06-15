const Board = require("../services/boardServices")
const multer = require('multer');


// 게시물 작성 controller ----------------------------------------

exports.createPost = async (req,res,)=>{ //next


    try{
        const {title, content, } = req.body;
       
        await Board.createPost(title, content)
        if(userCheck){
            res.status(200).send({
                userCheck
            })
        }
       
    }catch(err) {
        res.status(400).send({
            errorMessage: '게시물 생성 조건이 올바르지 않습니다.'
          }); 
    }
};

// ---------------------------------------------------------------

// 이미지 작성 ---------------------------------------------------------------------------

exports.createImage =  async(req,res)=>{
    try{
        const {image} = req.file;
        const imageCheck = req.file.filename
        if(imageCheck){
            res.status(200).send({
                imageCheck
            })
        }
    }catch{
        res.status(400).send({
            errorMessage: '이미지 생성 조건이 올바르지 않습니다.'
          }); 
    }
}

//-------------------------------------------------------------------------



// 게시물 조회 controller -----------------------------------------

exports.getPost = async(req,res)=>{
    try {

        const postCheck = await Board.getPost()

    if(postCheck){
        res.status(200).send({
            postCheck
        })
    } 
    } catch(err) {
        console.log(err)
        res.status(400).send ({
            errorMessage : " 게시물 조회를 위한 정보가 일치하지 않습니다"
        });
    }

};


// //-----------------------------------------------------------------




// // 게시물 상세조회 controller ----------------------------------------

exports.getPostId = async(req,res)=>{
    try{
    const {boardId} = req.params;
    
    const postIdCheck = await Board.getPostId(boardId)
    if(postIdCheck){
        res.status(200).send({
            postIdCheck 
        })
    }
    }catch(err) {
        console.log(err)
        res.status(400).send ({
            errorMessage : " 게시물 상세 조회를 위한 정보가 일치하지 않습니다"
        });
    }

};



//------------------------------------------------------------------



// 게시물 수정 controller ---------------------------------------------

exports.patchPost = async(req,res)=>{
        try{
     
        // await upload.single('img')
      
        const {boardId} = req.params;
        const {title,image,content} = req.body;
        const patchPostCheck = await Board.patchPost(boardId,title,image,content)

        if(patchPostCheck){
            res.status(200).send    ({
                patchPostCheck
            })
        }

        }catch(err) {
            console.log(err)
            res.status(400).send ({
                errorMessage : " 게시물 수정을 위한 정보가 일치하지 않습니다"
            });
        }
};

// //---------------------------------------------------------------------



// 게시물 삭제 -----------------------------------------------------------

exports.deletePost = async(req,res)=>{
    try{   
    const {boardId} = req.params
    const deletePostCheck = await Board.deletePost(boardId)
    if(deletePostCheck)
        res.status(200).send({
            deletePostCheck
        })
    }catch(err) {
        console.log(err)
        res.status(400).send({
            errorMessage : " 게시물 삭제를 위한 정보가 일치하지 않습니다"
        });
    }       
};


//----------------------------------------------------------------------


