const express = require("express");
const app = express(); 
const port = 4000;
const db = require('./models');
const cors = require('cors')


db.sequelize 
    .sync() 
    .then(() => { 
        console.log('db 연결 성공'); }) .catch(console.error);


const boardRouter = require('./routes/board'); 



app.use(express.urlencoded());  
app.use(express.json());    

app.post('/')


app.use('/', [boardRouter]);



app.listen(port, () => {
    console.log( '포트로 서버가 켜졌어요!', port);
})