import 'express-async-errors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/home', async (req: Request, res: Response) => {
  res.json({ hello: 'world' });
});

app.listen(3000, () => {
  console.log('running app');
})
