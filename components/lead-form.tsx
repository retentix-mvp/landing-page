"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2, Clock, Lock } from "lucide-react"
import { saveLead } from "@/actions/lead"
import { useToast } from "@/hooks/use-toast"

export default function LeadForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    imobiliaria: "",
    cidade: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação básica
    if (!formData.nome || !formData.email || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e WhatsApp.",
        variant: "destructive",
      })
      return
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Remova data_cadastro e deixe o Supabase usar o timestamp padrão
      const result = await saveLead({
        ...formData,
        origem: window.location.href,
      })

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Entraremos em contato em breve.",
        })
        // Limpar formulário
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          imobiliaria: "",
          cidade: "",
        })
      } else if ('error' in result) {
        throw new Error(String(result.error) || "Erro ao salvar dados")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-[#000a17] rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-2">Acesso Prioritário e Exclusivo</h3>
      {/* <p className="text-sm text-[#000a17]/80 mb-4">Restam apenas <span className="font-bold text-red-600">17 vagas</span> para o primeiro lote com desconto de lançamento</p> */}

      <div className="mb-5 space-y-3">
        {/* <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span>Primeiros usuários recebem <span className="font-bold">50% de desconto vitalício</span></span>
        </div> */}
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
          <span>Oferta disponível por apenas <span className="font-bold">48 horas</span></span>
        </div>
        {/* <div className="flex items-center gap-2 text-sm">
          <Lock className="h-4 w-4 text-blue-600 flex-shrink-0" />
          <span>Garantia de satisfação ou <span className="font-bold">seu dinheiro de volta</span></span>
        </div> */}
      </div>

      {isSuccess ? (
        <div className="text-center py-6">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-lg font-bold mb-2">Cadastro realizado com sucesso!</h4>
          <p className="mb-4">Parabéns! Você garantiu sua vaga com condições exclusivas de lançamento. Entraremos em contato nas próximas 24 horas.</p>
          <Button className="bg-[#00204a] hover:bg-[#00367d] text-white" onClick={() => setIsSuccess(false)}>
            Novo cadastro
          </Button>
        </div>
      ) : (
        <form id="cadastro-form" className="space-y-4" onSubmit={handleSubmit}>
          <Input
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome completo"
            className="border-[#cccccc]"
            aria-label="Nome completo"
            required
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            type="email"
            className="border-[#cccccc]"
            aria-label="E-mail"
            required
          />
          <Input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp"
            type="tel"
            className="border-[#cccccc]"
            aria-label="WhatsApp"
            required
          />
          <Input
            name="imobiliaria"
            value={formData.imobiliaria}
            onChange={handleChange}
            placeholder="Imobiliária (se aplicável)"
            className="border-[#cccccc]"
            aria-label="Imobiliária"
          />
          <Input
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            placeholder="Cidade de atuação"
            className="border-[#cccccc]"
            aria-label="Cidade de atuação"
          />
          <Button
            type="submit"
            className="w-full bg-[#00204a] hover:bg-[#00367d] text-white"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                QUERO VENDER MAIS IMÓVEIS <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>
          <p className="text-xs text-center text-[#000a17]/60 pt-2">
            Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </form>
      )}
    </div>
  )
}

