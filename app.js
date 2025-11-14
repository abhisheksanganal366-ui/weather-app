// OpenWeather API configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeather API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const DEMO_MODE = true; // Set to false when you have a real API key

// Sample weather data for demo
const demoData = {
    'london': {
        name: 'London',
        sys: { country: 'GB' },
        weather: [{ description: 'partly cloudy', icon: '02d' }],
        main: { temp: 15, feels_like: 13, humidity: 72 },
        wind: { speed: 4.5 }
    },
    'new york': {
        name: 'New York',
        sys: { country: 'US' },
        weather: [{ description: 'clear sky', icon: '01d' }],
        main: { temp: 22, feels_like: 21, humidity: 55 },
        wind: { speed: 3.2 }
    },
    'tokyo': {
        name: 'Tokyo',
        sys: { country: 'JP' },
        weather: [{ description: 'light rain', icon: '10d' }],
        main: { temp: 18, feels_like: 17, humidity: 80 },
        wind: { speed: 2.8 }
    },
    'paris': {
        name: 'Paris',
        sys: { country: 'FR' },
        weather: [{ description: 'overcast clouds', icon: '04d' }],
        main: { temp: 16, feels_like: 14, humidity: 68 },
        wind: { speed: 5.1 }
    },
    'dubai': {
        name: 'Dubai',
        sys: { country: 'AE' },
        weather: [{ description: 'sunny', icon: '01d' }],
        main: { temp: 35, feels_like: 38, humidity: 45 },
        wind: { speed: 4.0 }
    },
    'sydney': {
        name: 'Sydney',
        sys: { country: 'AU' },
        weather: [{ description: 'few clouds', icon: '02d' }],
        main: { temp: 24, feels_like: 23, humidity: 60 },
        wind: { speed: 6.2 }
    },
    'mumbai': {
        name: 'Mumbai',
        sys: { country: 'IN' },
        weather: [{ description: 'haze', icon: '50d' }],
        main: { temp: 32, feels_like: 36, humidity: 75 },
        wind: { speed: 3.5 }
    },
    'delhi': {
        name: 'Delhi',
        sys: { country: 'IN' },
        weather: [{ description: 'mist', icon: '50d' }],
        main: { temp: 28, feels_like: 30, humidity: 70 },
        wind: { speed: 2.5 }
    },
    'hubli': {
        name: 'Hubli',
        sys: { country: 'IN' },
        weather: [{ description: 'scattered clouds', icon: '03d' }],
        main: { temp: 26, feels_like: 27, humidity: 65 },
        wind: { speed: 3.0 }
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
    if (city) {
        getWeather(city);
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    }
});

// Fetch weather data
async function getWeather(city) {
    try {
        showLoading();
        
        // Demo mode - use sample data
        if (DEMO_MODE) {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
            
            const cityLower = city.toLowerCase();
            const data = demoData[cityLower];
            
            if (data) {
                displayWeather(data);
            } else {
                throw new Error(`City not found in demo mode. Try: ${Object.keys(demoData).join(', ')}`);
            }
            return;
        }
        
        // Real API mode
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your configuration.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again.');
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
    // Hide error and show weather display
    errorDiv.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');
    
    // Update weather information
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    const iconCode = data.weather[0].icon;
    weatherIcon.textContent = weatherIcons[iconCode] || '🌡️';
    
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
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
