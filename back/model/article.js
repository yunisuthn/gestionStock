const mongoose = require('mongoose');

const Articl = mongoose.Schema({
    
    _id: {type:Number, required:true},
    reference: { type: String, required:true},
    nomPiece: {type:String, required:true},
    description: {type:String},
    prixUnit: { type: Number, required: true},
    nbStock: { type: Number, required:true },
    prixStock: { type: Number, required:true},
    stockMin: { type: Number, required: true},

},
{
    timestamps: true
}
);

module.exports = mongoose.model('atelier', Articl);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);