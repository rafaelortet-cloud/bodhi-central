"use client";

import type { FC, HTMLAttributes } from "react";
import { BookOpen01, ChartBreakoutSquare, TrendUp01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { CheckItemText } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";
import { cx } from "@/utils/cx";

const AlternateImageMockup: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            className={cx(
                "size-full rounded-[9.03px] bg-primary p-[0.9px] shadow-modern-mockup-outer-md ring-[0.56px] ring-utility-gray-300 ring-inset md:rounded-[20.08px] md:p-0.5 md:shadow-modern-mockup-outer-lg md:ring-[1.25px] lg:absolute lg:w-auto lg:max-w-none",
                props.className,
            )}
        >
            <div className="size-full rounded-[7.9px] bg-primary p-0.5 shadow-modern-mockup-inner-md md:rounded-[17.57px] md:p-[3.5px] md:shadow-modern-mockup-inner-lg">
                <div className="relative size-full overflow-hidden rounded-[6.77px] ring-[0.56px] ring-utility-gray-200 md:rounded-[15.06px] md:ring-[1.25px]">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const FeaturesAlternatingLayout01 = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Three Pillars</span>
                    <h2 className="mt-3 text-display-sm text-primary md:text-display-md">Beautiful presentations of Buddha's teachings</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Gateways to relevant and powerful lineage transmissions to support spiritual seekers and communities around the world.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={BookOpen01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary md:text-display-sm">Buddhist Scriptures</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you are focusing on studies, practices, or exploring what Buddha's teachings mean for your life, we have gathered for you the most relevant texts across major streams of Buddhism.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Inclusive approach to collections of texts representing a wide range of vital living transmissions of Buddhism",
                                "Organizing texts by traditions, schools, genres, and specialized study tracks to meet your needs",
                                "State-of-the-art readers and workspaces to make your experience smooth and memorable",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Scripture mockup showing Collections interface"
                                src="/scripture-mockup-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="/scripture-mockup-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={TrendUp01} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary md:text-display-sm">Learning Paths</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Accessing Buddha's teachings has never been easier. Yet, navigating the vast amount of literature and teachings available today can be overwhelming. We are changing that!
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Discover foundational learning paths that will provide you with a solid understanding of the Buddhist core teachings",
                                "Explore academic and scholarly learning paths, your truthworthy companions for in-depth study and research",
                                "Engage in practical learning paths brought to you by the living Buddhist traditions to support your spiritual growth",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:right-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Mockup showing Learning Paths interface"
                                src="/learning-paths-mockup-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Mockup showing Learning Paths interface"
                                src="/learning-paths-mockup-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} size="lg" color="gray" theme="modern-neue" />
                        <h3 className="mt-5 text-display-xs text-primary md:text-display-sm">Resources for individuals and communities</h3>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you are a solo practitioner or a community leader, discover tools to enhance your activities and contributions to the community.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Find and connect with other fellows and communities around the world",
                                "Explore a range of Western and Eastern Buddhist academic centers offering advanced study programs",
                                "Read insightful articles on topics relevant to these turbulent times, presented from a Buddhist perspective",
                                "Build your personal library with favorite texts and learning materials to support your studies",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full flex-1 lg:h-128">
                        <AlternateImageMockup className="lg:left-0">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="size-full object-contain lg:w-auto lg:max-w-none dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="size-full object-contain not-dark:hidden lg:w-auto lg:max-w-none"
                            />
                        </AlternateImageMockup>
                    </div>
                </div>
            </div>
        </section>
    );
};
