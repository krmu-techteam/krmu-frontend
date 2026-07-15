import { BaseRepository, BaseService, createProvider } from "@/lib/core";
import { NewsAndEventsDomain, NewsAndEventsResponse } from "./newsevent.types";
import { NEWS_AND_EVENTS_QUERY } from "./newsevent.queries";
import { NewsAndEventsMapper } from "./newsevent.mapper";

class NewsAndEventsRepository extends BaseRepository<
  NewsAndEventsResponse,
  NewsAndEventsDomain
> {
  protected readonly query = NEWS_AND_EVENTS_QUERY;

  protected mapToDomain(raw: NewsAndEventsResponse): NewsAndEventsDomain {
    return NewsAndEventsMapper.toDomain(raw);
  }

  protected emptyDomain(): NewsAndEventsDomain {
    return EMPTY_NEWS_AND_EVENTS;
  }
}

export interface INewsAndEventsService {
  getData(): Promise<NewsAndEventsDomain>;
}

export class NewsAndEventsService
  extends BaseService<NewsAndEventsDomain>
  implements INewsAndEventsService
{
  constructor(
    private readonly newsAndEventsRepository: NewsAndEventsRepository,
  ) {
    super(newsAndEventsRepository);
  }

  async getData(): Promise<NewsAndEventsDomain> {
    return this.newsAndEventsRepository.getData();
  }
}

export const getNewsAndEventsService = createProvider<INewsAndEventsService>(
  () => new NewsAndEventsService(new NewsAndEventsRepository()),
);

const EMPTY_NEWS_AND_EVENTS: NewsAndEventsDomain = {
  id: 0,
  documentId: "",
  main_heading: [],
  main_desc: [],
};
