const mongoose = require('mongoose')

const Schema = mongoose.Schema

const produtoSchema = new Schema({
    name: {type:String, required: true},
    id:{type:Number,required: true,unique:true},
    price: {type: Number, required: true},
    
})
//criando um modelo a partir do esquema
module.exports = mongoose.model("produtoModel",produtoSchema) 