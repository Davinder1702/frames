import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const count = searchParams.get('count')
  
  const currentCount = count ? parseInt(count) : 0
  const increment = currentCount + 1
  const decrement = currentCount - 1

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Counter Game</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=Current Count: ${currentCount}" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=Current Count: ${currentCount}" />
    <meta property="fc:frame:button:1" content="➕ Increment" />
    <meta property="fc:frame:button:1:action" content="post" />
    <meta property="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?count=${increment}" />
    <meta property="fc:frame:button:2" content="➖ Decrement" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?count=${decrement}" />
    <meta property="fc:frame:button:3" content="🔄 Reset" />
    <meta property="fc:frame:button:3:action" content="post" />
    <meta property="fc:frame:button:3:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?count=0" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
