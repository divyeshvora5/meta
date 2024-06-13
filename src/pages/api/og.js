import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Vercel"
          width={255}
          height={225}
          src="https://d17ha18jyelis7.cloudfront.net/collections/banners/0f62c3d4-d350-43fc-8f80-451cba0dd6a8-1707459809309"
          style={{ margin: '0 75px' }}
        />
        <div
          style={{
            fontSize: 60,
            marginTop: 30,
            lineHeight: 1.8,
          }}
        >
          Test
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}