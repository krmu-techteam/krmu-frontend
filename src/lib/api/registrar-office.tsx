import { FETCH_STRAPI_URL } from "@/app/constant";
import { RegistrarOffice } from "../types/registrar-office";


// {
//   populate: {
//   registrarimage: true,
//     breadcrumb: {
//       fields: ['breadcrumbtext', 'breadcrumbbgcolor'],
//       populate: {
//         backgroundimage: true
//       }
//     },
//     department: {
//       fields: ['departmentname'],
//       populate: {
//         employeecard: {
//           populate: {
//             employeeimage: true
//           }
//         }
//       }
//     }
//   }
// }



export async function getRegistrarOfficeData(): Promise<
  RegistrarOffice["data"]
> {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/registrar-office?populate[registrarimage]=true&populate[breadcrumb][fields][0]=breadcrumbtext&populate[breadcrumb][fields][1]=breadcrumbbgcolor&populate[breadcrumb][populate][backgroundimage]=true&populate[department][fields][0]=departmentname&populate[department][populate][employeecard][populate][employeeimage]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Registrar office Data");
  }
  const json: RegistrarOffice = await res.json();
  return json.data;
}
