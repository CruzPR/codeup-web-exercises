import {DEMO_API_KEY} from "../js/keys.js";

// this is the main url the api endpoints is pointing to
export const baseURL = "https://dummyapi.io/data/v1"

// Headers this application uses across the board.
const customHeaders = new Headers({
    "app-id": DEMO_API_KEY,
    'Content-Type': 'application/json'
}) // required by the api to access its value!

// Defaults for fetch request
export const fetchSettings = {
    method: "GET", // or gets
    headers: customHeaders,
}

