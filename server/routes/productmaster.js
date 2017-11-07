const express = require('express');
const router = express.Router();

const product = require('../models/product');

/* GET api listing. */
router.get('/products', (req, res)=>{
  product.find(function(err,products){
      res.json(products);
  });
  
});

/* get Single product BY ID */
router.get('/products/:id', function(req, res, next) {
  product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* Save api listing. */
router.post('/products', (req, res,next) =>{
    let newProduct=new product({
        productname: req.body.productname
    });
    newProduct.save((err,product)=>{
        if(err){
            res.json({msg:'Failed to add Product'});
        }else{
            res.json({msg:'Product Saved Successfully'});
        }
    });
    
});

/* Update products */
router.put('/products/:id', function(req, res, next) {
  product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* delete api listing. */
router.delete('/products/:id', (req, res,next) =>{   
    product.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});


module.exports = router;
