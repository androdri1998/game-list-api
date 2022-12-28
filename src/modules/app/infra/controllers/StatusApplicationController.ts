import { Request, Response } from "express";

import StatusApplicationControllerImp from '../../controllers/StatusApplicationController';
import GetStatusApplicationServiceImp, { ExecuteResponse } from '../../services/GetStatusApplicationServiceImp';
import HTTP_STATUS from '../constants/HttpStatus';

class StatusApplicationController implements StatusApplicationControllerImp<Request, Response, Response<Promise<ExecuteResponse>>> {
  getStatusApplicationService: GetStatusApplicationServiceImp;

  constructor(getStatusApplicationService: GetStatusApplicationServiceImp) {
    this.getStatusApplicationService = getStatusApplicationService;

    this.get = this.get.bind(this);
  }

  async get(req: Request, res: Response): Promise<Response<Promise<ExecuteResponse>>> {
    const response = await this.getStatusApplicationService.execute();
    return res.status(HTTP_STATUS.OK).json(response);
  }
}

export default StatusApplicationController;
