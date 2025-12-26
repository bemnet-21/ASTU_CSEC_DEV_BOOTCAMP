import express from 'express';
import dotenv from 'dotenv';
import contact from './routes/contactRoute.js'
import welcome from './routes/homeRoute.js'
import about from './routes/aboutRoute.js'

dotenv.config({ quiet: true })

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use('/api/v1/contact', contact)
app.use('/api/v1/home', welcome)
app.use('/api/v1/about', about)

