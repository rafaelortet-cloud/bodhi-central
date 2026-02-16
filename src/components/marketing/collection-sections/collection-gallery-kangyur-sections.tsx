"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "Discipline",
        tibetan_title: "འདུལ་བ།",
        sanskrit_title: "Vinaya",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "Works focusing primarily on the monastic rules and their origins, but also containing a wealth of historical, biographical, and cultural material.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        canon_division: "Vinaya",
        section_numbers: "Toh 1-7",
    },
    {
        english_title: "Perfection of Wisdom",
        tibetan_title: "ཤེར་ཕྱིན།",
        sanskrit_title: "Prajñāpāramitā",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "This volume contains the second and last part of the Bhikkhu-vibhaṅga, “the Monks’ Analysis”. Whereas the first volume contains the heavy oﬀenses of pārājika and saṅghādisesa, also known as garukāpatti, the current volume contains the light oﬀenses, or lahukāpatti.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-vol-2-600.jpg",
        canon_division: "Discourses",
        section_numbers: "Toh 8-30",
    },
    {
        english_title: "A Multitude of Buddhas",
        tibetan_title: "ཕལ་ཆེན།",
        sanskrit_title: "Buddhāvataṃsaka",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "This volume consists of the Bhikkhunī-vibhaṅga, the Nuns’ Pātimokkha rules and their analysiss.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        canon_division: "Discourses",
        section_numbers: "Toh 44",
    },
    {
        english_title: "Heap of Jewels",
        tibetan_title: "དཀོན་བརྩེགས།",
        sanskrit_title: "Ratnakūṭa",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "The Great Division is the first of the Khandhakas, and focuses mostly on the main regulations and ceremonies of the Sangha.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-xl-600.jpg",
        canon_division: "Discourses",
        section_numbers: "Tok 45-93",
    },
    {
        english_title: "General Sūtra Collection",
        tibetan_title: "མདོ་སྡེ།",
        sanskrit_title: "Sūtra",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "The Lesser Division is the second of the Khandhakas, and is more concerned with lesser regulations and the working our of details.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-xl-600.jpg",
        canon_division: "Discourses",
        section_numbers: "Toh 94-359",
    },
    {
        english_title: "Tantra Collection",
        tibetan_title: "རྒྱུད་འབུམ།",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "The principal tantra collection of 468 canonical tantras, mainly from the “later spread” of Vajrayāna to Tibet, arranged by level.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg",
        canon_division: "Tantra",
        section_numbers: "Toh 360-827",
    },
    {
        english_title: "Nyingma Tantra",
        tibetan_title: "རྙིང་རྒྱུད།",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "Seventeen works representing a small selection of the many tantras of the Ngagyur Nyingma (“earlier translation”) tradition.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg",
        canon_division: "Tantra",
        section_numbers: "Toh 828-844",
    },
    {
        english_title: "Wheel of Time Commentary",
        tibetan_title: "དུས་འཁོར་འགྲེལ་བཤད།",
        sanskrit_title: "Kālacakra­ṭīkā (Vimala­prabhā)",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "The Parivāra is a detailed and condensed systematization of the most important rules and regulations of the first five volumes of the Vinaya.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg",
        canon_division: "Tantra",
        section_numbers: "Toh 845",
    },
    {
        english_title: "Dhāraṇī",
        tibetan_title: "Parivāra",
        sanskrit_title: "Dhāraṇis",
        author_english: "Buddha Shakyamuni",
        canon: "Kangyur",
        short_description: "Short sūtra or tantra texts used mainly for ritual purposes, mostly structured around a dhāraṇī formula in Sanskrit, its uses and the story of its origin.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg",
        canon_division: "Dhāraṇī",
        section_numbers: "Toh 846-1108",
    },
];

export const CollectionGalleryKangyurSections = () => {
    return (
        <section className="relative overflow-hidden -mt-24 z-100 bg-linear-to-b from-red-25 to-red-50 dark:bg-linear-to-b dark:from-gray-950/0 dark:from-0% dark:via-gray-950 dark:via-10% dark:to-red-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Kangyur Divisions</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Kangyur is the principal collection of the Buddhist scriptures in Tibetan. It contains some 900 works in over 100 volumes, all translations into Tibetan of the Indian texts considered to record the words of the Buddha.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="md">
                            Kangyur outline
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
                                className="relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 drop-shadow-lg border-2 border-red-300 dark:border-red-900 rounded-xl overflow-hidden"
                            >
                                <img alt={text.english_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-1] cursor-grab object-cover rounded-sm" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className="relative bg-red-900/50 px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm">
                                        <h3 className="text-xl text-brand-200">{text.english_title}</h3>
                                        <p className="tibetan-text mt-1 text-xl">{text.tibetan_title}</p>
                                        <p className="mt-4 text-xs">{text.canon}</p>
                                        <p className="hidden mt-2 text-sm md:text-sm">{text.short_description}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm text-brand-200 uppercase">{text.canon_division}</p>
                                                <p className="text-xs text-brand-200">{text.section_numbers}</p>
                                            </div>
                                            <Button size="sm" className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400">
                                                Explore
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
