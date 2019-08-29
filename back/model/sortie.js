

const mongoose = require('mongoose');

    const Sortie = mongoose.Schema({
        _id: {type:Number, required:true},
        numFacture: {type:String, required:true},
        //date: req.body.date,
        reference: { type: String, required: true},
        nombreS: { type: Number, required: true},
        user: { type: Number, required: true},

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('sortie', Sortie);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); 


/* const mongoose = require('mongoose');

const Sortie = mongoose.Schema({
    _id: {type:Number, required:true},
    nomPiece: {type:String, required:true},
    prixUnit: { type: Number, required: true},
    //date: req.body.date,
    nombre: { type: Number, required: true},
    total: { type: Number, required: true},

},
{
    timestamps: true
}
);

module.exports = mongoose.model('sortie', Sortie);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); */