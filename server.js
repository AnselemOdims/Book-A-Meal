import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/route';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use('/api/v1', router);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Welcome to Meal-Buka'});
})

app.listen(8233)
console.log('app running on port ', 8233);

export default app;