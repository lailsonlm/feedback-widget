import cors from 'cors';
import express from 'express'
import { routes } from './router';

const app = express();

app.use(cors({
  // origin: 'https://localhost:3000'
}));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!')
})