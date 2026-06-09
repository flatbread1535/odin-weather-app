// DOM manipulation function that displays location weather information
const loadDisplay = (locationWeather) => {

  const content = document.getElementById("content");
  content.replaceChildren();

  const container = document.createElement("div");
  container.classList.add("container");

  const weatherIcon = document.createElement("img");
  weatherIcon.src = "#";
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
