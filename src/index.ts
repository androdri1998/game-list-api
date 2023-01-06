import config from './config';
import Log from './modules/app/infra/providers/Log';
import app from './app';

app.listen(config.port, () => {
  const log = new Log(config.generalLogKey);
  log.create({
    message: 'running app', params: {
      port: config.port,
    }
  });
});
