import { NewsAndEventsDomain, NewsAndEventsResponse } from "./newsevent.types";

export class NewsAndEventsMapper {
  static toDomain(raw: NewsAndEventsResponse): NewsAndEventsDomain {
    return raw.data;
  }
}
