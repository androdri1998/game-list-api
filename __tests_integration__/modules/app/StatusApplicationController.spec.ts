import app from '../../../src/app';
import RequestService from '../../infra/services/RequestService';

const requestService = new RequestService(app);

describe('StatusApplicationController routes test suite', () => {
  it('should return expected response when application status is requested', async () => {
    const responseMock = {
      message: "application it's running",
    };

    const response = await requestService.get('/status');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(responseMock);
  });
});
