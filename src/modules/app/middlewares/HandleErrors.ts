import LogImp from "../providers/Log";
import AppError from "../errors/AppError";

interface HandleErrorImp<TDebug, TRequest, TResponse, TNext, TReturn> {
  _log: LogImp<TDebug>;
  watchErrors(
    err: AppError,
    req: TRequest,
    res: TResponse,
    _: TNext
  ): void | TReturn;
};

export default HandleErrorImp
