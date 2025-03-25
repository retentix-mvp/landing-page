import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Retentix | IA para Corretores de Imóveis",
  description: 'Assistente virtual com IA para corretores e imobiliárias que atende, qualifica e converte leads 24/7. Aumente suas vendas em até 300% sem contratar assistentes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami-production-c110.up.railway.app/script.js" data-website-id="4103057a-9636-4a53-9276-5687c8bf327b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
