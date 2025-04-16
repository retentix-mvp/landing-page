"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Building, CheckCircle, Clock, BotIcon as Robot, Star, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Schema } from "./schema"
import LeadForm from "./lead-form"

export default function RealEstateAILanding() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    const formElement = document.getElementById("cadastro-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Schema />
      <header className="sticky top-0 z-40 border-b bg-white" role="banner">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-[#00204a]" aria-hidden="true" />
             <Link href="#hero-heading">
              <span className="text-xl font-bold text-[#00204a]">Retentix</span>
             </Link>
          </div>
          <nav className="hidden md:flex gap-6" aria-label="Navegação principal">
            <Link href="#recursos" className="text-sm font-medium text-[#000a17] hover:text-[#00367d]">
              Recursos
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-[#000a17] hover:text-[#00367d]">
              Depoimentos
            </Link>
            <Link href="#precos" className="text-sm font-medium text-[#000a17] hover:text-[#00367d]">
              Preços
            </Link>
          </nav>
          <div>
            <Button className="bg-[#00204a] hover:bg-[#00367d] text-white">
              <a href="#cadastro-form" onClick={scrollToForm}>
                Acesso Antecipado
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1" role="main">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white" aria-labelledby="hero-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">Vagas Limitadas 🔥</span>
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight text-[#000a17]">
                <span className="text-[#00367d]">Pare de perder tempo</span> com leads frios e <span className="text-[#00367d]">Triplique suas Vendas</span> de Imóveis
              </h1>
              <p className="text-xl text-[#000a17]/80">
                O assistente virtual com IA que <span className="font-bold underline">faz o trabalho pesado por você</span>: atende, qualifica e converte leads 24/7 enquanto você fecha mais negócios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-base bg-[#00204a] hover:bg-[#00367d] text-white"
                  onClick={scrollToForm}
                >
                  QUERO VENDER MAIS IMÓVEIS <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i, index) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-[#e6e6e6] overflow-hidden">
                      <Image
                        src={`/img/${i}.jpg?height=32&width=32`}
                        alt={`Corretor de imóveis usuário ${i}`}
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#000a17]/80">
                  <span className="font-bold text-[#00367d]">+120 corretores</span> já garantiram acesso
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y bg-[#e6e6e6]" aria-label="Estatísticas">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#00204a]">100%</p>
                <p className="text-sm md:text-base text-[#000a17]/80">Automático</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#00204a]">24/7</p>
                <p className="text-sm md:text-base text-[#000a17]/80">Disponibilidade</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#00204a]">+300%</p>
                <p className="text-sm md:text-base text-[#000a17]/80">Mais Conversões</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#00204a]">-80%</p>
                <p className="text-sm md:text-base text-[#000a17]/80">Tempo Gasto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-16" aria-labelledby="recursos-heading">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 id="recursos-heading" className="text-3xl font-bold mb-4 text-[#000a17]">
                Tecnologia que Revoluciona o Atendimento Imobiliário
              </h2>
              <p className="text-lg text-[#000a17]/80">
                Nossa IA foi treinada com milhares de conversas reais de vendas de imóveis para entender o mercado
                imobiliário brasileiro.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Robot className="h-6 w-6 text-[#00204a]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Atendimento Inteligente</h3>
                <p className="text-[#000a17]/80">
                  IA que simula um atendimento humano personalizado, respondendo dúvidas sobre imóveis e objeções de
                  clientes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Clock className="h-6 w-6 text-[#00204a]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Disponibilidade 24/7</h3>
                <p className="text-[#000a17]/80">
                  Nunca mais perca um lead por não estar disponível. Nossa IA atende interessados em imóveis a qualquer
                  hora.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Users className="h-6 w-6 text-[#00204a]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Qualificação Automática</h3>
                <p className="text-[#000a17]/80">
                  Identifica automaticamente os leads imobiliários mais quentes, priorizando seu tempo com potenciais
                  compradores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#e6e6e6]" aria-labelledby="beneficios-heading">
          <div className="container">
            <h2 id="beneficios-heading" className="text-center text-3xl font-bold mb-8 text-[#000a17]">
              Transforme seu Negócio Imobiliário Hoje
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  title: "Economize até 40 horas por semana em atendimentos iniciais",
                  description:
                    "Imagine o que você poderia fazer com 40 horas extras por mês: mais visitas, mais fechamentos, mais comissões no seu bolso.",
                },
                {
                  title: "Venda 3x mais sem aumentar seu esforço",
                  description:
                    "Enquanto outros corretores desperdiçam tempo com leads frios, você estará fechando negócios com clientes já qualificados.",
                },
                {
                  title: "Escale sua operação sem contratar assistentes",
                  description: "Economize R$2.000-4.000/mês em custos de assistentes e tenha um atendimento superior 24/7.",
                },
                {
                  title: "Seja o primeiro a responder (e o primeiro a vender)",
                  description:
                    "70% dos interessados em imóveis fecham com o primeiro corretor que responde. Com a Retentix, você sempre chega primeiro.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#00367d]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000a17]">{benefit.title}</h3>
                    <p className="text-[#000a17]/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <Button
                  className="w-full bg-[#00204a] hover:bg-[#00367d] text-white py-6 text-lg"
                  onClick={scrollToForm}
                >
                  QUERO AUMENTAR MINHAS VENDAS AGORA <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-16" aria-labelledby="depoimentos-heading">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="depoimentos-heading" className="text-3xl font-bold mb-4 text-[#000a17]">
                O Que Dizem Nossos Primeiros Usuários
              </h2>
              <p className="text-lg text-[#000a17]/80 max-w-2xl mx-auto">
                Corretores e imobiliárias que já tiveram acesso à versão beta estão transformando seus resultados de
                vendas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Carlos Silva",
                  role: "Corretor Autônomo - São Paulo",
                  image: "/carlos.jpg?height=80&width=80",
                  content:
                    "Consegui triplicar minha carteira de clientes em apenas 2 meses. A IA qualifica perfeitamente os leads imobiliários.",
                },
                {
                  name: "Ana Oliveira",
                  role: "Corretora de Imóveis de Luxo - Rio de Janeiro",
                  image: "/ana.jpg?height=80&width=80",
                  content:
                    "Meus clientes ficam impressionados com a rapidez e precisão do atendimento sobre os imóveis.",
                },
                {
                  name: "Roberto Mendes",
                  role: "Proprietário de Imobiliária - Belo Horizonte",
                  image: "/roberto.jpg?height=80&width=80",
                  content:
                    "Implementei na minha equipe de 12 corretores e conseguimos aumentar as vendas de apartamentos em 230%.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-[#000a17]">{testimonial.name}</h4>
                      <p className="text-sm text-[#000a17]/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#000a17]/80">{testimonial.content}</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#00367d] text-[#00367d]" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precos" className="py-16 bg-[#e6e6e6]" aria-labelledby="precos-heading">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="precos-heading" className="text-3xl font-bold mb-4 text-[#000a17]">
                Investimento que se Paga em Dias
              </h2>
              <p className="text-lg text-[#000a17]/80 max-w-2xl mx-auto">
                Acesso exclusivo de pré-lançamento para corretores e imobiliárias com condições especiais por tempo
                limitado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Corretor Iniciante",
                  price: "R$ 149",
                  period: "/mês",
                  description: "Para corretores autônomos",
                  features: [
                    "Até 100 leads imobiliários/mês",
                    "Integração com WhatsApp",
                    "Qualificação automática de clientes",
                    "Suporte por email",
                  ],
                  popular: false,
                  cta: "Começar Agora",
                },
                {
                  name: "Corretor Profissional",
                  price: "R$ 249",
                  period: "/mês",
                  description: "Para corretores estabelecidos",
                  features: [
                    "Até 500 leads imobiliários/mês",
                    "Integração com WhatsApp e Instagram",
                    "Qualificação avançada com score de compra",
                    "Suporte prioritário",
                  ],
                  popular: true,
                  cta: "Escolher Plano",
                },
                {
                  name: "Imobiliária",
                  price: "R$ 499",
                  period: "/mês",
                  description: "Para imobiliárias e equipes",
                  features: [
                    "Leads imobiliários ilimitados",
                    "Integração com todos os canais",
                    "Múltiplos corretores",
                    "Relatórios estratégicos",
                  ],
                  popular: false,
                  cta: "Falar com Consultor",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 border ${plan.popular ? "border-[#00367d] shadow-md relative" : "border-[#cccccc] shadow-sm"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-[#00204a] text-white text-sm font-medium rounded-full">
                      Mais Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-[#000a17]">{plan.name}</h3>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-3xl font-bold text-[#000a17]">{plan.price}</span>
                      <span className="text-[#000a17]/70">{plan.period}</span>
                    </div>
                    <p className="text-sm text-[#000a17]/70 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#00367d] flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm text-[#000a17]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    style={{
                      backgroundColor: plan.popular ? "#00204a" : "transparent",
                      borderColor: "#00204a",
                      color: plan.popular ? "white" : "#00204a",
                    }}
                    onClick={scrollToForm}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cadastro" className="py-16 bg-[#00204a] text-white" aria-labelledby="cadastro-heading">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 id="cadastro-heading" className="text-3xl font-bold mb-4">
                Garanta Seu Acesso Antecipado
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Vagas limitadas para corretores e imobiliárias no programa de acesso antecipado com preços especiais.
              </p>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#cccccc] py-8 bg-white" role="contentinfo">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building className="h-6 w-6 text-[#00204a]" aria-hidden="true" />
              <span className="text-xl font-bold text-[#00204a]">Retentix</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              {/* <Link href="/termos" className="text-sm text-[#000a17]/70 hover:text-[#00367d]">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-sm text-[#000a17]/70 hover:text-[#00367d]">
                Política de Privacidade
              </Link> */}
              <p className="text-sm text-[#000a17]/70">
                © {new Date().getFullYear()} Retentix. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

