const Board = require("../services/boardServices")


// 게시물 작성 controller ----------------------------------------

exports.createPost = async (req,res)=>{
    
try{
    const {boardId} = req.parms;
    let userCheck = await Board.createPost(boardId)

    if(userCheck){
        res.status(200).send({
            postId: boardId, 
            title: title,
            imageUrl : image,
            nickname : nickname,
            desc : content
        }) 
    } 
    
    }catch {
        res.status(400).send({
            errorMessage: '게시물 생성 조건이 올바르지 않습니다.'
          }); 
    }
};

// ---------------------------------------------------------------


// 게시물 조회 controller -----------------------------------------

exports.getPost = async(req,res)=>{
    try {
    const {boardId} = req.parms;

    let postCheck = await Board.getPost(boardId)

    if(postCheck){
        res.status(200).send({
            title: title,
            imageUrl : image,
            nickname : nickname,
            desc : content
        })
    } 
    } catch {
        res.status(400).send ({
            errorMessage : " 게시물 조회를 위한 정보가 일치하지 않습니다"
        })
    }

};


//-----------------------------------------------------------------




// 게시물 상세조회 controller ----------------------------------------

exports.getPostId = async(req,res)=>{
    try{
    const {boardId} = req.parms;

    let postIdCheck = await Board.getPostId(boardId)

    if(postIdCheck){
        res.status(200).send({
            postid: boardId,
            title: title,
            imageUrl: image,
            nickname: nickname,
            desc: content,
        })
    } 
    
    }catch {
        res.status(400).send ({
            errorMessage : " 게시물 상세 조회를 위한 정보가 일치하지 않습니다"
        });
    }

};



//------------------------------------------------------------------



// 게시물 수정 controller ---------------------------------------------

exports.patchPost = async(req,res)=>{
        try{
        const {boardId} = req.parms;

        let patchPostCheck = await Board.patchPost(boardId)

        if(patchPostCheck){
            res.status(200).send({
                postid: boardId,
                title: title,
                imageUrl: image,
                desc: content,
            })
        } 
        }  catch {
            res.status(400).send ({
                errorMessage : " 게시물 수정을 위한 정보가 일치하지 않습니다"
            });
        }
};

//---------------------------------------------------------------------



//  게시물 삭제 -----------------------------------------------------------

exports.deletePost = async(req,res)=>{
        const {boardId} = req.parms;

        let deletePostCheck = await Board.deletePost(boardId)

        if(deletePostCheck){
            res.status(200).send({
                postId:boardId
            });
        }
};


//----------------------------------------------------------------------