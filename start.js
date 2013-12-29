var path = require('path');
var harbors = require('harbors2');

harbors.config(path.join(__dirname,'./config/server.ini'));
harbors.config(path.join(__dirname,'./config/vhost.ini'));

harbors.module('mysql',require('./module/mysql'));

harbors.start();