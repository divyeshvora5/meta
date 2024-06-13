import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {

  console.log('req nextUrl', req);

  const { searchParams } = new URL(req.url);

  console.log('searchParams.get()', searchParams.get('title'))
  const DOMAIN = "https://meta-psi-five.vercel.app";
  console.log("🚀 ~ handler ~ searchParams:", searchParams);
  const hasTitle = searchParams?.has("title");
  const hasImageUrl = searchParams?.has("imageUrl");
  const title = hasTitle ? searchParams?.get("title") : "New collection";

  const imageUrl = hasImageUrl
      ? searchParams?.get("amp;imageUrl")
      : `${DOMAIN}/public/Sample-png-image-200kb.png`;
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
          src={hasImageUrl}
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