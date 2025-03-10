import { ReactNode } from "react";
// import { getSupabaseServer } from "@/service/supabase/supabaseServer";
import AppFooter from "./AppFooter";
import AppLayout from "./AppLayout";

// import { redirect } from "next/navigation";

function AuthenticatedPage({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="relative">
        <AppLayout>{children}</AppLayout>

        <AppFooter />
      </div>
    </main>
  );
}

export default AuthenticatedPage;
