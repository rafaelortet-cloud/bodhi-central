"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་དང་པོ།",
        author_tibetan: "སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ།",
        english_title: "The Ocean of Texts on Logic (Vol. 1)",
        author_english: "Chödrak Gyatso",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, which form the core of the curriculum in most Nyigma shedras.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-1-600.jpg",
        genre: "PRAMANA",
    },
    {
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་གཉིས་པ།",
        author_tibetan: "",
        english_title: "The Ocean of Texts on Logic (Vol. 2)",
        author_english: "Chödrak Gyatso",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, on which Khenpo Shenga provided commentaries.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-2-600.jpg",
        genre: "PRAMANA",
    },
    {
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་གསུམ་པ།",
        author_tibetan: "",
        english_title: "The Ocean of Texts on Logic (Vol. 3)",
        author_english: "Chödrak Gyatso",
        short_description: "The Vinayasutra consists of a root text on Vinaya and its auto-commentary. Gunaprabha was an Indian master of the Vinaya tradition born in the 7th century and a disciple of Vasubandhu. According to one tradition, he is counted as one of the ‘Two Supreme Ones’—great commentators on the Buddha’s teachings.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-3-600.jpg",
        genre: "PRAMANA",
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

export const CollectionGalleryKagyu = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-white to-red-50 dark:bg-linear-to-b dark:from-black dark:to-red-950 py-8 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Kagyu Studies</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Eight Kagyu commentaries recommended by the 16th Karmapa, Rangjung Rigpe Dorje, are essential for a complete understanding of sutra and tantra from the Kagyu school perspective.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">

                        <Button color="secondary" size="md">
                            Explore genres
                        </Button>
                    </div>
                </div>

                <Carousel.Root
                    className="mt-6 md:mt-8"
                    opts={{
                        align: "start",
                    }}
                >
                    <Carousel.Content overflowHidden={false} className="gap-4 pr-4 md:gap-4 md:pr-4">
                        {collectionTexts.map((text) => (
                            <Carousel.Item
                                key={text.tibetan_title}
                                className="relative flex aspect-[.5625] w-full max-w-64 flex-col justify-end md:aspect-[0.5625] md:max-w-74 shadow-xl border-2 border-red-200 rounded-xl overflow-hidden"
                            >
                                <img alt={text.tibetan_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-0 cursor-grab object-cover rounded-sm" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className="relative bg-red-900/50 px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm">
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
