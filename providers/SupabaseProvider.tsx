"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const SupabaseProvider = ({ children }: Props) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};


export default SupabaseProvider;