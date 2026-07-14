export const ADVISORY_BOARD_ENDPOINTS = {
  getAdvisoryBoard: () =>
    `/api/advisory-board?populate[advisoryboard][fields][0]=title&populate[advisoryboard][fields][1]=advisoryboardinfo&populate[advisoryboard][populate][advisoryimage]=true`
};
