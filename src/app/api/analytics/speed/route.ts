import { NextRequest, NextResponse } from "next/server";
import {
    getSpeedSummary,
    logClientWebVital,
} from "@/lib/performance/speedLogger";

export const dynamic = "force-dynamic";

export async function GET() {
    const summary = getSpeedSummary();
    return NextResponse.json(
        {
            success: true,
            data: summary,
        },
        {
            headers: {
                "Cache-Control": "no-store, max-age=0",
            },
        }
    );
}

export async function POST(req: NextRequest) {
    try {
        let body: any = null;
        const contentType = req.headers.get("content-type") || "";

        if (
            contentType.includes("application/json") ||
            contentType.includes("text/plain")
        ) {
            const text = await req.text();
            body = JSON.parse(text);
        } else {
            body = await req.json();
        }

        if (body && body.url && body.name) {
            logClientWebVital({
                url: body.url,
                name: body.name,
                value:
                    typeof body.value === "number"
                        ? body.value
                        : parseFloat(body.value) || 0,
                rating: body.rating || "unknown",
                timestamp: body.timestamp || new Date().toISOString(),
            });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json(
            { success: false, error: err.message },
            { status: 400 }
        );
    }
}
