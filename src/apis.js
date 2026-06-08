class WeatherLocationAPI {
  constructor() {
    this.apiKey = "process.env.WEATHER_API_KEY";
    this.apiBaseUrl =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  }

  async getLocationInfo(location) {
    try {
      const response = await fetch(
        `${this.apiBaseUrl}${location}?key=${this.apiKey}`,
      );
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.error(error);
    }
  }
}

export default WeatherLocationAPI;
