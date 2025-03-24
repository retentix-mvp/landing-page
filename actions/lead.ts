"use server"

import { type LeadFormData, saveLead as saveLeadToSupabase } from "@/lib/supabase"

// Modifique a função saveLead para não depender da coluna data_cadastro

export async function saveLead(formData: LeadFormData) {
  try {
    // Validação adicional no servidor
    if (!formData.nome || !formData.email || !formData.whatsapp) {
      return {
        success: false,
        error: { message: "Campos obrigatórios não preenchidos" },
      }
    }

    // Adicione a origem, mas não adicione data_cadastro
    // O Supabase usará o timestamp padrão (created_at)
    // const dataToSave = {
      // ...formData,
      // origem: formData.origem || window?.location?.href || "site",
    // }

    // Salvar no Supabase
    const result = await saveLeadToSupabase(formData)

    // Enquanto o Supabase não estiver configurado, simularemos sucesso
    // Remova esta condição quando o Supabase estiver configurado
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.log("Supabase não configurado. Simulando sucesso.")
      console.log("Dados recebidos:", formData)

      // Simular um pequeno atraso para dar feedback ao usuário
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { success: true, data: formData }
    }

    return result
  } catch (error) {
    console.error("Erro ao processar lead:", error)
    return {
      success: false,
      error: { message: "Erro ao processar cadastro" },
    }
  }
}

