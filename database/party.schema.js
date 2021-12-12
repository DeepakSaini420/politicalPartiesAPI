const mongoose = require('mongoose');

const Party = new mongoose.Schema({
    partyId:{
        type:String,
        required:true
    },
    partyName:{
        type:String,
        required:true,
    },
    partyShortName:{
        type:String,
        required:true
    },
    partyPoster:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Party',Party);