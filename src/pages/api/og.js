// pages/api/og.js

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Default Title';
  const imageUrl = searchParams.get('imageUrl') || 'https://your-default-image-url.com/default-image.jpg';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'relative',
          fontSize: 40,
          fontWeight: 'bold',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={imageUrl}
          alt="Background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
