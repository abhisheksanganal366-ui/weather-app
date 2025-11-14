# Weather App

A simple and beautiful weather application that displays current weather information for any city using the OpenWeather API.

## Features

- Search for any city worldwide
- Display current temperature in Celsius
- Show weather description and icon
- Display additional details (feels like, humidity, wind speed)
- Responsive design for mobile and desktop
- Beautiful gradient UI with smooth animations

## Setup Instructions

1. Get your free API key from [OpenWeather API](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key

2. Open `app.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

3. Open `index.html` in your web browser

## Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather information

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- JavaScript (ES6+)
- OpenWeather API
- JSON for configuration

## File Structure

- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `app.js` - JavaScript logic and API integration
- `config.json` - Configuration settings
- `README.md` - Documentation

## API Information

This app uses the OpenWeather API (free tier) which provides:
- Current weather data
- 60 calls/minute
- 1,000,000 calls/month

## License

Free to use for personal and educational purposes.
