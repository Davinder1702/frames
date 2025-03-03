import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<Response> {
  try {
    // You can access the button data from the request if needed
    const data = await req.json()
    const buttonIndex = data.untrustedData.buttonIndex

    // Return a new frame response
    return new NextResponse(`<!DOCTYPE html><html><head>
      <title>Basic Frame</title>
      <meta property="og:image" content="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" />
      <meta property="fc:frame:button:1" content="Next" />
      <meta property="fc:frame:post_url" content="https://frames-dusky14.vercel.app/api" />
    </head></html>`)
  } catch (error) {
    console.error('Error in POST handler:', error)
    return new NextResponse('Error processing frame action', { status: 500 })
  }
}

export const dynamic = 'force-dynamic'