"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { Dribbble, LinkedIn, X } from "@/components/foundations/social-icons";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        name: "Sutra of Individual Liberation",
        author: "Buddha Shakyamuni",
        summary: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, which form the core of the curriculum in most Nyigma shedras.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-01-buddha-shakyamuni.jpg",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
    {
        name: "Commentary on the Sutra of Individual Liberation",
        author: "Khenpo Shenga",
        summary: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, on which Khenpo Shenga provided commentaries.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-khenpo-shenga-thangka.jpg",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
    {
        name: "The Vinayasutra",
        author: "Gunaprabha",
        summary: "The Vinayasutra consists of a root text on Vinaya and its auto-commentary. Gunaprabha was an Indian master of the Vinaya tradition born in the 7th century and a disciple of Vasubandhu. According to one tradition, he is counted as one of the ‘Two Supreme Ones’—great commentators on the Buddha’s teachings.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-02-gunaprabha.jpg",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
    {
        name: "Commentary on the Vinayasutra",
        author: "Khenpo Shenga",
        summary: "Khenpo Shenga is an important figure in the Rimé movement who revitalized study in much of Eastern Tibet by founding shedras and by revising the scholastic curriculum with an emphasis on the classical treatises of India.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-khenpo-shenga-thangka.jpg",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
    {
        name: "Mia Ward",
        author: "Backend Developer",
        summary: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
        thumbnailCover: "https://www.untitledui.com/images/portraits/mia-ward",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
    {
        name: "Archie Young",
        author: "Product Designer",
        summary: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        thumbnailCover: "https://www.untitledui.com/images/portraits/archie-young",
        socials: [
            {
                icon: X,
                href: "https://x.com/",
            },
            {
                icon: LinkedIn,
                href: "https://www.linkedin.com/",
            },
            {
                icon: Dribbble,
                href: "https://dribbble.com/",
            },
        ],
    },
];

export const CollectionSectionGallery = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col pr-4 md:pr-8">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Nyingma Studies</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            The Thirteen Great Treatises of the Nyingma school form the core of the curriculum in most Nyingma monastic institutions, on which treatises Mipham Rinpoche and Khenpo Shenga wrote commentaries.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button size="xl">Explore Genres</Button>
                        <Button color="secondary" size="xl">
                            School's Overview
                        </Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-12 md:mt-16"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-6 pr-4 md:gap-8 md:pr-8">
                        {collectionTexts.map((text) => (
                            <Carousel.Item
                                key={text.name}
                                className="relative flex aspect-[.65] w-full max-w-70 flex-col justify-end md:aspect-[0.75] md:max-w-96 shadow-xl"
                            >
                                <img alt={text.name} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full cursor-grab object-cover rounded-lg" />

                                <div className="z-10 bg-linear-to-t from-black/40 to-black/0 pt-16 md:pt-20 lg:pt-24">
                                    <div className="relative bg-blue-800/50 px-5 pt-5 pb-6 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold">{text.name}</h3>
                                            <ArrowUpRight className="size-6" />
                                        </div>
                                        <p className="mt-2 text-md font-semibold">{text.author}</p>
                                        <p className="mt-2 text-sm md:text-md">{text.summary}</p>
                                        <ul className="mt-4 flex gap-5">
                                            {text.socials.map((social) => (
                                                <li key={social.href}>
                                                    <a
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex rounded-xs text-white outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                                    >
                                                        <social.icon className="size-5" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-8 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>
        </section>
    );
};
