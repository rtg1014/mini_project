const {Board, User} = require("../models");

// // 게시물 작성 services ----------------------------
exports.createPost = async (title, content, image) => {
    return await Board.create({ title, content, image });
};
// // -------------------------------------------------

// 게시물 조회 services -----------------------------------------
exports.getPost = async () => {
    return await Board.findAll({ include: { model: User, attributes: ['nickname'] } });
};

//---------------------------------------------------------------


// 닉네임 찾기 =========================================
// exports.login = async (email) =>{ 
//     return await User.findOne({ attributes: ['nickname'] }, 
//     { where: { email } }
//     );
//  };

//------------------------------------------------------------


// // 게시물 상세조회 controller ----------------------------------------

exports.getPostId = async (boardId) => {
    return await Board.findOne({ include: { model: User, attributes: ['nickname'] } });
};

// //--------------------------------------------------------------------

// // 게시물 수정 controller ---------------------------------------------

exports.patchPost = async (boardId, title, image, content) => {
    return await Board.update(
        { title, content, image },
        { where: { boardId: Number(boardId) } }
    );
};

// //---------------------------------------------------------------------

// //  게시물 삭제 -----------------------------------------------------------

exports.deletePost = async (boardId) => {
    return await Board.destroy({ where: { boardId } });
};

// //----------------------------------------------------------------------
