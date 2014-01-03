harbors ![build status](https://secure.travis-ci.org/coreyti/showdown.png)
=======

一款轻量级的web服务器框架 v0.3.0

这一版本有比较大的改动，虽然bug还是挺多，而且功能也可能没有其他框架多，但我相信，在大家的努力下，harbors将会越来越好。


安装方法：

    npm install harbors

session不再依赖redis，改为文件形式，也许有设计不好的地方，以后有时间也许会参考php的处理方式，也欢迎大家提出自己的意见。

#调用方法

  var harbors = require('harbors');

##harbors2.config(file);

  @file {String} 配置文件的路径，相对安装目录或者绝对路径。

  读取配置文件，配置文件格式在config文件里面有详细的说明

##harbors.module(name,module);

  @name {String} 模块名（随便取，不能重复，后面的会覆盖之前的模块）

  @module {Function} 自定义模块函数

  用于写入自定义的模块组件，传入的函数能够在控制直接引用。模块需要使用原生的req、res函数的话，使用this.req、this.res可以使用。详细说明在module文件夹里有说明。

##harbors.rewrite(name,rewrite);

  @name {String} 这个重写模块的名字。

  @rewrite {Function} 重写模块的处理函数

  用于定义服务器的重写规则，重新处理传入url等规则。

##harbors.start();

  启动服务器



##API

###app

  >**app.get(name,value)**
  >
  >用户get参数：
  >
  >  app.get() => {Name:Value}//取所有的get值
  >
  >  app.get(Name) => Value//取单个get值
  >
  >**app.post(name,value)**
  >
  >  app.post() => {Name:Value}//取所有的post参数
  >
  >  app.post(Name) => Value//取单个post参数
  >
  >**app.cookie(name,value,setting)**
  >
  >
  >**app.session(name,value,setting)**
  >
  >
  >**app.route()**
  >
  >  app.route()=>输出所有路由节点  (/home/index_.js=>[home,index_.js])
  >
  >  app.route(0)=>第一个路由节点  (/home/index_.js=>home)
  >
  >**app.display(path)**
  >
  >  返回一个静态文件。path为设置的服务器根目录，或者绝对地址。
  >
  >**app.send(string)**
  >
  >  返回一个字符串给客户端。
  >
  >**app.notFound()**
  >
  >  返回一个404页面给客户端。
  >
  >**app.error()**
  >
  >  返回一个500错误给客户端。
