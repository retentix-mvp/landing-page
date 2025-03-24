import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '"Retentix | IA para Corretores de Imóveis Automatizarem Atendimento e Triplicarem Vendas',
  description: 'Assistente virtual com IA para corretores e imobiliárias que atende, qualifica e converte leads 24/7. Aumente suas vendas em até 300% sem contratar assistentes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
