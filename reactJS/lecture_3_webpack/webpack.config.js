const path = require('path');//node 모르지? 외워

module.exports={
    name : 'wordrelay-setting',
    mode: 'development',//실서비스 : production
    devtool:'eval',//빠르게
    resolve:{
        extensions:['.js','.jsx']
    },

    entry:{
        app : ['./client'],//알아서 wordRelay, react, react-dom(여기서 다불러왔거든ㅋ) 확장자 생략가능
    },//입력
    output:{
        path: path.join(__dirname,'dist'), //현재폴더 + dist 조인
        filename: 'app.js'
    },//출력
}