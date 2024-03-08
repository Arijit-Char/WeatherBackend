# Weather Forecast API

This is a simple Express.js server that provides a weather forecast API using the OpenWeatherMap API.

## Features

- Provides weather forecast data based on location or coordinates.
- Supports fetching weather forecast data in metric units.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key to the `.env` file as `WEATHER_API_KEY=<your-api-key>`.
4. Run the server by executing `npm start`.
5. Access the weather forecast API at `http://localhost:5000/weather`.

## Usage

### Fetch Weather Forecast by Location

GET /weather?location=<city-name>

Example:GET /weather?location=London


### Fetch Weather Forecast by Coordinates

GET /weather?lat=<latitude>&lon=<longitude>


