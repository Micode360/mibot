const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const botSchema = new Schema ({
    question: {type: Array, required: true },
    answer: {type: Array, required: true }
},{
    timestamps:true,
});

const botModel = mongoose.model('botModel', botSchema);

module.exports = botModel;