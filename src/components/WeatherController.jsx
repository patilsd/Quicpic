const axios = require('axios');

const getWeather = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data', error });
  }
};

export default getWeather;