"use strict";
$(document).ready(function(){
    // A lot cleaner with JQuery method!
    // ID Selector
    // $("#pageLink").html("<h1>Back to Home</h1>");
    // Less clean with the HTML method!
        document.getElementById("pageLink").innerHTML = "<h3>Order Here!</h3>";
        
    // Class selector
    // $(".list-item")[0].innerHTML = "Hello";
    // Element Selector
        $("body").css({   //Object //Multiple elements
            "background-color": "tan",
            "color": "rgb(144,29,0)",
            "font-size": "20px",
            "font-weight": "bolder",
            "border": "23px double rgb(144,45,0)",
            "border-radius": "10px",
            "box-shadow": "0px 5px 8px brown"
            })
        $("#pageLink, a, .address").css({
            "color": "brown",
            "text-decoration": "underline",
            "text-align": "center",
            "box-shadow": "0px 5px 8px brown"
        })
        $(".price").css({
            "text-align": "right",
            "margin": "8px"
        })
        $(".codeup, #pageLink").css({
            "text-align": "center",
            "box-shadow": "0px 5px 8px brown"
        })
        $(".established").css({
            "text-align": "center",
            "font-style": "italic"
        })
        $("img").css({"margin-left": "420px",
            "box-shadow": "0px 5px 8px brown",
            
        })
        $("#website").css({"margin-left": "365px"})
        $("hr").css({
            "border-color": "brown",
            "box-shadow": "0px 5px 8px brown"
        })










});