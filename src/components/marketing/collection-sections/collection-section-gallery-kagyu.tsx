"use client";

import { ArrowLeft, ArrowRight, BookOpen01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        tibetan_title: "སོ་སོར་ཐར་པའི་མདོ།",
        author_tibetan: "སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ།",
        english_title: "Sutra of Individual Liberation",
        author_english: "Buddha Shakyamuni",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, which form the core of the curriculum in most Nyigma shedras.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-01-buddha-shakyamuni.jpg",
        genre: "VINAYA",
    },
    {
        tibetan_title: "སོ་སོར་ཐར་པའི་མདོ་ཡི་མཆན་འགྲེལ།",
        author_tibetan: "",
        english_title: "Commentary on the Sutra of Individual Liberation",
        author_english: "Khenpo Shenga",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, on which Khenpo Shenga provided commentaries.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-khenpo-shenga-thangka.jpg",
        genre: "VINAYA",
    },
    {
        tibetan_title: "འདུལ་བའི་མདོ།",
        author_tibetan: "",
        english_title: "The Vinayasutra",
        author_english: "Gunaprabha",
        short_description: "The Vinayasutra consists of a root text on Vinaya and its auto-commentary. Gunaprabha was an Indian master of the Vinaya tradition born in the 7th century and a disciple of Vasubandhu. According to one tradition, he is counted as one of the ‘Two Supreme Ones’—great commentators on the Buddha’s teachings.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-02-gunaprabha.jpg",
        genre: "VINAYA",
    },
    {
        tibetan_title: "འདུལ་བ་མདོ་རྩ་བའི་མཆན་འགྲེལ་པདམ་དཀར་པོའི་ལྗོན་ཤིང་།",
        author_tibetan: "",
        english_title: "Commentary on the Vinayasutra",
        author_english: "Khenpo Shenga",
        short_description: "Khenpo Shenga is an important figure in the Rimé movement who revitalized study in much of Eastern Tibet by founding shedras and by revising the scholastic curriculum with an emphasis on the classical treatises of India.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-khenpo-shenga-thangka.jpg",
        genre: "VINAYA",
    },
    {
        tibetan_title: "མངོན་པ་ཀུན་བཏུས།",
        author_tibetan: "",
        english_title: "Compendium of Abhidharma",
        author_english: "Asanga",
        short_description: "The Compendium of Abhidharma is one of the 'Six Ornaments', the greatest Buddhist authorities of Ancient India. It is a complete and systematic account of the Abhidharma.",
        thumbnailCover: "/textCovers/indian-texts-asanga.jpg",
        genre: "ABHIDHARMA",
    },
    {
        tibetan_title: "ཐེག་པ་ཆེན་པོའི་ཆོས་མངོན་པ་ཀུན་ལས་བཏུས་པའི་མཆན་འགྲེལ་ནོར་བུའི་མེ་ལོང་།",
        author_tibetan: "",
        english_title: "Commentary on the Compendium of Abhidharma",
        author_english: "Khenpo Shenga",
        short_description: "Khenpo Shenga is an important figure in the Rimé movement who revitalized study in much of Eastern Tibet by founding shedras and by revising the scholastic curriculum with an emphasis on the classical treatises of India.",
        thumbnailCover: "/textCovers/thirteen-nyingma-texts-khenpo-shenga-thangka.jpg",
        genre: "ABHIDHARMA",
    },
];

export const CollectionSectionGallery = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col pr-4 md:pr-8">
                        <h2 className="text-display-md text-primary md:text-display-lg">Nyingma Studies</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            The Thirteen Great Treatises form the core of the curriculum in most Nyingma monastic institutions, with commentaries by Mipham Rinpoche and Khenpo Shenga.
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
                    <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-6 md:pr-6">
                        {collectionTexts.map((text) => (
                            <Carousel.Item
                                key={text.tibetan_title}
                                className="relative flex aspect-[.666] w-full max-w-64 flex-col justify-end md:aspect-[0.666] md:max-w-74 shadow-xl border-2 border-blue-200 rounded-xl overflow-hidden"
                            >
                                <img alt={text.tibetan_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-3%] cursor-grab object-cover rounded-sm" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className="relative bg-blue-800/50 px-5 pt-5 pb-6 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm">
                                        <h3 className="text-md font-semibold text-brand-200">{text.english_title}</h3>
                                        <p className="tibetan-text mt-1 text-lg">{text.tibetan_title}</p>
                                        <p className="mt-4 text-sm font-medium">{text.author_english}</p>
                                        <p className="hidden mt-2 text-sm md:text-sm">{text.short_description}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <p className="text-xs font-normal text-brand-200">{text.genre}</p>
                                            <Button size="sm" className="bg-black/20 hover:bg-black/30 border-0.5 border-white/50 hover:border-white/50 text-white/50 hover:text-white/60 dark:bg-gray-900/50 dark:border-gray-900/50 dark:text-gray-400">
                                                Read
                                            </Button>
                                        </div>
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
        </section >
    );
};
