/**
 * 主程序入口
 */

let server = require('./server');
let router = require('./router');
let handlers = require('./handlers');

//添加路由
router.addRoute('/', handlers.startHandler);
router.addRoute('/start', handlers.startHandler);
router.addRoute('/upload', handlers.uploadHandler);
router.addRoute('/show', handlers.showHandler);

//启动服务器
server.start(router.serveHTTP);