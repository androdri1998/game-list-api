import 'express-async-errors';
import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import config from './config';
import Log from './modules/app/infra/providers/Log';
import HandleErrors from './modules/app/infra/middlewares/HandleErrors';
import Messages from './modules/app/constants/Messages';

import StatusApplicationController from './modules/app/infra/controllers/StatusApplicationController';
import GetStatusApplicationService from './modules/app/services/GetStatusApplicationService';

const app: Express = express();
const appLog = new Log(config.errorLogKey);
const handleErrors = new HandleErrors(appLog, Messages);

const getStatusApplicationService = new GetStatusApplicationService();
const statusApplicationController = new StatusApplicationController(getStatusApplicationService);

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/status', statusApplicationController.get);

app.use(handleErrors.watchErrors);

export default app;
