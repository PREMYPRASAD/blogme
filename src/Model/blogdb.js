const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/Blogs?retryWrites=true&w=majority')
    .then(() => {
        console.log("my mongodb connected success");
    })
    .catch(error => {
        console.log("error")
    })
const Schema = mongoose.Schema;

var NewBloggerSchema = new Schema({
    bloggerId: Number,
    bloggerName: String,
    imageUrl: String,
    blogTitle: String,
    blogDate: String,
    blogContent: String,
    blogCommentPreson: String,
    blogCommentPreson1: String,
    blogCommentPreson2: String,
    blogComment: String,
    blogComment1: String,
    blogComment2: String,

})

var Blogger = mongoose.model('Blogger', NewBloggerSchema);

module.exports = Blogger;