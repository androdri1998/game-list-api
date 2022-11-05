import 'express-async-errors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import config from './config';
import Log from '../src/infra/providers/Log';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/home', async (req: Request, res: Response) => {
  res.json({ hello: 'world' });
});

app.listen(config.port, () => {
  const log = new Log(config.generalLogKey);
  log.create({
    message: 'running app', params: {
      port: config.port
    }
  });
})
