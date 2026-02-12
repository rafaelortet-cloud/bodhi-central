"use client";


import { PlayCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { useClipboard } from "@/hooks/use-clipboard";
import { FeaturesAlternatingLayout01 } from "@/components/marketing/features/features-alternating-layout-01";

export const HomeScreen = () => {
    const clipboard = useClipboard();

    return (
        <div className="relative overflow-hidden bg-brand-50 dark:bg-brand-200">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 opacity-90 md:block dark:opacity-20 dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-dot-sm-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 opacity-20 md:hidden dark:opacity-20 dark:brightness-[0.2]"
            />

            <section className="relative py-10 md:pb-10">

                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute z-20 -right-4 -bottom-14 max-w-160 opacity-90 mix-blend-multiple md:right-4 md:-bottom-1/3 md:max-w-7xl mask-b-from-90% mask-b-to-100%"
                />
                <div className="relative mx-auto grid max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:min-h-150 lg:items-center">
                    <div className="z-10 flex max-w-2xl flex-col items-start">
                        <span className="text-sm font-semibold text-brand-600 md:text-md">Open. Inclusive. Relevant.</span>
                        <h1 className="text-display-md font-semibold text-brand-800 md:text-display-lg lg:text-display-xl">
                            Gateways to Buddhist paths of the Awakening
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-balance text-gray-600 md:mt-6 md:text-xl">
                            A modern platform channeling universally revered Buddhist teachings and knowledge for everyone.{" "}
                        </p>

                        <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 md:mt-12 md:flex-row md:items-start">
                            <Button color="secondary" size="xl" iconLeading={PlayCircle}>
                                Intro
                            </Button>
                            <Button size="xl">Sign up</Button>
                        </div>
                    </div>

                    <div className="relative lg:absolute lg:top-0 lg:right-8 lg:h-full lg:w-140">
                        <img
                            className="inset-0 h-70 w-full object-cover md:h-120 lg:h-full"
                            src="/cognitive-mandala-02.webp"
                            alt="Cognitive mandala"
                        />
                    </div>
                </div>
            </section>
            <FeaturesAlternatingLayout01 />
        </div >


    );
};
