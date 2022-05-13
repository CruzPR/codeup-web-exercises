"use strict";
$(document).ready(function(){
    // A lot cleaner with JQuery method!
    // ID Selector
    $("#pageLink").html("<h1>Link to somewhere</h1>");
    // Less clean with the HTML method!
        document.getElementById("pageLink").innerHTML = "<h1>Link to somewhere</h1>";
        
    // Class selector
    // $(".list-item")[0].innerHTML = "Hello";
    // Element Selector
        $("*").css({   //Object //Multiple elements
            "background-color": "maroon",
            "color": "red",
            "font-size": "25px",
            "font-weight": "bolder",
            "border": "23px double forestgreen",
            "border-radius": "10px",
            })
            












});