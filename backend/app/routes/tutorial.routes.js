module.exports = app =>{
    const tutorials =require("../controllers/tutorial.controller.js");

    var  router = require("express").Router();

    //Create a new TUTORIAL

    router.post("/",tutorials.create);

    //Retrieve all Tutorials
    router.get("/",tutorials.findAll);

    //Retrive all published Tutorials
    router.get("/published",tutorials.findAllPublished);

    //Retrive a single Tutorialwith id
    router.get("/:id",tutorials.findOne);

    //Update a Tutorial with id
    router.put("/:id",tutorials.update);

    //Delete a Tutorial with id
    router.delete("/:id",tutorials.delete);

    //Create a new Tutorial
    router.delete("/",tutorials.deleteAll);

    app.use('/api/tutorials',router);


};