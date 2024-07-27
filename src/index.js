// Load environment variables from the .env file
require("dotenv").config();

// Import Axios
const axios = require("axios");

// Define the city and API key
const KEY = process.env.KEY;
const city = "China"

// Log the API key to check if it's loaded correctly
console.log(KEY);

// Function to get weather data
const getWeather = async (city) => {
   
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: KEY,
                units: "metric" // Use 'imperial' for Fahrenheit
            }
        });

        const data = response.data;
        console.log(`Weather in ${data.name}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
   
};

// Get the weather for the specified city
getWeather(city);
