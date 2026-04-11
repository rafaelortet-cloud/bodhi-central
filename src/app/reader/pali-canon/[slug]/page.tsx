"use client";

export default function PaliCanonSectionPage() {
    return (
        <>
            <div className="relative mx-auto">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/55 dark:bg-black/55 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col mx-auto max-w-2xl items-center justify-center py16 px-4 md:px-6">
                        <h1 className="text-display-md text-center text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl pb-6">Dynamic Pali Canon Section</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">A single section of the Pali Canon.</p>
                    </section>
                </div>
            </div>
        </>
    );
}
