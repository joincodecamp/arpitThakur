const express = require('express')
const app = express()
const todo = require('./models/todoModel')
const mongoose = require('mongoose');
var cors = require('cors') 
app.use(cors())
const port = 7000

app.use(express.json())
app.get('/',(req,res)=>{
  res.send('Serever is running on the port ')
})

app.post('/add_todo',async(req,res)=>{
  const data = new todo({
    content:req.body.content,
  });
  try {
    const savedTodo = await data.save();
    res.json({"success" : true})
  } catch (error) {
    res.json({message:error})
    
  }
});
app.get('/get_todo',async(req,res)=>{
  try {
    const savedTodo = await todo.find() ;
    res.json({savedTodo})
  } catch (error) {
    res.json({message:error})
    
  }
});

 





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://arpitThakur4931:Bullshit7@cluster0.l9btlcq.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log("connected")).catch(() => console.log("error"))