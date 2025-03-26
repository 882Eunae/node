//express-server/app.js 
const express = require('express');
const app = express();
const {
    query
} = require('./mapper/emp-map.js');

app.listen(5000, () => {
    console.log('Serverconnect');
    console.log('http://localhost:5000');
});

//라우팅? 작성 REST API 기반  endpoint,서비스,응답형태 
// 전체조회 : GET + '/emps' 

/*
 content-type     | express
 GET +QueryString | request.query
 POST+QueryString | request.body
 JSON             | request.body   
 경로에 값을 전달 | request.params 
*/
//미들웨어 등록 
// application/x-www-form-urlencoed
app.use(express.urlencoded({
    extended: false
}));
// application/json
app.use(express.json());

const empRouter = require('./router/emp_router.js');
app.use('/', empRouter);

//Error 
app.use(function (err, req, res, next) {
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
        // res.status(500).sendFile('error.html');
    });
});
app.get('/error', (req, res, next) => {
    next(new Error('Process Fail! check data!'));
});

//정적파일 (css,html,js,image등 처리)
//app.use(express.static('./fruits')); //앞에 경로가따로없는 경우 '/' 가 기본값임 
app.use('/img',express.static('./fruits'));
 