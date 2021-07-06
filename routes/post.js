const express = require("express");
var router = express.Router();
const Item = require('../models/Item');
const authenticate = require("../middleware/auth");

 // @route   GET /posts
  // @desc    get all Items in db
  // @access  Private
router.get('/', authenticate, (req, res) => {
    Item.find()
      .then((items) => 
      {
        console.log(items);
        return res.json(items)
      });
  });
  
  
  // @route   POST /posts
  // @desc    Create An Item
  // @access  Private
  router.post('/', authenticate, (req, res) => {
    const newItem = new Item({
      title: req.body.title,
      content: req.body.content
    });
  
    newItem.save().then(item => res.json(item));
  });
  
  
module.exports = router;