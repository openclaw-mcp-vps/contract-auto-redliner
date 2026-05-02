import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Auto-Redliner — AI Legal Review',
  description: 'Upload contracts, get AI-generated redlines highlighting problematic clauses with suggested alternatives based on legal precedent.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d2e49018-071d-4af7-99aa-3fbc1bc2d2b1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
