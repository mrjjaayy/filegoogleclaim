import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google Ads Compensation Claim - Keller Postman',
  description: 'File your Google Ads compensation claim. Businesses may be entitled to up to 30% of their ad spend back.',
  keywords: 'Google Ads, compensation, claim, lawsuit, Keller Postman, antitrust',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 