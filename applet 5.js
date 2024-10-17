class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;

        this.cityInput = document.getElementById('cityInput');
        this.getWeatherBtn = document.getElementById('getWeatherBtn');
 
        this.getLocationBtn = document.getElementById('getLocationBtn');
    }
}