"use strict";
    import {GITHUB_API} from ""

    const apiRequest = ;

    const setting = {
        headers: {
            "Authorization": "token"
        }
    }

    const

    fetch(apiRequest + username + "/event/public")










// Create your own promise

    const wait = (time) => {

        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(time/1000);
            },time)
        })
    };

    wait(2000).then((res) => console.log(`You see this after ${res} second));