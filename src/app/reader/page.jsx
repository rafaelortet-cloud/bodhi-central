"use client";
import { BodhicentralLogoMinimal } from "@/components/foundations/logo/bodhicentral-logo-minimal";


export default function ReaderPage() {
    return (
        <>
            <div className="bg-olive-100 dark:bg-olive-800 h-screen">
                <nav className="fixed z-100 top-0 mx-auto flex w-full h-12 bg-white dark:bg-white p-4 items-center justify-between drop-shadow-sm">
                    <div className="flex items-center gap-2">
                        <BodhicentralLogoMinimal />
                        <h2 className="text-lg font-bold">READER</h2>
                    </div>
                    <h2>Section / Text on display</h2>
                    <h2>Nav</h2>
                </nav>
                <div className="relative mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-[2.25fr_0.75fr] gap-2 pt-12 overflow-hidden">
                    <div id="reader-nav-container" className="absolute top-16 left-4 bottom-4 w-96 z-50 bg-white dark:bg-white rounded-xl p-8 drop-shadow-md">
                        <div id="reader-nav" className="flex flex-col w-full h-full bg-white dark:bg-white items-center justify-center">
                            <h2 className="text-lg font-bold text-primary pb-4">Canonical Navigation</h2>
                            <p className="text-sm text-tertiary pb-4">The Canonical Navigation is a hierarchical structure of the Buddhist canons, organized by the respective divisions, sections, and sub-sections of each canon.</p>
                            <p className="text-sm text-tertiary pb-4">This component is a work in progress. It will be used to navigate the Buddhist canons and their parallels.</p>
                            <p className="text-sm text-tertiary pb-4">Built on a modal, this composable and reusable component will be opened and closed by the user from contextually relevant locations.</p>
                            <p className="text-sm text-tertiary pb-4">A significant research effort has been undertaken to ensure the accuracy and completeness of the Canonical Navigation. The result is an intuitive and comprehensive structure that will be of great benefit to scholars and practitioners of Buddhism, and will be a cornerstone of the Bodhi Central platform.</p>
                            <p className="text-sm text-tertiary pb-4">As an example of the ongoing research and development of the Canonical Navigation, please check out the article dealing with the subject of canonical organization, <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/research/pali-canon/connections-and-parallels" target="_blank">Numbering the Sutta Piṭaka</a>. Many more articles are planned to be published on the subject of canonical organization.</p>
                            <p className="text-sm text-tertiary pb-4">On the technical side, for a reference on the developement and implementation of tre Canonical Navigation, please check out the <a className="text-brand-700 dark:text-brand-300" href="https://headless-tree.lukasbach.com" target="_blank">Headless Tree</a> component.</p>
                        </div>
                    </div>
                    <div id="reader-content-container" className="w-full h-full">
                        <div id="reader-content" className="flex w-full h-full p-4 items-center justify-center">
                            <h2>Text Header</h2>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <div id="reader-auxiliary" className="flex w-full h-full bg-white dark:bg-white p-4 items-center justify-center">
                            <h2>Auxiliary</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
