export const COMMUNITY_CONNECT_QUERIES = {
  getNssConnect: () =>
    `/api/community-connect?populate[nss_connect_connect_img_grid][fields][0]=heading&populate[nss_connect_connect_img_grid][populate][nssimgs][fields][0]=url`,
};
