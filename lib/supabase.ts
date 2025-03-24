import { createClient } from "@supabase/supabase-js"

// Estas variáveis serão configuradas no futuro
// Você precisará adicionar NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
// às suas variáveis de ambiente quando configurar o Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Criamos o cliente mesmo que as variáveis estejam vazias
// O cliente só funcionará quando as variáveis forem configuradas
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Modifique a função saveLead para remover a dependência da coluna 'data_cadastro'
// e usar o timestamp padrão do Supabase

export async function saveLead(leadData: LeadFormData) {
  try {
    // Verifica se as credenciais do Supabase estão configuradas
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error("Credenciais do Supabase não configuradas")
      throw new Error("Banco de dados não configurado. Por favor, configure o Supabase.")
    }

    // Remova data_cadastro do objeto antes de inserir
    // O Supabase usará o timestamp padrão (created_at)
    const { data_cadastro, ...dataToInsert } = leadData

    // Insere os dados na tabela 'leads'
    const { data, error } = await supabase.from("leads").insert([dataToInsert]).select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error("Erro ao salvar lead:", error)
    return { success: false, error }
  }
}

// Atualize a interface para tornar data_cadastro opcional
export interface LeadFormData {
  nome: string
  email: string
  whatsapp: string
  imobiliaria?: string
  cidade?: string
  origem?: string
  data_cadastro?: string // Torne opcional
}

