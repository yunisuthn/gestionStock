const mongoose = require('mongoose');

const Articl = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nomPiece: {type:String, required:true},
    prixUnit: { type: Number, required: true},
    nbStock: { type: Number, required: true },
    prixStock: { type: Number},
    stockMin: { type: Number},

},
{
    timestamps: true
}
);

module.exports = mongoose.model('atelier', Articl);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);