const account = require('../controllers/controllers');

module.exports = function (app) {
    app.post('/login',account.login)
    .post('/signup',account.signup)


    .post('/article', account.createArt)
    .get('/article', account.findArt)
    .post('/autoIncr/:noteId', account.auto)
    .get('/article/:profilId', account.findOneArt)
    .post('/article/:noteId', account.update)
    // .delete('/article/:noteId', account.delete)
    .get('/userArticle/:noteId', account.findUserArt)
    //.post('/activer/:noteId', account.activer)
}