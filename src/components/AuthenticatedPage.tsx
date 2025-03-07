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

        <footer className="fixed bottom-0 w-full rounded-t-lg bg-grey-900 pt-2 lg:hidden">
          <AppFooter />
        </footer>
      </div>
    </main>
  );
}

export default AuthenticatedPage;
