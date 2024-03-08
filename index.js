const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const WEATHER_API_KEY = 'ecf33b7e40da4a8f70d7e2fb3a7bda7d';


app.use(express.json());
app.use(cors());

app.get('/weather', async (req, res) => {
    try {
        let apiUrl;
        const { location, lat, lon } = req.query;

        if (location) {
            apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${WEATHER_API_KEY}`;
        } else if (lat && lon) {
            apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
        } else {
            throw new Error('Location or coordinates not provided');
        }

        const { data } = await axios.get(apiUrl);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
