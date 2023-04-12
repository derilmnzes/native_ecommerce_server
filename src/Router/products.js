const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getErrorMessage = require("../Error/error");
const upload = require("../Middlewear/multer");
const Product = require("../Modules/Products");
const { default: axios } = require("axios");




router.post('/upload/image', upload.single('image'), function(req, res) {
try{
  
 res.status(200).send({
  message:'uploaded',
  data:`${req.file.filename}`
 })
}catch(err){
  console.log(err)
}
});




router.get('/get/all',(async (req, res) => {
  try{
    const data = await Product.find()
    res.status(200).send({
      message:'',
      data:data
     })
  }catch(err){

  }
 }));


 router.get('/get/one/:id',(async (req, res) => {

console.log(req.params.id)
  try{
    const data = await Product.findOne({_id:req.params.id})
    res.status(200).send({
      message:'',
      data:data
     })
  }catch(err){
console.log(err)
  }
 }));







router.post('/add', async (req, res) => {
    const { title, price, image,description} = req.body;
    console.log(req.body)
  
    if (!title || !price || !image || !description ) {

      return res.status(400).send({ message: 'All fields are required' });
    }
  
    try {
      // Insert the new product into the database
      const product = new Product({
        title,
        price,
        description,
        image,
      });


      await product.save()

      
  
      res.status(200).send({
        message: 'New Product has been created',
        data: { product },
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal server error' });
    }
  });





module.exports = router;




