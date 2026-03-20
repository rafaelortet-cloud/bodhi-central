import { Header } from "@/components/marketing/header-navigation/header";
import { createClient } from "@/utils/supabase/server";

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
            <div className="reader-root h-screen overflow-hidden bg-olive-100 dark:bg-olive-800">
                <Header user={user} />
                {children}
            </div>
        </>
    );
}
