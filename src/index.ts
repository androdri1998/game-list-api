import 'express-async-errors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import config from './config';
import Log from './modules/app/infra/providers/Log';
import HandleErrors from './modules/app/infra/middlewares/HandleErrors';
import Messages from './modules/app/constants/Messages';

const app = express();
const appLog = new Log(config.errorLogKey);
const handleErrors = new HandleErrors(appLog, Messages);

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/home', async (req: Request, res: Response) => {
  res.json({ hello: 'world' });
});

app.use(handleErrors.watchErrors);

app.listen(config.port, () => {
  const log = new Log(config.generalLogKey);
  log.create({
    message: 'running app', params: {
      port: config.port
    }
  });
})
