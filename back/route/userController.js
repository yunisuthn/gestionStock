const account = require("../controllers/controller");

module.exports = function(app) {
  app.post('/login',account.login)
    .post('/signup',account.signup)

    .post('/article', account.createArt)
    .get('/article/:noteId', account.findArt)
    .get('/update/:id', account.findOneArt)
    .post('/article/:id', account.updateArticle)
    .delete('/article/:id', account.deleteArticle)

    .post('/entrer', account.createEntrer)
    .post('/sortie', account.createSortie)
    //.post('/entrerSortie', account.entrerSortie)
    .get('/entrerSortie/:noteId', account.entrerSortie)

};
