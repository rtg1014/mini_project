const express = require("express");
const app = express(); 
const port = 4000;
const db = require('./models')

db.sequelize 
    .sync() 
    .then(() => { 
        console.log('db 연결 성공'); }) .catch(console.error);


const boardRouter = require('./routes/board');  

app.use(express.urlencoded());  
app.use(express.json());    

app.use('/', [boardRouter]);

app.listen(port, () => {
    console.log(port, '포트로 서버가 켜졌어요!');
})