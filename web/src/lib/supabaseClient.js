import { createClient } from '@supabase/supabase-js';

// Essas variáveis devem estar no seu arquivo .env na raiz do projeto
// Ex: VITE_SUPABASE_URL=SUA_URL_SUPABASE
//     VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANON
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase URL or Anon Key is missing. Make sure to set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
  // Você pode querer lançar um erro aqui ou lidar com isso de outra forma
  // throw new Error('Supabase client configuration is missing.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
