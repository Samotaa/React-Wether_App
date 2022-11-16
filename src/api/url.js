import apiKey from "./api";

let location
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  export default URL;