import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building, CheckCircle, Clock, BotIcon as Robot, Star, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RealEstateAILanding() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-[#00204a]" />
            <span className="text-xl font-bold text-[#00204a]">Retentix</span>
          </div>
          <nav className="hidden md:flex gap-6">
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
              <Link href="#cadastro">Acesso Antecipado</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#000a17]">
                Automatize seu Atendimento e <span className="text-[#00367d]">Triplique suas Vendas</span>
              </h1>
              <p className="text-xl text-[#000a17]/80">
                O primeiro assistente virtual com IA para corretores de imóveis que atende, qualifica e converte leads
                24/7 sem sua intervenção.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base bg-[#00204a] hover:bg-[#00367d] text-white">
                  Garantir Minha Vaga <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-[#e6e6e6] overflow-hidden">
                      <Image src={`/placeholder.svg?height=32&width=32`} alt={`Usuário ${i}`} width={32} height={32} />
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
        <section className="py-12 border-y bg-[#e6e6e6]">
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
        <section id="recursos" className="py-16">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-[#000a17]">Tecnologia que Revoluciona seu Atendimento</h2>
              <p className="text-lg text-[#000a17]/80">
                Nossa IA foi treinada com milhares de conversas reais de vendas de imóveis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Robot className="h-6 w-6 text-[#00204a]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Atendimento Inteligente</h3>
                <p className="text-[#000a17]/80">
                  IA que simula um atendimento humano personalizado, respondendo dúvidas e objeções.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Clock className="h-6 w-6 text-[#00204a]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Disponibilidade 24/7</h3>
                <p className="text-[#000a17]/80">
                  Nunca mais perca um lead por não estar disponível. Nossa IA atende a qualquer hora.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#cccccc] shadow-sm">
                <div className="mb-4 p-3 rounded-full bg-[#00204a]/10 w-fit">
                  <Users className="h-6 w-6 text-[#00204a]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#000a17]">Qualificação Automática</h3>
                <p className="text-[#000a17]/80">
                  Identifica automaticamente os leads mais quentes, priorizando seu tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#e6e6e6]">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  title: "Economize até 40 horas por semana",
                  description: "Elimine tarefas repetitivas de atendimento inicial e qualificação de leads.",
                },
                {
                  title: "Aumente sua taxa de conversão em até 300%",
                  description: "Atendimento imediato e personalizado aumenta drasticamente as chances de conversão.",
                },
                {
                  title: "Escale seu negócio sem contratar assistentes",
                  description: "Um único corretor pode gerenciar o volume de leads de uma equipe inteira.",
                },
                {
                  title: "Nunca mais perca um lead por demora no atendimento",
                  description: "70% dos leads fecham com o primeiro corretor que responde. Seja sempre o primeiro.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-[#00367d]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#000a17]">{benefit.title}</h3>
                    <p className="text-[#000a17]/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#000a17]">O Que Dizem Nossos Primeiros Usuários</h2>
              <p className="text-lg text-[#000a17]/80 max-w-2xl mx-auto">
                Corretores que já tiveram acesso à versão beta estão transformando seus resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Carlos Silva",
                  role: "Corretor Autônomo",
                  image: "/placeholder.svg?height=80&width=80",
                  content:
                    "Consegui triplicar minha carteira de clientes em apenas 2 meses. A IA qualifica perfeitamente os leads.",
                },
                {
                  name: "Ana Oliveira",
                  role: "Corretora de Imóveis de Luxo",
                  image: "/placeholder.svg?height=80&width=80",
                  content: "Meus clientes ficam impressionados com a rapidez e precisão do atendimento.",
                },
                {
                  name: "Roberto Mendes",
                  role: "Proprietário de Imobiliária",
                  image: "/placeholder.svg?height=80&width=80",
                  content: "Implementei na minha equipe de 12 corretores e conseguimos aumentar as vendas em 230%.",
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
                      <Star key={star} className="h-5 w-5 fill-[#00367d] text-[#00367d]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precos" className="py-16 bg-[#e6e6e6]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#000a17]">Investimento que se Paga em Dias</h2>
              <p className="text-lg text-[#000a17]/80 max-w-2xl mx-auto">
                Acesso exclusivo de pré-lançamento com condições especiais por tempo limitado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Iniciante",
                  price: "R$ 297",
                  period: "/mês",
                  description: "Para corretores autônomos",
                  features: [
                    "Até 100 leads/mês",
                    "Integração com WhatsApp",
                    "Qualificação automática",
                    "Suporte por email",
                  ],
                  popular: false,
                  cta: "Começar Agora",
                },
                {
                  name: "Profissional",
                  price: "R$ 497",
                  period: "/mês",
                  description: "Para corretores estabelecidos",
                  features: [
                    "Até 500 leads/mês",
                    "Integração com WhatsApp e Instagram",
                    "Qualificação avançada com score",
                    "Suporte prioritário",
                  ],
                  popular: true,
                  cta: "Escolher Plano",
                },
                {
                  name: "Empresarial",
                  price: "R$ 997",
                  period: "/mês",
                  description: "Para imobiliárias e equipes",
                  features: [
                    "Leads ilimitados",
                    "Integração com todos os canais",
                    "Múltiplos usuários",
                    "Gerente de sucesso dedicado",
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
                        <CheckCircle className="h-5 w-5 text-[#00367d] flex-shrink-0" />
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
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cadastro" className="py-16 bg-[#00204a] text-white">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Garanta Seu Acesso Antecipado</h2>
              <p className="text-lg mb-8 text-white/90">
                Vagas limitadas para o programa de acesso antecipado com preços especiais.
              </p>
              <div className="bg-white text-[#000a17] rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Cadastre-se para a lista de espera</h3>
                <form className="space-y-4">
                  <Input placeholder="Nome completo" className="border-[#cccccc]" />
                  <Input placeholder="E-mail" type="email" className="border-[#cccccc]" />
                  <Input placeholder="WhatsApp" type="tel" className="border-[#cccccc]" />
                  <Button className="w-full bg-[#00204a] hover:bg-[#00367d] text-white" size="lg">
                    Garantir Minha Vaga <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#cccccc] py-8 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building className="h-6 w-6 text-[#00204a]" />
              <span className="text-xl font-bold text-[#00204a]">Retentix</span>
            </div>
            <p className="text-sm text-[#000a17]/70">
              © {new Date().getFullYear()} Retentix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

