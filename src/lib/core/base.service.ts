export interface IBaseRepository<TDomain> {
  getData(): Promise<TDomain>;
  getSectionData<K extends keyof TDomain>(key: K): Promise<TDomain[K]>;
}

export abstract class BaseService<TDomain> {
  constructor(private readonly repository: IBaseRepository<TDomain>) {}

  getData(): Promise<TDomain> {
    return this.repository.getData();
  }

  getSectionData<K extends keyof TDomain>(key: K): Promise<TDomain[K]> {
    return this.repository.getSectionData(key);
  }
}
