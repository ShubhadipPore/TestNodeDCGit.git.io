const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let inmaterial = new Schema(
    {
        itemcode: {type: String},
        purchaer: {type: String},
        vendor: {type: String},
        price: {type: Number}
    },
    {
        timestamps: true
    }
   
);

module.exports = mongoose.model("inmaterial", inmaterial);
    