
import { HeaderReader } from "@/components/marketing/header-navigation/header-reader";
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
            <div className="reader-root bg-olive-200 dark:bg-black">
                <HeaderReader user={user} />
                {children}
            </div>
        </>
    );
}
