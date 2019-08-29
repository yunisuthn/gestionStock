const User = require('../model/schemaUser.js');
const Article = require('../model/article.js');
const Entrer = require('../model/entrer.js');
const Sortie = require('../model/sortie.js');
const EntrerSortie = require('../model/entrerSortie.js');
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
                                "text": "Erreur interne"
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
                                "text": "Erreur interne"
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
                                "text": "Erreur interne"
                            })
                            break;
                        case 204:
                            res.status(204).json({
                                "text": "L'adresse email existe déjà"
                            })
                            break;
                        default:
                            res.status(500).json({
                                "text": "Erreur interne"
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
                reference: 'ART-000' + idautom,
                nomPiece: req.body.nomPiece,
                description: req.body.description,
                prixUnit: req.body.prixUnit,
                nbStock: 0,
                prixStock: 0,
                stockMin: req.body.stockMin,
                user: req.body.user
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
    var data = []
    Article.find()
        .then(notes => {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].user == req.params.noteId) {
                    data.push(notes[i]);
                }
            }
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });
    /* Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {
                res.send(art);
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        }); */
};


exports.findOneArt = (req, res) => {

    let id = req.params.id;
    Article.findById(id, function (err, art) {
        res.json(art);
    });
};



exports.updateArticle = (req, res) => {


    Article.findById(req.params.id, function (err, article) {
        if (!article)
            res.status(404).send("data is not found");
        else {

            article.reference = req.body.reference,
            article.nomPiece = req.body.nomPiece,
            article.description = req.body.description,
            article.prixUnit = req.body.prixUnit,
            article.nbStock = req.body.nbStock,
            article.prixStock = req.body.prixUnit * req.body.nbStock,
            article.stockMin = req.body.stockMin,


            article.save().then(businArticleess => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("unable to update the database");
            });
        }
    });
}

exports.deleteArticle = (req, res) => {


    Article.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
}
exports.createEntrer = (req, res) => {
    Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {
                console.log('req.body.refence.body====================================', req.body.reference);
                console.log('art.length ', art.length);
                console.log('art[i].reference====================================', art[i].reference);
                if (art[i].reference == req.body.reference){
                    console.log('console.log 2 ' + req.body.reference);
                    console.log('console.log id ' + art[i]._id);
                    Article.findByIdAndUpdate(art[i]._id, {
                        nbStock: parseInt(art[i].nbStock) + parseInt(req.body.nombreE),
                        prixStock: art[i].prixUnit * (art[i].nbStock + req.body.nombreE)
                    }, { new: true })
                        .then(note => {
                            if (!note) {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            //res.send(note);
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

                    Entrer.find()
                        .then(user => {
                            let idautom;
                            if (user.length == 0) {
                                idautom = 0
                            } else {
                                idautom = parseInt(user[user.length - 1]._id) + 1
                            }

                            const art = new Entrer({
                                _id: idautom,
                                reference: req.body.reference,
                                numFacture: req.body.numFacture,
                                fournisseur: req.body.fournisseur,
                                nombreE: req.body.nombreE,
                                user: req.body.user
                            });

                            art.save()
                                .then(() => {
                                    Entrer.find()
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


                        EntrerSortie.find()
                        .then(user => {
                            console.log('====================================');
                            console.log("entrer sortie");
                            console.log('====================================');
                            let idautom;
                            if (user.length == 0) {
                                idautom = 0
                            } else {
                                idautom = parseInt(user[user.length - 1]._id) + 1
                            }

                            const art = new EntrerSortie({
                                _id: idautom,
                                type: 'Entrée',
                                reference: req.body.reference,
                                numFacture: req.body.numFacture,
                                fournisseur: req.body.fournisseur,
                                nombre: req.body.nombreE,
                                user: req.body.user
                            });

                            art.save()
                                .then(() => {
                                    EntrerSortie.find()
                                        .then(data => {
                                            //res.send(data);
                                            console.log('data Entrer Sortie ==== ', data);

                                        })
                                }).catch(err => {
                                    res.status(200).send({
                                        message: err.message || "Something wrong while creating the entrer sortie."

                                    });
                                });
                        })


                }

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });
};

exports.createSortie = (req, res) => {
    Article.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {

                if ((art[i].reference == req.body.reference) && (art[i].nbStock >= req.body.nombreS)) {

                    console.log('console.log 2 ' + req.body.reference);
                    console.log('console.log id ' + art[i]._id);
                    Article.findByIdAndUpdate(art[i]._id, {

                        nbStock: parseInt(art[i].nbStock) - parseInt(req.body.nombreS),
                        prixStock: art[i].prixUnit * (art[i].nbStock - req.body.nombreS)
                    }, { new: true })
                        .then(note => {
                            if (!note) {
                                return res.status(404).send({
                                    message: "Note not found with id " + art[i].id
                                });
                            }
                            //res.send(note);
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
                            let idautom;
                            if (user.length == 0) {
                                idautom = 0
                            } else {
                                idautom = parseInt(user[user.length - 1]._id) + 1
                            }

                            const art = new Sortie({
                                _id: idautom,
                                numFacture: req.body.numFacture,
                                reference: req.body.reference,
                                nombreS: req.body.nombreS,
                                user: req.body.user,


                            });


                            art.save()
                                .then(() => {
                                    Sortie.find()
                                        .then(data => {
                                            res.send(data);
                                            console.log('data==== ', data);

                                        })
                                })
                        })
                    
                        
                        EntrerSortie.find()
                        .then(user => {
                            console.log('====================================');
                            console.log("entrer sortie");
                            console.log('====================================');
                            let idautom;
                            if (user.length == 0) {
                                idautom = 0
                            } else {
                                idautom = parseInt(user[user.length - 1]._id) + 1
                            }

                            const art = new EntrerSortie({
                                _id: idautom,
                                type: 'Sortie',
                                reference: req.body.reference,
                                numFacture: req.body.numFacture,
                                fournisseur: null,
                                nombre: req.body.nombreS,
                                user: req.body.user,
                            });

                            art.save()
                                .then(() => {
                                    EntrerSortie.find()
                                        .then(data => {
                                            //res.send(data);
                                            console.log('data Entrer Sortie ==== ', data);

                                        })
                                }).catch(err => {
                                    res.status(200).send({
                                        message: err.message || "Something wrong while creating the entrer sortie."

                                    });
                                });
                        })



                }

            }
        })
    /* Article.find()
        .then(art => {
            
            for (let i = 0; i < art.length; i++) {

                if ((art[i].reference == req.body.reference ) && (art[i].nbStock>=req.body.nombreS) ) {

                    console.log('console.log 2 ' + req.body.nomPiece);
                    console.log('console.log id ' + art[i].id);
                    Article.findByIdAndUpdate( art[i].id, {
                        nbStock : art[i].nbStock - req.body.nombreS,
                        prixStock : art[i].prixUnit * (art[i].nbStock - req.body.nombreS)
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
                                numFacture: req.body.numFacture,
                                article: req.body.article,
                                //date: req.body.date,
                
                                nombreS: req.body.nombreS

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



                }

            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });
 */
};

exports.entrerSortie = (req, res) => {
    var data = []
    EntrerSortie.find()
        .then(notes => {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].user == req.params.noteId) {
                    data.push(notes[i]);
                }
            }
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        });



   /*  var data = []
    EntrerSortie.find()
        .then(art => {
            for (let i = 0; i < art.length; i++) {
                if (art[i].user == req.params.noteId) {
                    data.push(art[i]);
                }
            }
            console.log('====================================');
            console.log(art);
            console.log('====================================');
            /* for (let i = 0; i < art.length; i++) {
                res.send(art);
            } * /
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'some error'
            });
        }); */
};
/*
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
        });
} */


/* exports.updateSortie = (req, res) => {
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


} */


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