import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge10 } from "@/components/marketing/footers/footer-large-10";
import { createClient } from "@/utils/supabase/server";

export default async function MarketingLayout({
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
            <Header user={user} />
            {children}
            <FooterLarge10 />
        </>
    );
}
