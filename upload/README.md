这个程序来自于[这个教程](https://segmentfault.com/a/1190000010006673) 

## 功能描述
可以上传一个图片到HTTP server, 在上传成功后后在网页上把上传的图片显示出来。<br/><br/>
## 实例价值
可以基于`它的骨架`开发其他原生小应用。 下面会有解释。<br/><br/>
## 如何运行
1. 下载该程序
2. cd upload && npm install formidable   //formidable为第三方文件上传模块
3. node index.js
<br/><br/>
## 各个文件模块作用解释
首先，对一个HTTP server来说，处理流程大致如此：<br/>
接受Client请求，根据`请求的URL`找到`对应的处理函数`，返回结果。
其中最核心的控制部分就是配置`URL与其处理函数`映射。

>upload
>>index.js   //主程序入口，配置`URL与其处理函数`映射，启动server<br/>
>>server.js  //HTTP server模块<br/>
>>router.js  //用来配置`URL与其处理函数`映射的模块<br/>
>>handlers.js //所有的URL处理函数模块<br/>
>>storage   //上传图片的存储目录<br/>
