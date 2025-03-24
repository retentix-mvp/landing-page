import RealEstateAILanding from "@/components/real-estate-ai-landing"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retentix | IA para Corretores de Imóveis Automatizarem Atendimento e Triplicarem Vendas",
  description:
    "Assistente virtual com IA para corretores e imobiliárias que atende, qualifica e converte leads 24/7. Aumente suas vendas em até 300% sem contratar assistentes.",
  keywords:
    "corretores de imóveis, imobiliárias, automação imobiliária, IA para corretores, leads imobiliários, qualificação de leads, vendas de imóveis, atendimento automático, chatbot imobiliário, assistente virtual para corretores",
  openGraph: {
    title: "Retentix | IA para Corretores de Imóveis Automatizarem Atendimento",
    description:
      "Assistente virtual com IA para corretores e imobiliárias que atende, qualifica e converte leads 24/7. Aumente suas vendas em até 300%.",
    url: "https://retentix.com.br",
    siteName: "Retentix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retentix - IA para Corretores de Imóveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function Home() {
  return <RealEstateAILanding />
}

