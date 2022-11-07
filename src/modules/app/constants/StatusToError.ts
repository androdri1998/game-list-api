import StatusToErrorImp from "../models/StatusToError";

const StatusToError: StatusToErrorImp = {
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
  '409': 'Conflict',
};

export default StatusToError;
