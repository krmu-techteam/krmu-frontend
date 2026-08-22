export interface PolicyItem {
  id: string;
  title: string;
  url: string;
}

export interface PolicyPageData {
  title: string;
  heroImage: string;
  backLink?: string;
  policies: PolicyItem[];
}
