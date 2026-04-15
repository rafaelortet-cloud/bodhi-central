"use client";

import { ArrowLeft, ArrowRight, Dataflow01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";
import { GalleryTibetanStudiesTexts } from "./gallery-tibetan-studies-texts";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";
import Image from 'next/image';

const nyigmaStudiesTexts = [
    {
        english_title: "Sutra of Individual Liberation",
        tibetan_title: "སོ་སོར་ཐར་པའི་མདོ།",
        author_tibetan: "སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ།",
        author_english: "Buddha Shakyamuni",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, which form the core of the curriculum in most Nyigma shedras.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        genre: "VINAYA",
        color: "bg-olive-700/70",
        darkColor: "dark:bg-olive-700/70",
    },
    {
        english_title: "Commentary on the Sutra of Individual Liberation",
        tibetan_title: "སོ་སོར་ཐར་པའི་མདོ་ཡི་མཆན་འགྲེལ།",
        author_tibetan: "",
        author_english: "Khenpo Shenga",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, on which Khenpo Shenga provided commentaries.",
        thumbnailCover: "/textCovers/khenpo-shenga-600.jpg",
        genre: "VINAYA",
        color: "bg-cyan-800/60",
        darkColor: "dark:bg-cyan-800/60",
    },
    {
        english_title: "The Vinayasutra",
        tibetan_title: "འདུལ་བའི་མདོ།",
        author_tibetan: "",
        author_english: "Gunaprabha",
        short_description: "The Vinayasutra consists of a root text on Vinaya and its auto-commentary. Gunaprabha was an Indian master of the Vinaya tradition born in the 7th century and a disciple of Vasubandhu. According to one tradition, he is counted as one of the ‘Two Supreme Ones’—great commentators on the Buddha’s teachings.",
        thumbnailCover: "/textCovers/gunaprabha-600.jpg",
        genre: "VINAYA",
        color: "bg-olive-700/70",
        darkColor: "dark:bg-olive-700/70",
    },
    {
        english_title: "Commentary on the Vinayasutra",
        tibetan_title: "འདུལ་བ་མདོ་རྩ་བའི་མཆན་འགྲེལ་པདམ་དཀར་པོའི་ལྗོན་ཤིང་།",
        author_tibetan: "",
        author_english: "Khenpo Shenga",
        short_description: "Khenpo Shenga is an important figure in the Rimé movement who revitalized study in much of Eastern Tibet by founding shedras and by revising the scholastic curriculum with an emphasis on the classical treatises of India.",
        thumbnailCover: "/textCovers/khenpo-shenga-600.jpg",
        genre: "VINAYA",
        color: "bg-cyan-800/60",
        darkColor: "dark:bg-cyan-800/60",
    },
    {
        english_title: "Compendium of Abhidharma",
        tibetan_title: "མངོན་པ་ཀུན་བཏུས།",
        author_tibetan: "",
        author_english: "Asanga",
        short_description: "The Compendium of Abhidharma is one of the 'Six Ornaments', the greatest Buddhist authorities of Ancient India. It is a complete and systematic account of the Abhidharma.",
        thumbnailCover: "/textCovers/asanga-600.jpg",
        genre: "ABHIDHARMA",
        color: "bg-olive-600/70",
        darkColor: "dark:bg-olive-600/70",
    },
    {
        english_title: "Commentary on the Compendium of Abhidharma",
        tibetan_title: "ཐེག་པ་ཆེན་པོའི་ཆོས་མངོན་པ་ཀུན་ལས་བཏུས་པའི་མཆན་འགྲེལ་ནོར་བུའི་མེ་ལོང་།",
        author_tibetan: "",
        author_english: "Khenpo Shenga",
        short_description: "Khenpo Shenga is an important figure in the Rimé movement who revitalized study in much of Eastern Tibet by founding shedras and by revising the scholastic curriculum with an emphasis on the classical treatises of India.",
        thumbnailCover: "/textCovers/khenpo-shenga-600.jpg",
        genre: "ABHIDHARMA",
        color: "bg-cyan-800/60",
        darkColor: "dark:bg-cyan-800/60",
    },
];

export const GalleryNyingmaStudies = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-brand-50 from-0% via-brand-100 via-30% to-brand-200 to-100% dark:bg-linear-to-b dark:from-brand-800/50 dark:from-0% dark:via-brand-800/30 dark:via-30% dark:to-brand-900/90 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                {/* <!-- Collection Gallery Header --> */}
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">Nyingma Studies</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Thirteen Major Treatises (<em>gzhung chen po bcu gsum</em>) formed the core of the curriculum in many scriptural colleges or commentarial schools (<em>bshad grwa</em>) of eastern Tibet, especially Śrī Siṃha college at Dzogchen Monastery.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-center">
                        <Button href="/canon-overviews/sutta-overview" color="secondary" size="md">
                            Overview
                        </Button>
                        <Button color="secondary" size="md" iconTrailing={Dataflow01} onClick={() => openCanonNavigator()} >
                            Nyingma Studies Outline
                        </Button>
                    </div>
                </div>

                {/* <!-- Tibetan Canon Section Gallery --> */}
                <GalleryTibetanStudiesTexts schoolType="Nyingma" />

                {/* <!-- Collection Gallery --> */}
                <Carousel.Root
                    className="hidden mt-4 md:mt-6"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4">
                        {nyigmaStudiesTexts.map((text) => (
                            <Carousel.Item
                                key={text.tibetan_title}
                                className="relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 drop-shadow-lg border-2 border-cyan-200 dark:border-cyan-800 rounded-xl overflow-hidden"
                            >
                                <Image alt={text.tibetan_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-[-1] cursor-grab object-cover rounded-sm" width={1000} height={1000} />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className={`relative ${text.color} ${text.darkColor} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                                        <h3 className="text-lg font-medium text-brand-200">{text.english_title}</h3>
                                        <p className="tibetan-text mt-1 text-lg">{text.tibetan_title}</p>
                                        <p className="mt-4 text-sm font-regular">{text.author_english}</p>
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
