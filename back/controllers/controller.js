const User = require('../model/schemaUser.js');
const Article = require('../model/article.js');
const Sortie = require('../model/sortie.js');
const passwordHash = require("password-hash");
const Isemail = require('isemail')

var front = []
const fs = require("fs");


exports.signup = (req, res) => {
   
    if (!req.body.nom || !req.body.prenom || !req.body.email || !req.body.password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        res.status(400).json({
            "text": "Requête invalide"
        })
    } else {
        User.find().then(users => {
            //res.send(notes);//autoincrement
            var idautom
            if (users.length == 0) {
                idautom = 0
            } else {
                idautom = parseInt(users[users.length - 1]._id) + 1
            }
            console.log('user==', idautom);

     
            if (Isemail.validate(req.body.email)) {
                const profil = new User({
                    _id: idautom,
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    password: passwordHash.generate(req.body.password)
                })
                //let business = new Business(req.body);
                
                profil.save()
                .then(business => {
                    res.status(200).json({'user': 'users in added successfully'});
                })
                .catch(err => {
                    res.status(400).send("unable to save to database");
                });
            
            } else {
                ///console.log('mail non ok');
                res.send('Email incorrect')
            }
        })
    }
}


exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        res.status(400).json({
            "text": "Requête invalide"
        })
    } else {
        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (err) {
                res.status(500).json({
                    "text": "Erreur interne"
                })
            } else if (!user) {
                res.status(401).json({
                    "text": "L'utilisateur n'existe pas"
                })
            } else {
                if (user.authenticate(req.body.password)) {
                    console.log('front  ==== ', front);

                    res.status(200).json({
                        "token": user.getToken(),
                        "text": "Authentification réussi",
                        'id': user._id
                    })
                } else {
                    res.status(401).json({
                        "text": "Mot de passe incorrect"
                    })
                }
            }
        })
    }
}


exports.createArt = (req, res) => {
    if (!req.body.nomPiece) {

        console.log('console.log 2 ' + req.body.nomPiece);


        return res.status(400).send({
            message: "nomPiece content can not be empty"

        });
    }

    Article.find()
        .then(user => {
            //autoincrement
            let idautom;
            if (user.length == 0) {
                idautom = 0
            } else {
                idautom = parseInt(user[user.length - 1]._id) + 1
            }

            const art = new Article({

                _id: idautom,
                nomPiece: req.body.nomPiece,
                prixUnit: req.body.prixUnit,
                //date: req.body.date,

                nbStock: req.body.nbStock,
                prixStock: req.body.prixUnit * req.body.nbStock,
                stockMin: req.body.stockMin,
            });

            art.save()
                .then(() => {
                    Article.find()
                        .then(data => {
                            res.send(data);
                            console.log('data==== ', data);

                        })
                }).catch(err => {
                    res.status(200).send({
                        message: err.message || "Something wrong while creating the article."

                    });
                });
        })
};

exports.findArt = (req, res) => {
    Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {
                res.send(art);
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });
};


exports.findSortie = (req, res) => {
    Sortie.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {
                res.send(art);
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });
};
exports.sortieArt = (req, res) => {
    
    Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {

                if ((art[i].nomPiece == req.body.nomPiece ) && (art[i].nbStock>=req.body.nombre) ) {

                    console.log('console.log 2 ' + req.body.nomPiece);
                    console.log('console.log id ' + art[i].id);
                    Article.findByIdAndUpdate( art[i].id, {
                        nbStock : art[i].nbStock - req.body.nombre,
                        prixStock : art[i].prixUnit * (art[i].nbStock - req.body.nombre)
                    }, { new: true })
                        .then(note => {
                            if (!note) {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            res.send(note);
                        }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            return res.status(500).send({
                                message: "Error updating note with id " + art[i].id
                            });
                        });

                    


                    Sortie.find()
                        .then(user => {
                            //autoincrement
                            let idautom;
                            if (user.length == 0) {
                                idautom = 0
                            } else {
                                idautom = parseInt(user[user.length - 1]._id) + 1
                            }
                
                            const art = new Sortie({
                
                                _id: idautom,
                                nomPiece: req.body.nomPiece,
                                prixUnit: req.body.prixUnit,
                                //date: req.body.date,
                
                                nombre: req.body.nombre,
                                total: req.body.nombre * req.body.prixUnit
                            });
                
                            art.save()
                                .then(() => {
                                    Sortie.find()
                                        .then(data => {
                                            res.send(data);
                                            console.log('data==== ', data);
                
                                        })
                                }).catch(err => {
                                    res.status(200).send({
                                        message: err.message || "Something wrong while creating the article."
                
                                    });
                                });
                        })



                }else{

                    return res.status(400).send({
                        message: "pièce not found or number sock insuffisant"

                    });
                }

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });

};


exports.updateArticle = (req, res) => {


    Article.findById(req.params.id, function(err, article) {
        if (!article)
          res.status(404).send("data is not found");
        else {
    
            article.nomPiece = req.body.nomPiece;
            article.prixUnit = req.body.prixUnit;
            //date: req.body.date,
    
            article.nbStock = req.body.nbStock;
            article.prixStock = req.body.prixUnit * req.body.nbStock;
            article.stockMin = req.body.stockMin;
            
            article.save().then(businArticleess => {
              res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });
    // Validate Request
    /* if (!req.body.nomPiece) {
        return res.status(400).send({
            message: "article content can not be empty"
        });
    }
    // Find note and update it with the request body
    Article.findByIdAndUpdate(req.params.noteId, {
        
        nomPiece: req.body.nomPiece,
        prixUnit: req.body.prixUnit,
        //date: req.body.date,

        nbStock: req.body.nbStock,
        prixStock: req.body.prixUnit * req.body.nbStock,
        stockMin: req.body.stockMin
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        }); */
}


exports.updateSortie = (req, res) => {
    // Validate Request
    if (!req.body.nomPiece) {
        return res.status(400).send({
            message: "article content can not be empty"
        });
    }


    Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {

                if ((art[i].nomPiece == req.body.nomPiece ) && (art[i].nbStock>=req.body.nombre) ) {

                    console.log('console.log 2 ' + req.body.nomPiece);
                    console.log('console.log id ' + art[i].id);
                    Article.findByIdAndUpdate( art[i].id, {
                        nbStock : art[i].nbStock - req.body.nombre,
                        prixStock : art[i].prixUnit * (art[i].nbStock - req.body.nombre)
                    }, { new: true })
                        .then(note => {
                            if (!note) {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            res.send(note);
                        }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            return res.status(500).send({
                                message: "Error updating note with id " + art[i].id
                            });
                        });

                    


                    

                    Sortie.findByIdAndUpdate(req.params.noteId, {
                        
                        nomPiece: req.body.nomPiece,
                        prixUnit: req.body.prixUnit,
                        //date: req.body.date,
        
                        nombre: req.body.nombre,
                        total: req.body.nombre * req.body.prixUnit,

                    }, { new: true })
                        .then(note => {
                            if (!note) {
                                return res.status(404).send({
                                    message: "Note not found with id " + req.params.noteId
                                });
                            }
                            res.send(note);
                        }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Note not found with id " + req.params.noteId
                                });
                            }
                            return res.status(500).send({
                                message: "Error updating note with id " + req.params.noteId
                            });
                        });


                }else{

                    return res.status(400).send({
                        message: "pièce not found or number sock insuffisant"

                    });
                }

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });


}


/*exports.signup = (req, res) => {
    if (!req.body.nom || !req.body.prenom || !req.body.email || !req.body.password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        res.status(400).json({
            "text": "Requête invalide"
        })
    } else {
        User.find()
            .then(users => {
                //res.send(notes);//autoincrement
                var idautom
                if (users.length == 0) {
                    idautom = 0
                } else {
                    idautom = parseInt(users[users.length - 1]._id) + 1
                }
                console.log('user==', idautom);

                var user = {
                    _id: idautom,
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    email: req.body.email,
                    password: passwordHash.generate(req.body.password)
                }
                var findUser = new Promise(function (resolve, reject) {
                    User.findOne({
                        email: user.email
                    }, function (err, result) {
                        if (err) {
                            //reject(500);
                            res.status(500).json({
                                "text": "Erreur interne1"
                            })
                        } else {
                            if (result) {
                                reject(204)
                            } else {
                                resolve(true)
                            }
                        }
                    })
                })

                findUser.then(function () {
                    var _u = new User(user);
                    _u.save(function (err, user) {
                        if (err) {
                            res.status(500).json({
                                "text": "Erreur interne2"
                            })
                        } else {
                            res.status(200).json({
                                "text": "Succès",
                                "token": user.getToken(),
                                "id": user._id
                            })
                        }
                    })
                }, function (error) {
                    switch (error) {
                        case 500:
                            res.status(500).json({
                                "text": "Erreur interne3"
                            })
                            break;
                        case 204:
                            res.status(204).json({
                                "text": "L'adresse email existe déjà"
                            })
                            break;
                        default:
                            res.status(500).json({
                                "text": "Erreur interne4"
                            })
                    }
                })
            }).catch(err => {
                res.status(500).send({
                    message: err.message || 'some error'
                });
            });
    }
}
 */