import express from 'express';
import cors from 'cors';
import geolocationRoute from './routes/index.js';
const app = express();

app.use(cors());

app.use(express.json());

app.use('/geolocation', geolocationRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
