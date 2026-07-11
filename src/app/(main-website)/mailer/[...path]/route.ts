export const runtime = 'edge';

export async function GET(request: Request) {
  const pathname = new URL(request.url).pathname;

  // Remove "/mailer/" from the URL
  const filePath = pathname.replace(/^\/mailer\//, '');

  if (!filePath || filePath === pathname) {
    return new Response('File path missing', { status: 404 });
  }

  const R2_BASE =
    'https://pub-d4effbf978f745d3994386d73dae804c.r2.dev';

  const r2Url = `${R2_BASE}/mailer/${filePath}`;

  const r2Response = await fetch(r2Url);

  if (!r2Response.ok) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(r2Response.body, {
    headers: {
      'Content-Type':
        r2Response.headers.get('content-type') || 'application/octet-stream',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
