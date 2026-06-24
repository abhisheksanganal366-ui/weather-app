// OpenWeather API configuration
const API_KEY = '9368b3dee66219e53793f12a3c00c427';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorDiv = document.getElementById('error');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const demoBadge = document.getElementById('demoBadge');

// Update badge to live mode
demoBadge.textContent = '🌍 Live – Search Any City';
demoBadge.style.background = 'rgba(40, 200, 100, 0.25)';

// Weather icon mapping
const weatherIcons = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
};

// Event listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) getWeather(city);
    }
});

// Fetch weather data from OpenWeather API
async function getWeather(city) {
    try {
        showLoading();

        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check the key in app.js.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again later.');
            }
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        showError(error.message);
    }
}

// Display weather data
function displayWeather(data) {
    errorDiv.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');

    cityName.textContent = `${data.name}, ${data.sys.country}`;

    const iconCode = data.weather[0].icon;
    weatherIcon.textContent = weatherIcons[iconCode] || '🌡️';

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description
        .replace(/\b\w/g, c => c.toUpperCase());

    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
}

// Show error message
function showError(message) {
    weatherDisplay.classList.add('hidden');
    errorDiv.classList.remove('hidden');
    errorDiv.textContent = message;
}

// Show loading state
function showLoading() {
    weatherDisplay.classList.add('hidden');
    errorDiv.classList.add('hidden');
}
