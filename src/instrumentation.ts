import { installResilientFetch } from "@/lib/api/resilientFetch";

export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        installResilientFetch();
    }
}
