
import { HeaderReader } from "@/components/marketing/header-navigation/header-reader";
import { SidebarReaderWrapper } from "@/components-custom/sidebars/sidebar-reader-wrapper";
import { createClient } from "@/utils/supabase/server";
import "@/styles/typography-reader.css";

export default async function ReaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            <div className="relative -mt-3">
                {/* Header Navigation */}
                <HeaderReader user={user} />
                {/* Sidebar Navigation - LEFT & RIGHT panels */}
                <SidebarReaderWrapper />
                {/* Main Content */}
                {children}
            </div>
        </>
    );
}
