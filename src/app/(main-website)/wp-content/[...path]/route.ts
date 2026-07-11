export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);

  // Break path into segments
  const segments = url.pathname.split('/').filter(Boolean);

  // Find wp-content and take everything after it
  const wpIndex = segments.indexOf('wp-content');

  if (wpIndex === -1 || wpIndex === segments.length - 1) {
    return new Response('File path missing', { status: 400 });
  }

  const filePath = segments.slice(wpIndex).join('/');

  const R2_BASE =
    'https://pub-d4effbf978f745d3994386d73dae804c.r2.dev';

  const r2Response = await fetch(`${R2_BASE}/${filePath}`);

  if (!r2Response.ok) {
    return new Response('File not found', { status: 404 });
  }

  return new Response(r2Response.body, {
    headers: {
      'Content-Type':
        r2Response.headers.get('content-type') || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
