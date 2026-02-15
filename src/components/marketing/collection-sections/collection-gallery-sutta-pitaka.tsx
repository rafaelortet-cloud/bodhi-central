"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "The Chapter on the Entire Spectrum of Ethics",
        pali_title: "Sīlakkhandhavagga",
        author_pali: "Buddha Shakyamuni",
        canon: "Long Discourses",
        short_description: "The Chapter Containing the Section on Ethics (Sīlakkhandhavagga) is a chapter of 13 discourses. Each of these contains a long passage on the Gradual Training in ethics, meditation, and wisdom.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-DN-600.jpg",
        pitaka_section: "Dīgha Nikāya",
        section_numbers: "DN 1-13",
    },
    {
        english_title: "The Great Chapter",
        pali_title: "Mahāvagga",
        author_pali: "Buddha Shakyamuni",
        canon: "Long Discourses",
        short_description: "This chapter contains a diverse range of discourses. Several focus on the events surrounding the Buddha’s death, while others range into fabulous scenarios set among the gods, and still others are grounded in detailed discussions of doctrine.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-DN-600.jpg",
        pitaka_section: "Dīgha Nikāya",
        section_numbers: "DN 14-23",
    },
    {
        english_title: "The Chapter with Pāṭikaputta",
        pali_title: "Pāthikavagga",
        author_pali: "Buddha Shakyamuni",
        canon: "Long Discourses",
        short_description: "Like the previous chapter, this contains a diverse range of discourses. It is named after the first discourse in the chapter. Among the discourses here are legendary accounts of the history and future of our world, which are extremely famous and influential in Buddhist circles.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-DN-600.jpg",
        pitaka_section: "Dīgha Nikāya",
        section_numbers: "DN 24-34",
    },
    {
        english_title: "The First Fifty",
        pali_title: "Mūlapaṇṇāsa",
        author_pali: "Buddha Shakyamuni",
        canon: "Middle Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-MN-600.jpg",
        pitaka_section: "Majjhima Nikāya",
        section_numbers: "MN 1-50",
    },
    {
        english_title: "The Middle Fifty",
        pali_title: "Majjhimapaṇṇāsa",
        author_pali: "Buddha Shakyamuni",
        canon: "Middle Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-MN-600.jpg",
        pitaka_section: "Majjhima Nikāya",
        section_numbers: "MN 51-100",
    },
    {
        english_title: "The Final Fifty",
        pali_title: "Uparipaṇṇāsa",
        author_pali: "Buddha Shakyamuni",
        canon: "Middle Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-MN-600.jpg",
        pitaka_section: "Majjhima Nikāya",
        section_numbers: "MN 101-152",
    },
    {
        english_title: "The Group of Linked Discourses With Verses",
        pali_title: "Sagāthāvaggasaṁyutta",
        author_pali: "Buddha Shakyamuni",
        canon: "Linked Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-SN-600.jpg",
        pitaka_section: "Saṁyutta Nikāya",
        section_numbers: "SN 1-11",
    },
    {
        english_title: "The Group of Linked Discourses Beginning With Causation",
        pali_title: "Nidānavaggasaṁyutta",
        author_pali: "Buddha Shakyamuni",
        canon: "Linked Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-SN-600.jpg",
        pitaka_section: "Saṁyutta Nikāya",
        section_numbers: "SN 12-21",
    },
    {
        english_title: "The Group of Linked Discourses Beginning With the Aggregates",
        pali_title: "Khandhavaggasaṁyutta",
        author_pali: "Buddha Shakyamuni",
        canon: "Linked Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-SN-600.jpg",
        pitaka_section: "Saṁyutta Nikāya",
        section_numbers: "SN 22-34",
    },
    {
        english_title: "The Group of Linked Discourses Beginning With the Six Sense Fields",
        pali_title: "Saḷāyatanavaggasaṁyutta",
        author_pali: "Buddha Shakyamuni",
        canon: "Linked Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-SN-600.jpg",
        pitaka_section: "Saṁyutta Nikāya",
        section_numbers: "SN 35-44",
    },
    {
        english_title: "The Group of Linked Discourses on the Path",
        pali_title: "Maggavaggasaṁyutta",
        author_pali: "Buddha Shakyamuni",
        canon: "Linked Discourses",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-SN-600.jpg",
        pitaka_section: "Saṁyutta Nikāya",
        section_numbers: "SN 45-56",
    },
];

export const CollectionGallerySuttaPitaka = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-orange-25 to-orange-50 dark:bg-linear-to-b dark:from-gray-950 dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Sutta Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Sutta Piṭaka, the “basket of discourses,” is the most important body of sacred scripture in Buddhism. This collection contains the teachings of the Buddha and his disciples, as collected and transmitted by the schools of early Buddhism. This is the well-spring of Dhamma, from which the teachings and practices of the many schools of Buddhism are drawn.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="md">
                            Sutta Piṭaka overview
                        </Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-4 md:mt-6"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4">
                        {collectionTexts.map((text) => (
                            <Carousel.Item
                                key={text.english_title}
                                className="relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 drop-shadow-lg border-2 border-orange-300 dark:border-orange-900 rounded-xl overflow-hidden"
                            >
                                <img alt={text.pali_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-1] cursor-grab object-cover rounded-sm" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className="relative bg-orange-900/50 px-4 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-4 rounded-b-sm">
                                        <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        <p className="tibetan-text mt-1 text-lg">{text.pali_title}</p>
                                        <p className="mt-4 text-xs font-regular">{text.canon}</p>
                                        <p className="hidden mt-2 text-xs md:text-xs">{text.short_description}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm font-normal text-brand-200 uppercase">{text.pitaka_section}</p>
                                                <p className="text-xs font-normal text-brand-200">{text.section_numbers}</p>
                                            </div>
                                            <Button size="sm" className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400">
                                                Read
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>
                    <div className="mt-6 flex gap-4 md:gap-8">
                        <Carousel.PrevTrigger asChild>
                            <RoundButton icon={ArrowLeft} />
                        </Carousel.PrevTrigger>
                        <Carousel.NextTrigger asChild>
                            <RoundButton icon={ArrowRight} />
                        </Carousel.NextTrigger>
                    </div>
                </Carousel.Root>
            </div>
        </section >
    );
};
