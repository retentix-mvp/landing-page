export function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Retentix",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "297",
      highPrice: "997",
      priceCurrency: "BRL",
      offerCount: 3,
    },
    description:
      "Assistente virtual com IA para corretores de imóveis e imobiliárias que atende, qualifica e converte leads 24/7.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Corretores de Imóveis e Imobiliárias",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Carlos Silva",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Consegui triplicar minha carteira de clientes em apenas 2 meses. A IA qualifica perfeitamente os leads imobiliários.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Roberto Mendes",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Implementei na minha equipe de 12 corretores e conseguimos aumentar as vendas de apartamentos em 230%.",
      },
    ],
    keywords:
      "corretores de imóveis, imobiliárias, automação imobiliária, IA para corretores, leads imobiliários, qualificação de leads, vendas de imóveis, atendimento automático, chatbot imobiliário, assistente virtual para corretores",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

