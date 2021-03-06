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
        console.log('๐ข db ์ฐ๊ฒฐ ์ฑ๊ณต');
    })
    .catch(console.error);

const boardRouter = require('./routes/board');
const userRouter = require('./routes/user');

app.use(express.urlencoded());
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(Cors());
app.use('/', [userRouter, boardRouter]);

app.post('/');
app.get('/', (req, res) => {
    res.send('1์กฐ ๋ฏธ๋ ํ๋ก์ ํธ BE');
});

//์๋ฌ ์ฒ๋ฆฌ
app.use((err, req, res, next) => {
    res.status(err.status || 400).json({ result: false, message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log('๐ข', process.env.PORT, 'ํฌํธ๋ก ์๋ฒ๊ฐ ์ผ์ก์ด์!');
});
