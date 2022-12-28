export type ExecuteResponse = {
  message: string;
};

interface GetStatusApplicationServiceImp {
  execute(): Promise<ExecuteResponse>;
}

export default GetStatusApplicationServiceImp;
