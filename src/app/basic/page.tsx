import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Counter Game',
  description: 'A simple counter game built with Farcaster Frames',
  openGraph: {
    title: 'Counter Game',
    description: 'A simple counter game built with Farcaster Frames',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=Counter Game`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/api/og?title=Counter Game`,
    'fc:frame:button:1': 'Start Game',
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?count=0`,
  },
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Counter Game</h1>
      <p className="text-xl">A simple counter game built with Farcaster Frames</p>
    </div>
  )
}