import Script from "next/script"

export function Schema() {
  return (
    <>
      <Script id="schema-jsonld" type="application/ld+json">
        {`
          [
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Retentix - IA para Corretores de Imóveis",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "149.00",
                "priceCurrency": "BRL"
              },
              "description": "Assistente virtual com IA para corretores e imobiliárias que atende, qualifica e converte leads 24/7. Aumente suas vendas em até 300% sem contratar assistentes.",
              "operatingSystem": "Web"
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://retentix.com.br/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://retentix.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Retentix",
              "url": "https://retentix.com.br",
              "logo": "https://retentix.com.br/retentix.png",
              "sameAs": [
                "https://www.facebook.com/retentix",
                "https://www.instagram.com/retentix/",
                "https://www.linkedin.com/company/retentix/"
              ],
              "description": "Plataforma de IA para automação de atendimento em imobiliárias e corretores de imóveis"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Como a Retentix aumenta as vendas de imóveis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Retentix automatiza o atendimento inicial e qualificação de leads 24/7, permitindo que corretores foquem apenas em leads qualificados. Nossa IA responde instantaneamente, capturando leads que normalmente seriam perdidos por demora no atendimento, resultando em até 300% mais conversões."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quanto custa a Retentix?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Retentix oferece planos a partir de R$149/mês para corretores autônomos, com planos personalizados para imobiliárias. O investimento se paga rapidamente pelo aumento de vendas e economia de tempo."
                  }
                },
                {
                  "@type": "Question",
                  "name": "A Retentix substitui o corretor de imóveis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. A Retentix é uma ferramenta que potencializa o trabalho do corretor, automatizando as tarefas repetitivas de qualificação inicial. O corretor continua essencial para o fechamento de vendas e negociações."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como integrar a Retentix aos meus canais de atendimento?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A Retentix se integra facilmente ao WhatsApp, Instagram, Facebook e site da sua imobiliária. A configuração é simples e nossa equipe oferece suporte completo para implementação."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Retentix - Assistente Virtual para Corretores",
              "description": "Automação de atendimento e qualificação de leads para corretores de imóveis",
              "brand": {
                "@type": "Brand",
                "name": "Retentix"
              },
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "149.00",
                "highPrice": "499.00",
                "priceCurrency": "BRL",
                "offerCount": "3"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Carlos Silva"
                },
                "reviewBody": "Consegui triplicar minha carteira de clientes em apenas 2 meses. A IA qualifica perfeitamente os leads imobiliários."
              }
            }
          ]
        `}
      </Script>
    </>
  )
}

