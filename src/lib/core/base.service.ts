export interface IBaseRepository<TDomain> {
  getData(): Promise<TDomain>;
}

export abstract class BaseService<TDomain> {
  constructor(private readonly repository: IBaseRepository<TDomain>) {}

  getData(): Promise<TDomain> {
    return this.repository.getData();
  }
}
