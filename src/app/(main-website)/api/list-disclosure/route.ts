import { NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { r2Disclosure } from "@/lib/constants/r2-disclosure";

export async function POST(req: Request) {
  try {
    const { prefix } = await req.json();

    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_DISCLOSURE_BUCKET!,
      Prefix: prefix,
      Delimiter: "/",
      MaxKeys: 1000,
    });

    const data = await r2Disclosure.send(command);

    return NextResponse.json({
      folders: data.CommonPrefixes?.map((p) => p.Prefix) || [],
      files:
        data.Contents?.filter(
          (item) => item.Key && item.Key !== prefix
        ) || [],
    });
  } catch (err: unknown) {
    console.error("DISCLOSURE LIST ERROR", err);

    return NextResponse.json(
      {
        error:
          err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
