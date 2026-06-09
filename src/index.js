import LocationWeather from "./location.js";
import loadDisplay from "./display.js";
import "./style.css";

const weatherLoc = new LocationWeather("london");
weatherLoc.setWeather();

const getInput = (onValidInput) => {
  const form = document.querySelector("form");
  const input = document.getElementById("location");
  const inputError = document.querySelector("#location + span.error");

  // Responds to invalid inputs in the search bar
  const showInputError = () => {
    if (input.validity.valueMissing) {
      inputError.textContent = "Please enter the name of a city.";
    } else if (input.validity.tooShort) {
      inputError.textContent = `Location name must be at least ${input.minLength} characters.`;
    }
    inputError.className = "error active";
  };

  // Listens for text input and checks validity
  input.addEventListener("input", () => {
    if (input.validity.valid) {
      inputError.textContent = "";
      inputError.className = "error";
    } else {
      showInputError();
    }
  });

  // Listens for search submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!input.validity.valid) {
      showInputError();
    } else {
      onValidInput(input.value);
      form.reset();
    }
  });
};

getInput(async (location) => {
  try {
    const weatherLoc = new LocationWeather(location);
    await weatherLoc.setWeather();
    loadDisplay(weatherLoc);
  } catch (error) {
    console.error(error);
    const inputError = document.querySelector("#location + span.error");
    inputError.textContent = "Could not load weather for that location.";
    inputError.className = "error active";
  }
});
