"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "The Ocean of Texts on Logic (Vol. 1)",
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་དང་པོ།",
        author_tibetan: "སངས་རྒྱས་ཤཱཀྱ་ཐུབ་པ།",
        author_english: "Chödrak Gyatso",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, which form the core of the curriculum in most Nyigma shedras.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-1-600.jpg",
        genre: "PRAMANA",
    },
    {
        english_title: "The Ocean of Texts on Logic (Vol. 2)",
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་གཉིས་པ།",
        author_tibetan: "",
        author_english: "Chödrak Gyatso",
        short_description: "The Sutra of Individual Liberation on Vinaya is included among the so-called Thirteen great texts, on which Khenpo Shenga provided commentaries.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-2-600.jpg",
        genre: "PRAMANA",
    },
    {
        english_title: "The Ocean of Texts on Logic (Vol. 3)",
        tibetan_title: "ཚད་མ་ལེགས་པར་བཤད་པ་ཐམས་ཅད་ཀྱི་ཆུ་བོ་ཡོངས་སུ་འདུ་བ་རིག་པའི་གཞུང་ལུགས་ཀྱི་རྒྱ་མཚོ་ཞེས་བྱ་བའི་གླེགས་བམ་གསུམ་པ།",
        author_tibetan: "",
        author_english: "Chödrak Gyatso",
        short_description: "The Vinayasutra consists of a root text on Vinaya and its auto-commentary. Gunaprabha was an Indian master of the Vinaya tradition born in the 7th century and a disciple of Vasubandhu. According to one tradition, he is counted as one of the ‘Two Supreme Ones’—great commentators on the Buddha’s teachings.",
        thumbnailCover: "/textCovers/chodrak-gyatso-vol-3-600.jpg",
        genre: "PRAMANA",
    },
    {
        english_title: "Commentary on the Entrance to the Middle Way: The Chariot of the Dakpo Kagyü Siddhas (Vol. 1)",
        tibetan_title: "དབུ་མ་ལ་འཇུག་པའི་ཀར་ཊཱིཀ།",
        author_tibetan: "མི་བསྐྱོད་རྡོ་རྗེ།",
        author_english: "Mikyö Dorje",
        short_description: "Detailed commentary on Chandrakirti's Madhyamaka-vatara with extensive references to Nagarjuna's Mulamadhyamaka-vatara.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-1-600.jpg",
        genre: "MADHYAMAKA",
    },
    {
        english_title: "Commentary on the Entrance to the Middle Way: The Chariot of the Dakpo Kagyü Siddhas (Vol. 2)",
        tibetan_title: "དབུ་མ་ལ་འཇུག་པའི་ཀར་ཊཱིཀ།",
        author_tibetan: "མི་བསྐྱོད་རྡོ་རྗེ།",
        author_english: "Mikyö Dorje",
        short_description: "Detailed commentary on Chandrakirti's Madhyamaka-vatara with extensive references to Nagarjuna's Mulamadhyamaka-vatara.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-2-600.jpg",
        genre: "MADHYAMAKA",
    },
    {
        english_title: "Commentary on the Ornament of Clear Realization: A Concise Elucidation of the Abhisamayalamkara",
        tibetan_title: "མངོན་རྟོགས་རྒྱན་གྱི་འགྲེལ་པ་ཉུང་ངུ་རྣམ་གསལ།",
        author_tibetan: "དཀོན་མཆོག་ཡན་ལག།",
        author_english: "Konchok Yenlak",
        short_description: "Concised commentary on Maitraya-Asanga's Abhisamayalamkara.",
        thumbnailCover: "/textCovers/konchok-yenlak-600.jpg",
        genre: "PRAJNAPARAMITA",
    },
    {
        english_title: "Commentary on the Treasury of Abhidharma: The Essence of the Ocean of Abhidharma",
        tibetan_title: "ཆོས་མངོན་པ་མཛོད་ཀྱི་རྣམ་པར་བཤད་པ་ཆོས་མངོན་རྒྱ་མཚོའི་སྙིང་པོ་མཁྱེན་བརྩེའི་ཞལ་ལུང་གཞོན་ནུ་རྣམ་རོལ་ལེགས་བཤད་ཆོས་མིག་རྣམ་འབྱེད་གྲུབ་བདེའི་ཤིང་རྟ།",
        author_tibetan: "དབང་ཕྱུག་རྡོ་རྗེ།",
        author_english: "Wangchuk Dorje",
        short_description: "Concised commentary on Maitraya-Asanga's Abhisamayalamkara.",
        thumbnailCover: "/textCovers/wangchuk-dorje-600.jpg",
        genre: "ABHIDHARMA",
    },
    {
        english_title: "Commentary to the Vinaya: The Disk of the Sun (Vol. 1)",
        tibetan_title: "འདུལ་བའི་ལས་ཆོག་མཐོང་བས་དོན་འགྲུབ།",
        author_tibetan: "མི་བསྐྱོད་རྡོ་རྗེ།",
        author_english: "Mikyö Dorje",
        short_description: "Apart from the different types of vows, rules and regulations for monks and nuns, this text addresses also the issue of how the society of lay people may live together in a harmonious way, or, what could be called the vision of an enlightened society.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-1-600.jpg",
        genre: "VINAYA",
    },
    {
        english_title: "Commentary to the Vinaya: The Disk of the Sun (Vol. 2)",
        tibetan_title: "འདུལ་བའི་ལས་ཆོག་མཐོང་བས་དོན་འགྲུབ།",
        author_tibetan: "མི་བསྐྱོད་རྡོ་རྗེ།",
        author_english: "Mikyö Dorje",
        short_description: "Apart from the different types of vows, rules and regulations for monks and nuns, this text addresses also the issue of how the society of lay people may live together in a harmonious way, or, what could be called the vision of an enlightened society.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-2-600.jpg",
        genre: "VINAYA",
    },
    {
        english_title: "Commentary to the Vinaya: The Disk of the Sun (Vol. 3)",
        tibetan_title: "འདུལ་བའི་ལས་ཆོག་མཐོང་བས་དོན་འགྲུབ།",
        author_tibetan: "མི་བསྐྱོད་རྡོ་རྗེ།",
        author_english: "Mikyö Dorje",
        short_description: "Apart from the different types of vows, rules and regulations for monks and nuns, this text addresses also the issue of how the society of lay people may live together in a harmonious way, or, what could be called the vision of an enlightened society.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-3-600.jpg",
        genre: "VINAYA",
    },
    {
        english_title: "Commentary on the Uttaratantra Shastra: The Lion’s Roar of Irreversibility",
        tibetan_title: "ཐེག་པ་ཆེན་པོ་རྒྱུད་བླ་མའི་བསྟན་བཅོས་སྙིང་པོའི་དོན་མངོན་སུམ་ལམ་གྱི་བཤད་སྲོལ་དང་སྦྱར་བའི་རྟམ་པར་འགྲེལ་པ་ཕྱིར་མི་ལྡོག་པ་སེང་གེའི་ང་རོ་ཞེས་བྱ་བ་བཞུགས་སོ།",
        author_tibetan: "འཇམ་མགོན་ཀོང་སྤྲུལ།",
        author_english: "Jamgön Kongtrul",
        short_description: "This text is considered as the link between the sutra vehicle and the tantra vehicle in that it describes Buddha nature in detail, which is the basic ground of our minds and the underlying continuum of practice during all the phases of ground, path and fruition.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-3-600.jpg",
        genre: "UTTARATANTRA",
    },
    {
        english_title: "Illuminating the Profound Reality",
        tibetan_title: "ཟབ་མོ་ནང་དོན་གྱི་འགྲེལ་པ་ཟབ་དོན་སྣང་བྱེད།",
        author_tibetan: "འཇམ་མགོན་ཀོང་སྤྲུལ།",
        author_english: "Jamgön Kongtrul",
        short_description: "A commentary on the Profound Inner Meaning, a core treatise by Karmapa the Third, Rangjung Dorje. by Jamgon Kongtrul Lodro Taye, concerning the tantric physiology and the subtle body, astrology, and esoteric yoga.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-3-600.jpg",
        genre: "Vajrayana",
    },
    {
        english_title: "Commentary on the Hevajra Tantra: Elucidating the Secret of the Indestructible Vajra (Vol. 1)",
        tibetan_title: "དཔལ་དགྱེས་པ་རྡོ་རྗེ་རྒྱུད་ཀྱི་རྒྱལ་པོ་བརྟག་པ་གཉིས་པའི་ཚིག་དོན་རྣམ་པར་འགྲོལ་བ་གཞོམ་མེད་རྡོ་རྗེའི་གསང་བ་འབྱེད་པ།",
        author_tibetan: "འཇམ་མགོན་ཀོང་སྤྲུལ།",
        author_english: "Jamgön Kongtrul",
        short_description: "The main emphasis of this tantra is on the various types and expressions of conduct in the Vajrayana.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-3-600.jpg",
        genre: "Vajrayana",
    },
    {
        english_title: "Commentary on the Hevajra Tantra: Elucidating the Secret of the Indestructible Vajra (Vol. 2)",
        tibetan_title: "དཔལ་དགྱེས་པ་རྡོ་རྗེ་རྒྱུད་ཀྱི་རྒྱལ་པོ་བརྟག་པ་གཉིས་པའི་ཚིག་དོན་རྣམ་པར་འགྲོལ་བ་གཞོམ་མེད་རྡོ་རྗེའི་གསང་བ་འབྱེད་པ།",
        author_tibetan: "འཇམ་མགོན་ཀོང་སྤྲུལ།",
        author_english: "Jamgön Kongtrul",
        short_description: "The main emphasis of this tantra is on the various types and expressions of conduct in the Vajrayana.",
        thumbnailCover: "/textCovers/mikyo-dorje-vol-2-600.jpg",
        genre: "Vajrayana",
    },
];

export const CollectionGalleryKagyu = () => {
    return (
        <section className="overflow-hidden bg-linear-to-b from-pink-25 to-pink-50 dark:bg-linear-to-b dark:from-black dark:to-pink-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Kagyu Studies</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Eight Kagyu commentaries were recommended by Rangjung Rigpe Dorje, the 16th Karmapa, as the core curriculum for a complete understanding of Sutra and Tantra from the Kagyu school perspective.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">

                        <Button color="secondary" size="md">
                            Texts by genre
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
                                className="relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 shadow-xl border-2 border-pink-200 dark:border-pink-950 rounded-xl overflow-hidden"
                            >
                                <img alt={text.english_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full top-0 cursor-grab object-cover rounded-sm" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className="relative bg-pink-900/50 px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm">
                                        <h3 className="text-lg font-semibold text-brand-200">{text.english_title}</h3>
                                        <p className="tibetan-text mt-1 text-lg">{text.tibetan_title}</p>
                                        <p className="mt-4 text-sm font-medium">{text.author_english}</p>
                                        <p className="hidden mt-2 text-sm md:text-sm">{text.short_description}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <p className="text-xs font-normal text-brand-200 uppercase">{text.genre}</p>
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
