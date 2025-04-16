import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Retentix | IA para Corretores Aumentarem Vendas em até 300%",
  description:
    "Assistente virtual especializado para corretores de imóveis e imobiliárias que atende, qualifica e converte leads 24/7. Economize tempo e triplique suas vendas sem contratar assistentes.",
  keywords:
    "corretores de imóveis, imobiliárias, automação imobiliária, IA para corretores, leads imobiliários, qualificação de leads, vendas de imóveis, atendimento automático, chatbot imobiliário, assistente virtual para corretores, aumento de vendas para corretores, automação de atendimento imobiliário, converter leads imobiliários, mais vendas imobiliárias, atendimento 24 horas imobiliária",
  openGraph: {
    title: "Retentix | IA que Aumenta Vendas de Imóveis em até 300%",
    description:
      "Pare de perder tempo com leads frios! Nosso assistente com IA atende, qualifica e converte leads 24/7 para corretores e imobiliárias. Aumente suas vendas em até 300% sem contratar assistentes.",
    url: "https://retentix.com.br",
    siteName: "Retentix - Automatização para Corretores",
    images: [
      {
        url: "/retentix.png",
        width: 1200,
        height: 630,
        alt: "Retentix - IA para Corretores de Imóveis Aumentarem Vendas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
      <script defer src="https://retentix.up.railway.app/script.js" data-website-id="4103057a-9636-4a53-9276-5687c8bf327b"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
