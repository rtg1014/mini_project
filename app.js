const express = require('express');
const app = express();
const db = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const Cors = require('cors');
require('dotenv').config();

db.sequelize
    .sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

const userRouter = require('./routes/user');

app.use(express.urlencoded());
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(Cors());
app.use('/', [userRouter]);

app.get('/', (req, res) => {
    res.send('1조 미니 프로젝트 BE');
});

//에러 처리
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ result: false, message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT, '포트로 서버가 켜졌어요!');
});
