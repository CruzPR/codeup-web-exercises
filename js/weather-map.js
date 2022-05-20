
"use strict";

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    console.log(data.current.temp);
    console.log(data.current.weather[0].description);
    // loop through daily
    console.log(data.daily); // it is an array, each day is an object
    data.daily.forEach(function(dailyForecast, index){
        if(index < 5){
        
            console.log(dailyForecast.temp.max); // console.log each step of the way. 
            console.log(dailyForecast.temp.min);
            
        }
        
        
        
        
    })
    
    
    
});

