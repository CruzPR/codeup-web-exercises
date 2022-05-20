
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
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log('A step further - information for tomorrow: ', data.daily[1]);
    console.log(data.current.temp);
    console.log(data.current.weather[0].description);
    // loop through daily
    console.log(data.daily); // it is an array, each day is an object
    $("#current").append("<p>" + data.current.temp + "</p>")
    
    data.daily.forEach(function(dailyForecast, index){
        if(index < 5){
            let humidity = "Humidity:"
            let datetime = new Date(dailyForecast.dt * 1000);
            console.log(datetime)
            // console.log(datetime.getMonth() + " " + datetime.getDate());
            let dateMonth = months[datetime.getMonth()] + " " + datetime.getDate();
            $("#forecast").append("<h3>" + datetime + "</h3>" + "<p style='color: blue'>" + "Low: " + dailyForecast.temp.min +"°F"+ "</p>" + "<p style='color: red'>" + "High: " + dailyForecast.temp.max + "°F" + "</p>" + "<p style='color: cadetblue'>" + humidity + " " + dailyForecast.humidity + "%" + "</p>");
            
            
        }
        
        
        
        
    });
    
    
    
});

