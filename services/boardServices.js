const Board = require("../models/board")



// 게시물 작성 services ----------------------------
exports.createPost = async (req,res)=>{


};
// -------------------------------------------------




// 게시물 조회 services -----------------------------------------
exports.getPost = async (boardId)=>{
    await (boardId)
    if(Board['boardId'] === boardId){
        return true
    } else {
        return false
    }
};




//---------------------------------------------------------------


// 게시물 상세조회 controller ----------------------------------------
exports.getPostId


//--------------------------------------------------------------------



// 게시물 수정 controller ---------------------------------------------
exports.patchPost



//---------------------------------------------------------------------




//  게시물 삭제 -----------------------------------------------------------
exports.deletePost



//----------------------------------------------------------------------