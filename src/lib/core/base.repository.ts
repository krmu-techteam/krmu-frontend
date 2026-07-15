import { apiRequest } from "../api-request";

export abstract class BaseRepository<TRaw, TDomain> {
  private dataPromise: Promise<TDomain> | null = null;
  protected abstract readonly query: string;
  protected abstract mapToDomain(raw: TRaw): TDomain;
  protected abstract emptyDomain(): TDomain;

  async getData(): Promise<TDomain> {
    if (!this.dataPromise) {
      this.dataPromise = this.fetchAndMap();
    }
    return this.dataPromise;
  }

  async getSectionData<K extends keyof TDomain>(key: K): Promise<TDomain[K]> {
    const data = await this.getData();
    return data[key];
  }

  private async fetchAndMap(): Promise<TDomain> {
    try {
      const raw = await apiRequest<TRaw>(this.query);
      return this.mapToDomain(raw);
    } catch (error) {
      console.error(`[Repository] Fetch error for ${this.query}:`, error);
      this.dataPromise = null;
      return this.emptyDomain();
    }
  }
}
