const express = require('express');
const BloggerData = require('./src/Model/blogdb')
const cors = require('cors');
const path = require('path');
var app = new express();
var Port = 3002;
app.use(cors());
app.use(express.static(path.join(__dirname + '/dist/FrontEnd')));
app.get("/api/Blogs", function(req, res) {
    BloggerData.find()
        .then(function(blogger) {
            res.send(blogger);
        });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});
app.listen(Port, function() {
    console.log(`listening to port ${Port}`);
});