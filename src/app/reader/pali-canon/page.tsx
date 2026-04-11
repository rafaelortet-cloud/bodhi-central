"use client";

export default function PaliCanonTemplatePage() {
    return (
        <>
            <main className="bg-primary-100 dark:bg-primary-900">

                {/* Pali Section Header */}
                <section className="relative py-12">
                    <div className="mx-auto max-w-container grid grid-cols-[0.5fr_2fr] gap-0 border border-brand-500 rounded-xl overflow-hidden drop-shadow-sm">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 p-8 items-center justify-between bg-cream-100 dark:bg-brand-900 border-r border-brand-500">
                            <p className="text-lg text-center text-brand-800 dark:text-brand-200">Sutta Piṭaka</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-center text-lg font-semibold text-tertiary">MN</p>
                                <p className="text-center text-md font-semibold text-tertiary">Majjhima Nikāya</p>
                                <p className="text-center text-xl font-semibold text-tertiary">Middle Discourses</p>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="flex flex-col gap-6 p-8 bg-cream-50 dark:bg-brand-900">
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-center text-lg font-regular text-tertiary">Mūlapaṇṇāsa</p>
                                <h1 className="text-display-md text-center font-light text-brand-800 dark:text-brand-200">The First Fifty Discourses</h1>
                            </div>
                            <p className="text-md font-regular text-tertiary">There are 152 discourses in the Majjhima (Middle Discourses). These are collected into groups of 50 discourses (paṇṇāsa), although the final paṇṇāsa contains 52. Within each paṇṇāsa is a set of five vaggas. The Majjhima is perhaps the richest of the early Buddhist collections in matters of doctrine. It contains an extraordinary series of discourses that delve into profound topics with detail and complexity not found elsewhere. The Mūlapaṇṇāsa (First Fifty) starts with The Chapter on the Root of All Things, and concludes with The Lesser Chapter on Pairs.</p>
                        </div>
                    </div>
                </section>

                {/* Pali Section Chapters */}
                <section className="relative py-12">
                    <h2 className="text-display-md text-center font-light text-brand-800 dark:text-brand-200">Chapters</h2>
                    <div className="mx-auto max-w-container grid grid-cols-[0.5fr_2fr] gap-0 border border-brand-500 rounded-xl overflow-hidden drop-shadow-sm">
                        {/* ToDo: Implement a Tab component here: Each tab corresponds to one of the chapters on this Pali Section */}
                    </div>
                </section>
            </main>
        </>
    );
}
