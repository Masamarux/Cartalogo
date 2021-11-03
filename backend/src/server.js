import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import AppError from './errors/AppError';

import routes from './routes';

const app = express();
const port = process.env.SERVER_PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
});

app.listen(port, () => {
  console.log(`Backend started on ${port}! ✨`);
});
