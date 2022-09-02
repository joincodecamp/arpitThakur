const express = require("express")
const hbs = require("express-handlebars")
const app = express();
require('dotenv').config();
// console.log("process.env.NODE_ENV",process.env)

const weatherRoutes = require('./routes/weather');

app.engine("hbs", hbs.engine({ defaultLayout: "main-layout", extname: "hbs" }));
app.set("view engine","hbs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"))

app.use(weatherRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));

