import supertest, { SuperTest, Test } from 'supertest';
import { Express } from 'express';

import RequestServiceImp from '../../services/RequestService';

class RequestService implements RequestServiceImp<Test> {
  _server;

  constructor(application: Express) {
    this._server = supertest(application);

    this.get = this.get.bind(this);
  }

  async get(path: string): Promise<Test> {
    const response = await this._server.get(path);
    return response; 
  }
}

export default RequestService;
