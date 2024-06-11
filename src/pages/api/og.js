// pages/api/og.js

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('description') || 'Default Description';
  const imageUrl = searchParams.get('imageUrl') || 'https://your-default-image-url.com';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
          background: 'black',
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
