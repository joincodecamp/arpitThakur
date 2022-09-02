const express = require('express');
const router = express.Router();
const Post = require('./models/Post')

router.post('/',async(req,res)=>{
  
  console.log(req)
  const user = new Post({
    name:req.body.name,

  });
  try {
    const savedUser = await user.save();
    res.json(savedUser)
  } catch (error) {
    res.json({message:error})
    
  }
});

router.post('/',(req,res)=>{
  console.log(req.body)
})

module.exports = router;