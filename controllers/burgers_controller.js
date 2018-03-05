// require express, require burger.js for DBfunc, declare Router
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// routes
// GET
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST

// PUT