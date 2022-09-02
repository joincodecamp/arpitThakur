const express = require('express')
const axious = require("axios").default;
const keys = require("./../config/keys");

const router = express.Router();

router.get("/",(req,res)=>{
  res.render("index",{
    pageTitle:"HackYourTemperature App"
  });
});
router.post("/weather",async(req,res)=>{
  const {cityName} = req.body
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${'bfb32a88706e6d455c94f54000d64725'}`;
  try {
    const response = await axious.get(url);
    const {description,icon} = response.data.weather[0];
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const temp = response.data.main.temp;

    res.render("index",{
      pageTitle: "HackYourTemperature App",
      weatherData: true,
      cityName,
      description,
      iconUrl,
      temp:Math.round(temp),
    });
    
  } catch (e) {
    const{message} = e.response.data;
    res.render("index",{
      pageTitle:"HackYourTemperature App",
      message,
    });
    
  }
});
module.exports = router;
