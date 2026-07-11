export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);

  // Split path and remove empty values
  const segments = url.pathname.split('/').filter(Boolean);

  // Find "pdfs" and take everything after it
  const pdfIndex = segments.indexOf('pdfs');

  if (pdfIndex === -1 || pdfIndex === segments.length - 1) {
    return new Response('File path missing', { status: 400 });
  }

  const filePath = segments.slice(pdfIndex + 1).join('/');

  const R2_BASE =
    'https://pub-d4effbf978f745d3994386d73dae804c.r2.dev/pdfs';

  const r2Response = await fetch(`${R2_BASE}/${filePath}`);

  if (!r2Response.ok) {
    return new Response('File not found', { status: 404 });
  }

  return new Response(r2Response.body, {
    headers: {
      'Content-Type':
        r2Response.headers.get('content-type') || 'application/pdf',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
