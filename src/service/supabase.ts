import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = process.env
  .NEXT_PUBLIC_SUPABASE_URL as string;
export const supabaseKey: string = process.env
  .NEXT_PUBLIC_SUPABASE_KEY as string;
export const supabaseServiceKey: string = process.env
  .NEXT_PUBLIC_SUPABASE_SERVICE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
// export const supabaseAlt = createClient(supabaseUrl, supabaseServiceKey);
