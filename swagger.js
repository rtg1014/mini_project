const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        version: '1.0.0',
        title: '여행의민족',
        description: '항해99 1조 Miniproject',
    },
    host: 'localhost:4000',
    basePath: '',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Users',
            description: '로그인, 회원가입, 중복 검사',
        },
        {
            name: 'board',
            description:
                '게시물 작성, 게시물 조회, 게시물 삭제, 게시물 수정, 게시물 상세조회',
        },
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'X-API-KEY',
            description: 'any description...',
        },
    },
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/user.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
