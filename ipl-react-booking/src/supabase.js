import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://edszbpwpkrjxxsgzfyzj.supabase.co";

const SUPABASE_KEY = "sb_publishable_Dqtoy45Aq5L5OeTsIfKuJA_yspDB_Ql";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


