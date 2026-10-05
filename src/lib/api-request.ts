import { FETCH_STRAPI_URL } from "@/app/constant";
import { resilientFetch } from "./api/resilientFetch";

export async function apiRequest<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const response = await resilientFetch(`${FETCH_STRAPI_URL}${endpoint}`, {
        next: {
            revalidate: 3600,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`Strapi Error: ${response.status}`);
    }

    return response.json();
}
