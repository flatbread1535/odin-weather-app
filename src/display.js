import clearDay from "./svgs/clear-day.svg";
import clearNight from "./svgs/clear-night.svg";
import partlyCloudyDay from "./svgs/partly-cloudy-day.svg";
import partlyCloudyNight from "./svgs/partly-cloudy-night.svg";
import cloudy from "./svgs/cloudy.svg";
import rain from "./svgs/rain.svg";
import snow from "./svgs/snow.svg";
import wind from "./svgs/wind.svg";
import fog from "./svgs/fog.svg";

// DOM manipulation function that displays location weather information
const loadDisplay = (locationWeather) => {
  const getIconPath = (icon) => {
    switch (icon) {
      case "clear-day":
        return clearDay;
      case "clear-night":
        return clearNight;
      case "partly-cloudy-day":
        return partlyCloudyDay;
      case "partly-cloudy-night":
        return partlyCloudyNight;
      case "cloudy":
        return cloudy;
      case "rain":
        return rain;
      case "snow":
        return snow;
      case "wind":
        return wind;
      case "fog":
        return fog;
      default:
        return "#";
    }
  };

  const content = document.getElementById("content");
  content.replaceChildren();

  const container = document.createElement("div");
  container.classList.add("container");

  const weatherIcon = document.createElement("img");
  const iconPath = getIconPath(locationWeather.icon);
  weatherIcon.src = iconPath;
  weatherIcon.alt = locationWeather.conditions;
  container.appendChild(weatherIcon);

  const locationHeader = document.createElement("h1");
  locationHeader.textContent = locationWeather.locationName;
  container.appendChild(locationHeader);

  const locationTemp = document.createElement("p");
  locationTemp.classList.add("temp");
  locationTemp.textContent = `${locationWeather.temp}°`;
  container.appendChild(locationTemp);

  const locationConditions = document.createElement("p");
  locationConditions.classList.add("conditions");
  locationConditions.textContent = locationWeather.conditions;
  container.appendChild(locationConditions);

  const highLowContainer = document.createElement("div");
  highLowContainer.classList.add("high-low-container");

  const high = document.createElement("p");
  high.textContent = `H:${locationWeather.high}°`;
  highLowContainer.appendChild(high);

  const low = document.createElement("p");
  low.textContent = `L:${locationWeather.low}°`;
  highLowContainer.appendChild(low);
  container.appendChild(highLowContainer);

  const feelsLike = document.createElement("p");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = `Feels like: ${locationWeather.feelsLike}°`;
  container.appendChild(feelsLike);

  content.appendChild(container);
};

export default loadDisplay;
