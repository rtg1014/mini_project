const db = require('../models');

// // 게시물 작성 services ----------------------------
exports.createPost = async (title, content, image) => {
    return await db.Board.create({ title, content, image });
};
// // -------------------------------------------------

// 게시물 조회 services -----------------------------------------

exports.getPost = async () => {
    return await db.Board.findAll();
};

//---------------------------------------------------------------

// // 게시물 상세조회 controller ----------------------------------------

exports.getPostId = async (boardId) => {
    return await db.Board.findOne({ where: { boardId } });
};

// //--------------------------------------------------------------------

// // 게시물 수정 controller ---------------------------------------------

exports.patchPost = async (boardId, title, image, content) => {
    return await db.Board.update(
        { title, content, image },
        { where: { boardId: Number(boardId) } }
    );
};

// //---------------------------------------------------------------------

// //  게시물 삭제 -----------------------------------------------------------

exports.deletePost = async (boardId) => {
    return await db.Board.destroy({ where: { boardId } });
};

// //----------------------------------------------------------------------
