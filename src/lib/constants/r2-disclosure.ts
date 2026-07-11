import { S3Client } from "@aws-sdk/client-s3";

const endpoint =
  process.env.R2_DISCLOSURE_API_ENDPOINT ||
  `https://${process.env.NEXT_PUBLIC_CF_ACCOUNT_ID}.r2.cloudflarestorage.com`;

export const r2Disclosure = new S3Client({
  region: "auto",
  endpoint,
  credentials: {
    accessKeyId: process.env.R2_DISCLOSURE_ACCESS_KEY!,
    secretAccessKey: process.env.R2_DISCLOSURE_SECRET_KEY!,
  },
});
