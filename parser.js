var express = require("express");
var port = process.env.PORT || 8080;
var app = express();

/*
EXAMPLE HEADER
{
    "host":"fcc-api-project-rledford.c9users.io",
    "accept-encoding":"gzip,deflate",
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,**;q=0.8",
    "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Safari/602.1.50",
    "accept-language":"en-us",
    "referer":"https://ide.c9.io/rledford/fcc-api-project",
    "cache-control":"max-age=0",
    "x-forwarded-proto":"https",
    "x-forwarded-port":"443",
    "x-region":"usw",
    "x-forwarded-for":"66.51.32.44",
    "connection":"keep-alive"}
    
    Mozilla/[version] ([system and browser information]) [platform] ([platform details]) [extensions]
*/

app.get("/", function(req, res){
    var useragent = req.headers["user-agent"];
    var software = useragent.substring(useragent.indexOf('(')+1, useragent.indexOf(')'));
    var lang = req.headers["accept-language"];
    var ip = req.headers["x-forwarded-for"];
    res.send(JSON.stringify({ip: ip, language: lang, software: software}));
});

app.listen(port);