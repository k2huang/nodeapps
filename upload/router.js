/**
 * 根据请求的URL从路由表中选择合适处理函数
 */

//路由表 - URL:Handler映射表
let tables = {};

//添加路由
function addRoute(url, handler) {
  tables[url] = handler;
}

//路由处理
function serveHTTP(response, request) {
  var url =  request.url
  console.log("route a request for { " + url + " }");

  if (typeof tables[url] === 'function') {
    tables[url](response, request);
  } else {
    console.log("No request handler found for { " + url + " }");
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Page not found");
    response.end();
  }
}

//导出
exports.addRoute = addRoute;
exports.serveHTTP = serveHTTP;