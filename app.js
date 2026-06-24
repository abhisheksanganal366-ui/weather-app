// OpenWeather API configuration
// Get your FREE API key at: https://openweathermap.org/api
// Then replace 'YOUR_API_KEY_HERE' below with your actual key
const API_KEY = '9368b3dee66219e53793f12a3c00c427';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// If no real API key is set, the app falls back to demo mode with limited cities
const DEMO_MODE = !API_KEY || API_KEY === 'YOUR_API_KEY_HERE';

// Demo data (used only when no API key is provided)
const demoData = {
    'london': {
        name: 'London', sys: { country: 'GB' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 15, feels_like: 13, humidity: 72 }, wind: { speed: 4.5 }
    },
    'new york': {
        name: 'New York', sys: { country: 'US' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 22, feels_like: 21, humidity: 55 }, wind: { speed: 3.2 }
    },
    'tokyo': {
        name: 'Tokyo', sys: { country: 'JP' },
        weather: [{ description: 'light rain', icon: '10d' }],
        main: { temp: 18, feels_like: 17, humidity: 80 }, wind: { speed: 2.8 }
    },
    'paris': {
        name: 'Paris', sys: { country: 'FR' },
        weather: [{ description: 'overcast clouds', icon: '04d' }],
        main: { temp: 16, feels_like: 14, humidity: 68 }, wind: { speed: 5.1 }
    },
    'dubai': {
        name: 'Dubai', sys: { country: 'AE' },
        weather: [{ description: 'sunny', icon: '01d' }],
        main: { temp: 35, feels_like: 38, humidity: 45 }, wind: { speed: 4.0 }
    },
    'sydney': {
        name: 'Sydney', sys: { country: 'AU' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 24, feels_like: 23, humidity: 60 }, wind: { speed: 6.2 }
    },
    'mumbai': {
        name: 'Mumbai', sys: { country: 'IN' },
        weather: [{ description: 'haze', icon: '50d' }],
        main: { temp: 32, feels_like: 36, humidity: 75 }, wind: { speed: 3.5 }
    },
    'delhi': {
        name: 'Delhi', sys: { country: 'IN' },
        weather: [{ description: 'mist', icon: '50d' }],
        main: { temp: 28, feels_like: 30, humidity: 70 }, wind: { speed: 2.5 }
    },
    'hubli': {
        name: 'Hubli', sys: { country: 'IN' },
        weather: [{ description: 'scattered clouds', icon: '03d' }],
        main: { temp: 26, feels_like: 27, humidity: 65 }, wind: { speed: 3.0 }
    },
    'bangalore': {
        name: 'Bangalore', sys: { country: 'IN' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 24, feels_like: 25, humidity: 60 }, wind: { speed: 3.1 }
    },
    'bengaluru': {
        name: 'Bengaluru', sys: { country: 'IN' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 24, feels_like: 25, humidity: 60 }, wind: { speed: 3.1 }
    },
    'chennai': {
        name: 'Chennai', sys: { country: 'IN' },
        weather: [{ description: 'hot and humid', icon: '01d' }],
        main: { temp: 34, feels_like: 38, humidity: 78 }, wind: { speed: 4.2 }
    },
    'kolkata': {
        name: 'Kolkata', sys: { country: 'IN' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 30, feels_like: 33, humidity: 74 }, wind: { speed: 2.9 }
    },
    'hyderabad': {
        name: 'Hyderabad', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 31, feels_like: 33, humidity: 55 }, wind: { speed: 3.8 }
    },
    'pune': {
        name: 'Pune', sys: { country: 'IN' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 27, feels_like: 28, humidity: 58 }, wind: { speed: 3.3 }
    },
    'ahmedabad': {
        name: 'Ahmedabad', sys: { country: 'IN' },
        weather: [{ description: 'sunny', icon: '01d' }],
        main: { temp: 33, feels_like: 35, humidity: 50 }, wind: { speed: 4.0 }
    },
    'jaipur': {
        name: 'Jaipur', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 30, feels_like: 32, humidity: 48 }, wind: { speed: 3.5 }
    },
    'lucknow': {
        name: 'Lucknow', sys: { country: 'IN' },
        weather: [{ description: 'haze', icon: '50d' }],
        main: { temp: 29, feels_like: 31, humidity: 66 }, wind: { speed: 2.7 }
    },
    'surat': {
        name: 'Surat', sys: { country: 'IN' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 32, feels_like: 34, humidity: 68 }, wind: { speed: 3.6 }
    },
    'nagpur': {
        name: 'Nagpur', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 33, feels_like: 36, humidity: 52 }, wind: { speed: 3.2 }
    },
    'indore': {
        name: 'Indore', sys: { country: 'IN' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 29, feels_like: 30, humidity: 54 }, wind: { speed: 3.0 }
    },
    'bhopal': {
        name: 'Bhopal', sys: { country: 'IN' },
        weather: [{ description: 'scattered clouds', icon: '03d' }],
        main: { temp: 28, feels_like: 29, humidity: 57 }, wind: { speed: 2.8 }
    },
    'visakhapatnam': {
        name: 'Visakhapatnam', sys: { country: 'IN' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 30, feels_like: 32, humidity: 70 }, wind: { speed: 4.1 }
    },
    'kochi': {
        name: 'Kochi', sys: { country: 'IN' },
        weather: [{ description: 'light rain', icon: '10d' }],
        main: { temp: 28, feels_like: 30, humidity: 82 }, wind: { speed: 3.9 }
    },
    'coimbatore': {
        name: 'Coimbatore', sys: { country: 'IN' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 27, feels_like: 28, humidity: 63 }, wind: { speed: 3.4 }
    },
    'mysuru': {
        name: 'Mysuru', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 25, feels_like: 26, humidity: 58 }, wind: { speed: 2.6 }
    },
    'mysore': {
        name: 'Mysore', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 25, feels_like: 26, humidity: 58 }, wind: { speed: 2.6 }
    },
    'mangalore': {
        name: 'Mangalore', sys: { country: 'IN' },
        weather: [{ description: 'light rain', icon: '10d' }],
        main: { temp: 27, feels_like: 29, humidity: 80 }, wind: { speed: 4.5 }
    },
    'patna': {
        name: 'Patna', sys: { country: 'IN' },
        weather: [{ description: 'haze', icon: '50d' }],
        main: { temp: 30, feels_like: 32, humidity: 68 }, wind: { speed: 2.5 }
    },
    'chandigarh': {
        name: 'Chandigarh', sys: { country: 'IN' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 27, feels_like: 28, humidity: 50 }, wind: { speed: 3.0 }
    },
    'amritsar': {
        name: 'Amritsar', sys: { country: 'IN' },
        weather: [{ description: 'sunny', icon: '01d' }],
        main: { temp: 28, feels_like: 29, humidity: 48 }, wind: { speed: 2.8 }
    },
    'varanasi': {
        name: 'Varanasi', sys: { country: 'IN' },
        weather: [{ description: 'haze', icon: '50d' }],
        main: { temp: 31, feels_like: 33, humidity: 64 }, wind: { speed: 2.3 }
    },
    'goa': {
        name: 'Goa', sys: { country: 'IN' },
        weather: [{ description: 'light rain', icon: '10d' }],
        main: { temp: 29, feels_like: 31, humidity: 83 }, wind: { speed: 5.0 }
    },
    'shimla': {
        name: 'Shimla', sys: { country: 'IN' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 12, feels_like: 10, humidity: 55 }, wind: { speed: 3.7 }
    },
    'dharwad': {
        name: 'Dharwad', sys: { country: 'IN' },
        weather: [{ description: 'scattered clouds', icon: '03d' }],
        main: { temp: 25, feels_like: 26, humidity: 62 }, wind: { speed: 2.9 }
    }
};

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

// Update badge based on mode
if (DEMO_MODE) {
    demoBadge.textContent = '⚠️ Demo Mode – Limited Cities';
    demoBadge.title = 'Add your API key in app.js to search any city worldwide';
} else {
    demoBadge.textContent = '🌍 Live Mode – All Cities Supported';
    demoBadge.style.background = 'rgba(40, 200, 100, 0.25)';
}

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

// Fetch weather data
async function getWeather(city) {
    try {
        showLoading();

        if (DEMO_MODE) {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 400));

            const cityLower = city.toLowerCase();
            const data = demoData[cityLower];

            if (data) {
                displayWeather(data);
            } else {
                throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
            }
            return;
        }

        // Real API – supports every city in the world
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`City "${city}" not found. Check the spelling and try again.`);
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
        .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize first letter of each word

    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
}

// Show error message
function showError(message) {
    weatherDisplay.classList.add('hidden');
    errorDiv.classList.remove('hidden');
    errorDiv.innerHTML = message.replace(/\n/g, '<br>');
}

// Show loading state
function showLoading() {
    weatherDisplay.classList.add('hidden');
    errorDiv.classList.add('hidden');
}
