/**
 * HTTP Server
 */

let http = require("http");

let start = (serveHTTP) => {
    let onRequest = (request, response) => {
        console.log(request.method + ' ' + request.url);

        serveHTTP(response, request);
    };

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
    console.log("请在浏览器中打开 http://127.0.0.1:8888...");
}

//导出
exports.start = start;