// DOM manipulation function that displays location weather information
const loadDisplay = (locationWeather) => {
  const content = document.getElementById("content");
  content.replaceChildren();

  const weatherIcon = document.createElement("img");
  weatherIcon.src = "#";
  weatherIcon.alt = locationWeather.conditions;
  content.appendChild(weatherIcon);

  const locationHeader = document.createElement("h1");
  locationHeader.textContent = locationWeather.locationName;
  content.appendChild(locationHeader);

  const locationTemp = document.createElement("p");
  locationTemp.classList.add("temp");
  locationTemp.textContent = `${locationWeather.temp}°`;
  content.appendChild(locationTemp);

  const locationConditions = document.createElement("p");
  locationConditions.classList.add("conditions");
  locationConditions.textContent = locationWeather.conditions;
  content.appendChild(locationConditions);

  const highLowContainer = document.createElement("div");
  highLowContainer.classList.add("high-low-container");

  const high = document.createElement("p");
  high.textContent = `H:${locationWeather.high}°`;
  highLowContainer.appendChild(high);

  const low = document.createElement("p");
  low.textContent = `L:${locationWeather.low}°`;
  highLowContainer.appendChild(low);
  content.appendChild(highLowContainer);

  const feelsLike = document.createElement("p");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = `Feels like: ${locationWeather.feelsLike}°`;
  content.appendChild(feelsLike);
};

export default loadDisplay;
