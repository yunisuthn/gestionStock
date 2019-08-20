const account = require("../controllers/controller");

module.exports = function(app) {
  app.post('/login',account.login)
    .post('/signup',account.signup)


    .post('/article', account.createArt)
    .get('/article/:noteId', account.findArt)
    .post('/sortie', account.sortieArt)
    .get('/sortie', account.findSortie)

    .post('/article/:noteId', account.updateArticle)
    .post('/sortie/:noteId', account.updateSortie)

};
