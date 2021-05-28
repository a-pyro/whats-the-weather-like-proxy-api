import { Router } from 'express';
import geocoder from '../geocoder/index.js';
import fetch from 'node-fetch';
const router = Router();

router.get('/:city', async (req, res, next) => {
  try {
    const { city } = req.params;
    const response = await geocoder.geocode(city);
    console.log(response);
    res.status(200).send(response);
    geocoder;
  } catch (error) {
    next(error);
    console.log(error);
  }
});

router.get('/weather/:lat/:lon', async (req, res, next) => {
  try {
    const { lat, lon } = req.params;
    const respose = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`
    );
    const data = await respose.json();
    res.status(200).send(data);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

export default router;
