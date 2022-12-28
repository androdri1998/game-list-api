interface StatusApplicationControllerImp<TRequest, TResponse, TReturn> {
  get(req: TRequest, res: TResponse): Promise<TReturn>;
}

export default StatusApplicationControllerImp;
