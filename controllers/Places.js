const { json } = require('express');
const express = require('express');
const placeRouter = express.Router();
const Place = require('../models/place');

//INDUCES

//CREATE
placeRouter.post('/', async (req, res) => {
    try{
        const newPlace = await Place.create(req.body);
        res
        .status(200)
        .json(newPlace)
    } catch(error){
        res
        .status(400)
        .json(error)

    }
}) 

//READ
placeRouter.get('/', async (req, res) => {
    try{
        const foundPlace = await Place.find({})
        res
        .status(200)
        .json(foundPlace)

    } catch(error){
        res
        .status(400)
        .json(error)

    }

})

//SHOW
placeRouter.get('/:id', async (req, res) => {
    try {
        const foundPlace = await Place.findById(req.params.id)
        res
        .status(200)
        .json(foundPlace)

    } catch(error){
        res
        .status(400)
        .json(error)

    }

})

//DELETE

placeRouter.delete('/:id', async (req, res) => {
    try {
        const foundPlace = await Place.findByIdAndDelete(req.params.id)
        res
        .status(200)
        .json(foundPlace)

    } catch(error) {
        res
        .status(400)
        .json(error)

    }

})

//UPDATE
placeRouter.put('/:id', async (red, res) => {
   try {
    const foundPlace = await Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res
    .status(200)
    .json(foundPlace)
   } catch(error){
       res
       .status(400)
       json(error)

   }
})


module.exports = placeRouter;
