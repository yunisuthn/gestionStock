const mongoose = require('mongoose');

const EntrerSortie = mongoose.Schema({
    _id: {type:Number, required:true},
    type: {type:String, required:true},
    numFacture: {type:String, required:true},
    fournisseur: { type: String},
    //date: req.body.date,
    reference: { type: String, required: true},
    nombre: { type: Number, required: true},
    user: { type: Number, required: true},

},
{
    timestamps: true
}
);

module.exports = mongoose.model('entrerSortie', EntrerSortie);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);