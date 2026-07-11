import { FETCH_STRAPI_URL } from "@/app/constant";
import { FinanceDepartment } from "../types/finance-department";

export async function getFinanceData(): Promise<FinanceDepartment["data"]> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/finance-department?populate[breadcrumb][fields][0]=breadcrumbtext&populate[breadcrumb][fields][1]=breadcrumbbgcolor&populate[breadcrumb][populate][backgroundimage]=true&populate[financeemployees][fields][0]=employeename&populate[financeemployees][fields][1]=designation&populate[financeemployees][fields][2]=email&populate[financeemployees][populate][employeeimage]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Finance Data");
  }

  const json: FinanceDepartment = await res.json();
  return json.data;
}
