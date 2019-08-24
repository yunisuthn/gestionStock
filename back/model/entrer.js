const mongoose = require('mongoose');

const Entrer = mongoose.Schema({
    _id: {type:Number, required:true},
    numFacture: {type:String, required:true},
    fournisseur: { type: String, required: true},
    //date: req.body.date,
    reference: { type: String, required: true},
    nombreE: { type: Number, required: true},

},
{
    timestamps: true
}
);

module.exports = mongoose.model('entrer', Entrer);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);