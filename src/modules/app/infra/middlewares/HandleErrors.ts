import { NextFunction, Request, Response } from "express";

import AppError from "../../errors/AppError";
import LogImp from "../../providers/Log";
import HTTP_STATUS from "../constants/HttpStatus";
import HandleErrorImp from "../../middlewares/HandleErrors";
import MessagesImp from "../../models/Messages";
import { Debugger } from "debug";

class HandleError
  implements HandleErrorImp<Debugger, Request, Response, NextFunction, Response<any, Record<string, any>>> {
  _log: LogImp<Debugger>;
  _messages: MessagesImp;

  constructor(logProvider: LogImp<Debugger>, Messages: MessagesImp) {
    this._log = logProvider;
    this._messages = Messages;

    this.watchErrors = this.watchErrors.bind(this);
  }

  watchErrors(
    err: AppError,
    req: Request,
    res: Response,
    _: NextFunction
  ): void | Response<any, Record<string, any>> {
    this._log.create({ message: err.message, params: err });

    if (err.statusCode && err.statusCode < HTTP_STATUS.INTERNAL_SERVER_ERROR) {
      return res.status(err.statusCode).json({
        error: err.error,
        error_description: err.message,
      });
    }

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      error: this._messages.errors.INTERNAL_ERROR_SERVER,
      error_description: this._messages.errors.INTERNAL_ERROR_SERVER_MESSAGE,
    });
  }
}

export default HandleError;
