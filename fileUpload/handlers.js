/**
 * 
 */

let querystring = require("querystring");
let formidable = require("formidable");
let fs = require("fs");

function startHandler(response, request) {
  console.log("Request handler 'start' was called.");

  let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.write(body);
  response.end();
}

function uploadHandler(response, request) {
  console.log("Request handler 'upload' was called.");

  let form = new formidable.IncomingForm();
  form.uploadDir = "./storage";   //自定义上传文件存储路径
  
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");

    fs.renameSync(files.upload.path, "./storage/test.png");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function showHandler(response, request) {
  console.log("Request handler 'show' was called.");

  fs.readFile("./storage/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

//
exports.startHandler = startHandler;
exports.uploadHandler = uploadHandler;
exports.showHandler = showHandler;