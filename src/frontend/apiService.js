import axios from "axios";

const BASE_URL = "https://petstore3.swagger.io/api/v3/openapi.json"; // Replace with your Swagger API base URL

export const fetchCountries = async () => {
  try {
    const response = await axios.get(
      //   `${BASE_URL}/pet/findByStatus?status=available`
      //   `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available`
      `https://weatherappbackend-k6pp.onrender.com/api/weather?city=Paris&country=France`
    );
    return response;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const fetchCities = async (countryCode) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/countries/${countryCode}/cities`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};

export const fetchWeather = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: { city: cityName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};
