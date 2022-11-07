import StatusToError from "../constants/StatusToError";
import AppErrorDTO from "../models/AppErrorDTO";

class AppError {
  public readonly message: string;

  public readonly error: string;

  public readonly statusCode: number;

  constructor(appErrorData: AppErrorDTO) {
    const statusCode = appErrorData.statusCode || appErrorData.defaultStatusCode;

    this.message = appErrorData.message;
    this.statusCode = statusCode;
    this.error = StatusToError[statusCode];
  }
}

export default AppError;
