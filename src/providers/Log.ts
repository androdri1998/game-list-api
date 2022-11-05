type LogDTO = {
  message: string;
  params?: Object;
};

interface LogImp {
  create({ message, params }: LogDTO): void;
  create({ message, params }: LogDTO): void;
};

export default LogImp;
export {
  LogDTO,
}
