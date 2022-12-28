import GetStatusApplicationService from './GetStatusApplicationService';
import GetStatusApplicationServiceImp from './GetStatusApplicationServiceImp';

let getStatusApplicationService: GetStatusApplicationServiceImp;

describe('GetStatusApplicationService test suite', () => {
  beforeEach(() => {
    getStatusApplicationService = new GetStatusApplicationService();
  });

  it('should return expected response when application status is requested', async () => {
    const responseMock = {
      message: "application it's running",
    };

    const response = await getStatusApplicationService.execute();

    expect(response).toEqual(responseMock);
  });
});
