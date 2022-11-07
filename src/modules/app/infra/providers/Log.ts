import debug, { Debugger } from 'debug';

import LogImp, { LogDTO } from '../../providers/Log';

class Log implements LogImp<Debugger> {
  _debug: Debugger;

  constructor(key: string) {
    this._debug = debug(key);
  }

  _log({ message, params }: LogDTO): void {
    this._debug(message, params);
  }

  create({ message, params }: LogDTO): void {
    this._log({ message, params });
  }
}

export default Log;
