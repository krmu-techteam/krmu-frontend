import { S3Client } from "@aws-sdk/client-s3";

const endpoint =
  process.env.R2_API_ENDPOINT ||
  `https://${process.env.NEXT_PUBLIC_CF_ACCOUNT_ID}.r2.cloudflarestorage.com`;

export const r2 = new S3Client({
  region: "auto",
  endpoint,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY!,
    secretAccessKey: process.env.R2_SECRET_KEY!,
  },
});


// // lib/r2.ts
// import { S3Client } from "@aws-sdk/client-s3";

// const endpoint =
//   process.env.R2_API_ENDPOINT ||
//   (process.env.NEXT_PUBLIC_CF_ACCOUNT_ID
//     ? `https://${process.env.NEXT_PUBLIC_CF_ACCOUNT_ID}.r2.cloudflarestorage.com`
//     : undefined);

// export const r2 = new S3Client({
//   region: "auto",
//   endpoint, // optional — SDK accepts undefined, but providing is fine
//   credentials: {
//     accessKeyId: process.env.R2_ACCESS_KEY!,
//     secretAccessKey: process.env.R2_SECRET_KEY!,
//   },
// });
