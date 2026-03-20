"use client";
import { Close01, Columns01, Menu02, Building08, HomeLine, Rows01, BookOpen01, Eye, EyeOff, Headphones01, Image01, VideoRecorder, InfoCircle, AlignLeft01, AlignRight01 } from "@untitledui/icons";
import { Breadcrumbs } from "@/components/application/breadcrumbs/breadcrumbs";
import { SidebarNavigationSlim } from "@/components/application/app-navigation/sidebar-navigation/sidebar-slim-reader";


export default function ReaderPage() {
    return (
        <>
            {/* The MAIN Reader wrapper */}
            <main className="mx-auto w-full h-full bg-olive-100 dark:bg-olive-800">

                <div className="mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-[4.25rem_2fr_24rem]">
                    {/* Sidebar Tools for the Text Navigation */}
                    <SidebarNavigationSlim
                        hideRightBorder
                        activeUrl=""
                        items={[
                            {
                                label: "Non-distraction Mode",
                                href: "",
                                icon: Eye,
                            },
                            {
                                label: "Title Information",
                                href: "",
                                icon: InfoCircle,
                            },
                            {
                                label: "Table of Contents",
                                href: "",
                                icon: Menu02,
                            },
                            {
                                label: "Front Matter",
                                href: "",
                                icon: AlignLeft01,
                            },
                            {
                                label: "Main Body",
                                href: "",
                                icon: BookOpen01,
                            },
                            {
                                label: "Back Matter",
                                href: "",
                                icon: AlignRight01,
                            },
                        ]}
                        footerItems={[
                            {
                                label: "Video Library",
                                href: "",
                                icon: VideoRecorder,
                            },
                            {
                                label: "Illustrations",
                                href: "",
                                icon: Image01,
                            },
                            {
                                label: "Audio Library",
                                href: "",
                                icon: Headphones01,
                            },
                        ]}
                    />

                    {/* TODO: Add Modal for canonical navigation */}
                    <div id="reader-nav-container" className="hidden absolute top-22 left-4 bottom-4 w-96 z-50 bg-white dark:bg-olive-900 rounded-2xl p-8 drop-shadow-md">
                        <div id="reader-nav" className="prose flex flex-col w-full">
                            <h2 className="text-xl font-bold text-primary">Canonical Navigation Specs</h2>
                            <p className="text-sm text-tertiary">The Canonical Navigation is a hierarchical structure of the Buddhist Pali and Tibetan canons, organized by the respective divisions, sections, and sub-sections of each canon.</p>
                            <p className="text-sm text-tertiary">This component is a work in progress. It will be used to navigate the Buddhist canons and their parallels.</p>
                            <p className="text-sm text-tertiary">Built on a modal, this composable and reusable component will be opened and closed by the user from contextually relevant locations.</p>
                            <p className="text-sm text-tertiary">A significant research effort has been undertaken to ensure the accuracy and completeness of the Canonical Navigation's functionality and structure. The result is an intuitive and holistic experience (including drag and drop functionality) that will be of great benefit to scholars and practitioners of Buddhism, and will be a cornerstone of the Bodhi Central platform.</p>
                            <p className="text-sm text-tertiary">As an example of the ongoing research and development of the Canonical Navigation, please check out the article dealing with the subject of canonical organization, <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/research/pali-canon/connections-and-parallels" target="_blank">Numbering the Sutta Piṭaka</a>. Many more articles are planned to be published on the subject of canonical organization.</p>
                            <p className="text-sm text-tertiary">On the technical side, for a reference on the developement of tre Canonical Navigation, please check out the <a className="text-brand-700 dark:text-brand-300" href="https://headless-tree.lukasbach.com" target="_blank">Headless Tree</a> component.</p>
                        </div>
                    </div>
                    {/* Reader Canvas wrapper */}
                    <div id="reader-content-container" className="relative mx-auto w-full h-full">
                        <div className="sticky top-16 left-17 right-0 z-50 p-4 bg-olive-100 dark:bg-olive-800">
                            <Breadcrumbs>
                                <Breadcrumbs.Item icon={Building08} href="/" />
                                <Breadcrumbs.Item href="/scripture">Canon</Breadcrumbs.Item>
                                <Breadcrumbs.Item href="/scripture/pali-canon">Division</Breadcrumbs.Item>
                                <Breadcrumbs.Item href="/learning-paths">Section</Breadcrumbs.Item>
                                <Breadcrumbs.Item href="/resources">Sutta</Breadcrumbs.Item>
                            </Breadcrumbs>
                        </div>
                        <div id="reader-content" className="flex flex-col mx-auto w-full h-full py-12 px-4 items-center justify-start bg-olive-50 dark:bg-olive-900 rounded-tl-2xl">
                            <h1 className="text-display-md text-brand-primary">Welcome to your Reading Experience!</h1>
                            <hr className="w-lg mt-4 mb-4 border-t border-olive-200 dark:border-olive-700" />
                            <h2 className="text-display-sm font-bold text-primary">Text Canvas Specs</h2>
                            <p className="text-sm text-tertiary text-center">The Text Canvas is the main area of the reader, where the user can read the text and its parts. It is organized into a series of blocks or segments that can be displayed or hidden by the user. These blocks follow the three traditional parts of a published book: Front Matter, Main Body, and Back Matter.</p>
                            <p className="text-sm text-tertiary text-center">This canvas and related features are a work in progress. Its development is ongoing and will be reported on our <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/tech/features-roadmap" target="_blank">Technical Documentation</a> as the project progresses.</p>
                        </div>
                    </div>

                    {/* The Auxiliary Panel wrapper */}
                    <div id="reader-auxiliary-container" className="w-full h-full">
                        <div id="reader-auxiliary" className="prose flex flex-col w-full h-full bg-white dark:bg-olive-900/70 p-8 rounded-2xl drop-shadow-md">
                            <h2 className="text-xl font-bold text-primary">Auxiliary Panel Specs</h2>
                            <p className="text-sm text-tertiary">The Auxiliary Panel is dedicated to displaying information related to the text being read. It is placed on the right side of the reader, where the user can expand on the various aspects of the text being read.</p>
                            <p className="text-sm text-tertiary">Among the features being considered for the Auxiliary Panel are the following:</p>
                            <ul className="text-sm text-tertiary">
                                <li>Listings of connections and parallels with related texts or sections on other parts of the canons.</li>
                                <li>Commentaries and sub-commentaries on the text being read.</li>
                                <li>Overviews of the text being read and recommended reading.</li>
                                <li>Related study paths.</li>
                            </ul>
                            <p className="text-sm text-tertiary pb-4">This panel and related features are a work in progress. Its development is ongoing and will be reported on our <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/tech/features-roadmap" target="_blank">Technical Documentation</a> as the project progresses.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
