const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 8000
// mongodb+srv://arpitThakur4931:Bullshit7@cluster0.l9btlcq.mongodb.net/?retryWrites=true&w=majority

const postsRoute = require('./routes/posts')
app.use('/posts',postsRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect('mongodb+srv://arpitThakur4931:Bullshit7@cluster0.l9btlcq.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log("connected")).catch(() => console.log("error"))