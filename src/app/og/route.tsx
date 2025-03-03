import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

// ... existing code ...

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Counter Game'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
            fontSize: 60,
            fontWeight: 700,
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <p
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 80,
              fontWeight: 700,
              margin: 0,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 40,
              color: '#666',
              marginTop: 20,
            }}
          >
            Use the buttons below to play!
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    // ... existing error handling ...
  }
}
