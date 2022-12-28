import GetStatusApplicationServiceImp, { ExecuteResponse } from './GetStatusApplicationServiceImp';

class GetStatusApplicationService implements GetStatusApplicationServiceImp {
  async execute(): Promise<ExecuteResponse> {
    return {
      message: "application it's running",
    }
  }
}

export default GetStatusApplicationService;
