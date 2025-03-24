"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
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

  // Modifique a função handleSubmit para não enviar data_cadastro

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
      } else {
        throw new Error(result.error?.message || "Erro ao salvar dados")
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
      <h3 className="text-xl font-bold mb-4">Cadastre-se para a lista de espera</h3>

      {isSuccess ? (
        <div className="text-center py-6">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-lg font-bold mb-2">Cadastro realizado com sucesso!</h4>
          <p className="mb-4">Obrigado pelo seu interesse. Entraremos em contato em breve.</p>
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
                Garantir Minha Vaga <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

