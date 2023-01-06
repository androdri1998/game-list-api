interface RequestService<TResponse> {
  get(path: string): Promise<TResponse>;
};

export default RequestService;
