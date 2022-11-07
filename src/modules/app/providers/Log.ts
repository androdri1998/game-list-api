type LogDTO = {
  message: string;
  params?: Object;
};

interface LogImp<TDebug> {
  _debug: TDebug;
  _log({ message, params }: LogDTO): void;
  create({ message, params }: LogDTO): void;
};

export default LogImp;
export {
  LogDTO,
}
