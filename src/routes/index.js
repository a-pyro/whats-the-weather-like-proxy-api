import { Router } from 'express';
import geocoder from '../geocoder/index.js';
const router = Router();

router.get('/', async (req, res) => {
  try {
    res.send('hi');
  } catch (error) {
    console.log(error);
  }
});
router.post('/', async (req, res) => {
  try {
    const { city } = req.body;
    const response = await geocoder.geocode(city);
    console.log(response);
    res.send('hi');
    geocoder;
  } catch (error) {
    console.log(error);
  }
});

export default router;
