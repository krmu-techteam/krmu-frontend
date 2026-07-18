export interface IMapper<TResponse, TDomain> {
  toDomain(raw: TResponse): TDomain;
}
