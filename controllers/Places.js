const express = require('express');
const placeRouter = express.Router();
const Place = require('../models/place');

//INDUCES

//CREATE
placeRouter.post('/planner', async (req, res) => {
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
placeRouter.get('/planner', async (req, res) => {
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

module.exports = placeRouter;
