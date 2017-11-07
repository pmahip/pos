const express = require('express');
const router = express.Router();

const category = require('../models/category');

/* GET api listing. */
router.get('/categories', (req, res)=>{
  category.find(function(err,categories){
      res.json(categories);
  });
  
});

/* get Single category BY ID */
router.get('/categories/:id', function(req, res, next) {
  category.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* Save api listing. */
router.post('/categories', (req, res,next) =>{
    console.log('asdsds');
    let newCategory=new categories({
        categoryname: req.body.categoryname
    });
    newCategory.save((err,category)=>{
        if(err){
            res.json({msg:'Failed to add Category'});
        }else{
            res.json({msg:'Category Saved Successfully'});
        }
    });
    
});

/* Update categories */
router.put('/categories/:id', function(req, res, next) {
  category.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* delete api listing. */
router.delete('/categories/:id', (req, res,next) =>{   
    category.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});


module.exports = router;
