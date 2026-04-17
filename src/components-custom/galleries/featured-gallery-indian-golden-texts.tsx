"use client";

import { Button } from "@/components/base/buttons/button";
import { GalleryTibetanStudiesTexts } from "./gallery-tibetan-studies-texts";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";

export const FeaturedGalleryIndianGoldenTexts = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-brand-50 from-0% via-brand-100 via-30% to-brand-200 to-100% dark:bg-linear-to-b dark:from-brand-800/50 dark:from-0% dark:via-brand-800/30 dark:via-30% dark:to-brand-900/90 py-6 md:pt-12 md:pb-48 ">

            <div className="absolute inset-0 bg-[url(/ancient-nalanda-university-idealization.jpg)] bg-cover bg-bottom bg-no-repeat opacity-12 mix-blend-luminosity"></div>
            <div className="flex flex-row mx-auto items-center px-4 md:px-8 gap-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex flex-col min-w-90 gap-8">
                    <div className="flex flex-col px-6 items-center gap-4">
                        <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg text-center">Indian Mahayana</h2>
                        <div className="border-y border-brand-800 dark:border-brand-300 mt-2 text-center ">
                            <span className="text-lg font-extralight text-brand-800 dark:text-brand-300 md:text-lg text-center">The Golden Collection</span>
                        </div>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg text-center">
                            A revered collection of the most important sūtras and śāstras that form the foundation of the Mahayana tradition.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button href="/canon-overviews/kagyu-studies-overview" color="secondary" size="md">
                            Overview
                        </Button>
                        <Button color="secondary" size="md" onClick={() => openCanonNavigator()} >
                            See more
                        </Button>
                    </div>
                </div>

                {/* <!-- Gallery --> */}
                <GalleryTibetanStudiesTexts schoolType="Indian Mahayana" />
            </div>
        </section >
    );
};
