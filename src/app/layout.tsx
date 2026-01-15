import type { Metadata, Viewport } from "next";
import { Nunito, Roboto_Serif } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge10 } from "@/components/marketing/footers/footer-large-10";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
});

const robotoSerif = Roboto_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-serif",
    axes: ["wdth", "opsz", "GRAD"],
});

export const metadata: Metadata = {
    title: "Bodhi Central — Buddhist Scriptures",
    description: "A hub for explorations of Buddha's teachings around the world.",
};

export const viewport: Viewport = {
    themeColor: "#7f56d9",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={cx(nunito.variable, robotoSerif.variable)}>
            <body className="bg-primary antialiased">
                <RouteProvider>
                    <Theme>
                        <Header />
                        {children}
                        <FooterLarge10 />
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
