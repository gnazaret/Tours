const { Schema, model } = require('mongoose');

const placeSchema = new Schema ({

    country: String,
    name: String,
    population: Number

})

const Place = model('Place', placeSchema)

module.exports = Place;