const { Schema, model } = require('mongoose');

const placeSchema = new Schema ({

    country: String,
    name: String,
    population: Number

})


module.exports = model('place', placeSchema);