import axios from "axios"


export default axios.create({
    // baseURL: "https://76e8-188-2-227-120.eu.ngrok.io", // add your NGROK url => ngrok http 8080
    baseURL: "http://localhost:8080/",
    headers: {
        // "ngrok-skip-browser-warning": "true",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // "Access-Control-Allow-Origin" : "true",
        // "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization"
    }
})
