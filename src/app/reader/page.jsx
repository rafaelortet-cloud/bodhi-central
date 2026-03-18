"use client";
import { Close01, Columns01, Menu01 } from "@untitledui/icons";


export default function ReaderPage() {
    return (
        <>
            <div className="bg-olive-100 dark:bg-olive-800 h-full -mt-18">
                <div className="relative top-0 pt-18 mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-[2.25fr_0.75fr] gap-0 overflow-hidden">
                    <div id="reader-nav-container" className="absolute top-22 left-4 bottom-4 w-96 z-50 bg-white dark:bg-olive-900 rounded-2xl p-8 drop-shadow-md">
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
                    <div id="reader-content-container" className="w-full h-full">
                        <div id="reader-header" className="flex flex-row mx-auto w-full pl-5 pt-5 items-center justify-between"><Menu01 /> <Columns01 /></div>
                        <div id="reader-content" className="prose flex flex-col mx-auto w-md pt-8 items-center justify-center">
                            <h2 className="text-xl font-bold text-primary">Text Canvas Specs</h2>
                            <p className="text-sm text-tertiary text-center">The Text Canvas is the main area of the reader, where the user can read the text.</p>
                            <p className="text-sm text-tertiary text-center">This canvas and related features are a work in progress. Its development is ongoing and will be reported on our <a className="text-brand-700 dark:text-brand-300" href="https://bodhi-central-docs.vercel.app/tech/features-roadmap" target="_blank">Technical Documentation</a> as the project progresses.</p>
                        </div>
                    </div>
                    <div id="reader-auxiliary-container" className="w-full h-full p-4">
                        <div id="reader-auxiliary" className="prose flex flex-col w-full h-full bg-white dark:bg-olive-900 p-8 rounded-2xl drop-shadow-md">
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
            </div>
        </>
    );
}
