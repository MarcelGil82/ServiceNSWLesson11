// import axios from "axios";

// function wait(waitTime) {
//     return new Promise((resolve, reject) => {
//         if(isNaN(waitTime)) {
//             reject (new Error("waitTime must be a number"));
//         } else {
//             setTimeout(() => {
//                 resolve(`You have waited ${waitTime} milliseconds`);
//             }, waitTime);
//         }
//     });
// }
// wait(1000).then((response) => {
//     console.log(response);
// })

// let myResult = wait(10000).then((response) => {     // makes the promise wait 10sec
//     console.log(response);                          // then gives response i.e resolve
// })
// console.log(myResult);

// async function Program() {
//     let myResult = await wait(10000);   // await let the time run down before it outputs myResult
//         console.log(myResult);  
// }

// Program().then(() => {
//     process.exit(0);
// });

// promise is a type of obj that allows you to return a promise later
// async function wrapped in a promise function
const axios = require("axios");
const {weatherApiKey} = require("../config/Keys");

async function getTheWeather(city) {
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`)
}

async function Program() {
    let sydneyWeather = await getTheWeather("Sydney");
    console.log(sydneyWeather.data.main.temp - 273.1);
}
Program().then(() => {
    process.exit(0);
});

async function wait(waitTime) {
    if (isNaN(waitTime)) {
        throw new Error("waitTime must be a number");
    } else {
        return await new Promise(resolve => setTimeout(() => resolve(`You have waited ${waitTime} milliseconds`), waitTime));
    }
}

const axios = require("axios");
const { weatherApiKey } = require("../config/Keys");


async function getTheWeather(city) {
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`)
}

async function Program() {
    let sydneyWeatherPromise = getTheWeather("Sydney");
    let londonWeatherPromise = getTheWeather("London");
    sydneyWeather = await sydneyWeatherPromise;
    londonWeather = await londonWeatherPromise;
    console.log(sydneyWeather.data.main.temp);
    console.log(londonWeather.data.main.temp);

}

Program().then(() => {
    process.exit(0);
});
