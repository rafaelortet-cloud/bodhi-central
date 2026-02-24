"use client";

import { ArrowLeft, ArrowRight, Dataflow01 } from "@untitledui/icons";
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
        color: "bg-orange-950/65",
        darkColor: "dark:bg-orange-900/70",
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
        color: "bg-orange-950/65",
        darkColor: "dark:bg-orange-900/70",
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
        color: "bg-orange-950/65",
        darkColor: "dark:bg-orange-900/70",
    },
    {
        english_title: "The First Fifty",
        pali_title: "Mūlapaṇṇāsa",
        author_pali: "Buddha Shakyamuni",
        canon: "Middle Discourses",
        short_description: "There are 152 discourses in the Majjhima (Middle Discourses). These are collected into groups of 50 discourses (paṇṇāsa), although the final paṇṇāsa contains 52. Within each paṇṇāsa is a set of five vaggas. The Majjhima is perhaps the richest of the early Buddhist collections in matters of doctrine. It contains an extraordinary series of discourses that delve into profound topics with detail and complexity not found elsewhere. This section comprises the first 50 discourses.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-MN-600.jpg",
        pitaka_section: "Majjhima Nikāya",
        section_numbers: "MN 1-50",
        color: "bg-yellow-800/70",
        darkColor: "dark:bg-yellow-800/70",
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
        color: "bg-yellow-800/70",
        darkColor: "dark:bg-yellow-800/70",
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
        color: "bg-yellow-800/70",
        darkColor: "dark:bg-yellow-800/70",
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
        color: "bg-emerald-900/70",
        darkColor: "dark:bg-emerald-900/70",
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
        color: "bg-emerald-900/70",
        darkColor: "dark:bg-emerald-900/70",
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
        color: "bg-emerald-900/70",
        darkColor: "dark:bg-emerald-900/70",
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
        color: "bg-emerald-900/70",
        darkColor: "dark:bg-emerald-900/70",
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
        color: "bg-emerald-900/70",
        darkColor: "dark:bg-emerald-900/70",
    },
    {
        english_title: "Numbered Discourses: The Book of the Ones, and so on",
        pali_title: "Ekakanipāta, and so on",
        author_pali: "Buddha Shakyamuni",
        canon: "Numbered Discourses",
        short_description: "The “Numbered” or “Numerical” Discourses are usually known as Aṅguttara Nikāya in Pali, abbreviated AN. However, the Pali tradition also knows the form Ekottara (“one-up” or “incremental”), and this is the form usually found in the northern collections. These collections organize texts in numbered sets, from one to eleven. Compared to the other nikāyas, they are more oriented to the lay community. ",
        thumbnailCover: "/textCovers/buddha-sakyamuni-AN-600.jpg",
        pitaka_section: "Aṅguttaranikāya",
        section_numbers: "AN 1-11",
        color: "bg-red-900/70",
        darkColor: "dark:bg-red-900/70",
    },
    {
        english_title: "Minor Collection",
        pali_title: "Khuddakanikāya",
        author_pali: "Buddha Shakyamuni",
        canon: "Minor Collection",
        short_description: "The word khuddaka means “lesser” or “minor”, and it seems that this category originally served to collect certain short collections, mostly verse, that were not conveniently assigned to one of the main nikāyas. Over time, however, the collection grew, so that the Khuddaka in the Pali canon today is the largest of the nikāyas. It includes some of the most popular texts in Theravāda Buddhism, such as the Dhammapada, the Sutta Nipāta, and the Jātakas.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-KN-600.jpg",
        pitaka_section: "Khuddakanikāya",
        section_numbers: "KN 1-9 and others",
        color: "bg-gray-900/70",
        darkColor: "dark:bg-gray-900/70",
    },
];

export const CollectionGallerySuttaPitaka = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-orange-25 to-orange-100 dark:bg-linear-to-b dark:from-gray-900 dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Sutta Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Sutta Piṭaka, the “basket of discourses,” is the most important body of sacred scripture in Buddhism. This collection contains the teachings of the Buddha and his disciples, as collected and transmitted by the schools of early Buddhism. This is the well-spring of Dhamma, from which the teachings and practices of the many schools of Buddhism are drawn.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
                            Suttapiṭaka Outline
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
                                className="group relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 drop-shadow-lg border-2 border-orange-300 dark:border-red-950 rounded-xl overflow-hidden hover:scale-[1.03] transition-all duration-300"
                            >
                                <img alt={text.pali_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-1] cursor-grab object-cover rounded-sm group-hover:hidden transition-all duration-300" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm group-hover:hidden transition-all duration-300">
                                    <div className={`relative ${text.color} ${text.darkColor} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                                        <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        <p className="mt-1 text-lg">{text.pali_title}</p>
                                        <p className="mt-4 text-xs font-regular">{text.canon}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm font-normal text-brand-200 uppercase">{text.pitaka_section}</p>
                                                <p className="text-xs font-normal text-brand-200">{text.section_numbers}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`hidden z-20 flex flex-col justify-between group-hover:flex ${text.color} ${text.darkColor} backdrop-blur-[10px] h-full transition-all duration-300 text-white p-5 overflow-y-auto`}>
                                    <div className="flex flex-col gap-2 mt-1 items-top">
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm font-normal pb-2">{text.canon}</p>
                                            <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        </div>
                                        <p className="mt-2 text-sm md:text-regular pb-4">{text.short_description}</p>
                                    </div>

                                    <Button size="sm" className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400">
                                        Explore section
                                    </Button>
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
