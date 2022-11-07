import HTTPStatusCode from 'http-status-codes';

import HttpStatusImp from 'modules/app/constants/HttpStatus';

const HttpStatus: HttpStatusImp = {
  INTERNAL_SERVER_ERROR: HTTPStatusCode.INTERNAL_SERVER_ERROR,
  BAD_REQUEST: HTTPStatusCode.BAD_REQUEST,
};

export default HttpStatus;
