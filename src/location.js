import WeatherLocationAPI from "./apis.js";

class WeatherLocation {
  constructor(location) {
    this.locationName = location;
    this.api = new WeatherLocationAPI();

    // Weather characteristics
    this.temp = null;
    this.conditions = null;
    this.high = null;
    this.low = null;
    this.feelsLike = null;
  }

  async setWeather() {
    const weatherData = await this.api.getLocationInfo(this.locationName);

    this.temp = weatherData.currentConditions.temp;
    this.conditions = weatherData.currentConditions.conditions;
    this.high = weatherData.days[0].tempmax;
    this.low = weatherData.days[0].tempmin;
    this.feelsLike = weatherData.currentConditions.feelslike;
  }
}

export default WeatherLocation;
