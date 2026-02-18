"use client";

import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "Praise",
        tibetan_title: "བསྟོད་ཚོགས།",
        sanskrit_title: "Stotra / Stava",
        author_english: "",
        canon: "Tengyur",
        short_description: "Works focusing primarily on the monastic rules and their origins, but also containing a wealth of historical, biographical, and cultural material.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Praise",
        volumes: "Vol. 1",
        section_numbers: "Toh 1109-1179",
        color: "bg-gray-900/70",
        darkColor: "dark:bg-gray-900/70",
    },
    {
        english_title: "Tantra",
        tibetan_title: "རྒྱུད།",
        sanskrit_title: "Tantra",
        author_english: "",
        canon: "Tengyur",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Tantra",
        volumes: "Vols. 2-xx",
        section_numbers: "Toh 1180-3785",
        color: "bg-red-900/75",
        darkColor: "dark:bg-red-900/75",
    },
    {
        english_title: "Perfection of Wisdom Commentaries",
        tibetan_title: "ཤེར་ཕྱིན།",
        sanskrit_title: "Prajñāpāramitā",
        author_english: "Buddha Shakyamuni",
        canon: "Tengyur",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Sūtra & Philosophy",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 3786-3823",
        color: "bg-yellow-900/75",
        darkColor: "dark:bg-yellow-900/75",
    },
    {
        english_title: "Middle Way",
        tibetan_title: "དབུ་མ།",
        sanskrit_title: "Madhyamaka",
        author_english: "",
        canon: "Tengyur",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Sūtra & Philosophy",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 3824-3980",
        color: "bg-yellow-900/75",
        darkColor: "dark:bg-yellow-900/75",
    },
    {
        english_title: "Sūtra Commentaries",
        tibetan_title: "མདོ་འགྲེལ།",
        sanskrit_title: "Sūtrānta",
        author_english: "The Indian commentaries on a number of doctrinally important sūtras (other than those on the Perfection of Wisdom).",
        canon: "Tengyur",
        short_description: "",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Sūtra & Philosophy",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 3981-4019",
        color: "bg-yellow-900/75",
        darkColor: "dark:bg-yellow-900/75",
    },
    {
        english_title: "Mind Only",
        tibetan_title: "སེམས་ཙམ།",
        sanskrit_title: "Cittamātra",
        author_english: "",
        canon: "Tengyur",
        short_description: "The treatises by Maitreya, Asaṅga, Vasubandhu, and others on Yogācāra-Cittamātra themes, buddha-nature, and other topics.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Sūtra & Philosophy",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4020-4085",
        color: "bg-yellow-900/75",
        darkColor: "dark:bg-yellow-900/75",
    },
    {
        english_title: "Abhidharma",
        tibetan_title: "མངོན་པ།",
        sanskrit_title: "Abhidharma",
        author_english: "",
        canon: "Tengyur",
        short_description: "Forma, scholastic treatises including part of the early Sarvāstivādin Abhidharma pitaka and later commentaries.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Abhidharma",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4086-4103",
        color: "bg-yellow-900/75",
        darkColor: "dark:bg-yellow-900/75",
    },
    {
        english_title: "Discipline Commentaries",
        tibetan_title: "དུས་འཁོར་འགྲེལ་བཤད།",
        sanskrit_title: "Vinaya",
        author_english: "",
        canon: "Tengyur",
        short_description: "Commentaries and treatises on the canonical Vinaya texts.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Vinaya",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4104-4149",
        color: "bg-blue-950/75",
        darkColor: "dark:bg-blue-950/75",
    },
    {
        english_title: "Buddha's Previous Lives",
        tibetan_title: "སྐྱེས་རབས།",
        sanskrit_title: "Jātaka",
        author_english: "",
        canon: "Tengyur",
        short_description: "The literature recounting stories of the Buddha’s previous lives.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Jātaka",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4150-4157",
        color: "bg-gray-900/70",
        darkColor: "dark:bg-gray-900/70",
    },
    {
        english_title: "Epistles",
        tibetan_title: "སྤྲིང་ཡིག",
        sanskrit_title: "Lekha",
        author_english: "",
        canon: "Tengyur",
        short_description: "Advice from the great Indian Buddhist masters in the form of letters written to rulers and others.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Lekha",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4158-4202",
        color: "bg-gray-900/70",
        darkColor: "dark:bg-gray-900/70",
    },
    {
        english_title: "Valid Cognition",
        tibetan_title: "ཚད་མ།",
        sanskrit_title: "Pramāṇa",
        author_english: "",
        canon: "Tengyur",
        short_description: "The texts on Indian Buddhist epistemology, logic, and reasoning by Dignāga, Dharmakīrti, and others",
        thumbnailCover: "/cognitive-mandala-02.webp",
        canon_division: "Pramāṇa",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4203-4268",
        color: "bg-gray-900/70",
        darkColor: "dark:bg-gray-900/70",
    },
    {
        english_title: "Linguistics",
        tibetan_title: "སྒྲ་མདོ།",
        sanskrit_title: "Śabdavidyā",
        author_english: "",
        canon: "Tengyur",
        short_description: "Treatises on language, Sanskrit grammar, composition, rhetoric, poetics, lexicons, etc.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Traditional Sciences",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4269-4305",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-950/70",
    },
    {
        english_title: "Science of Medicine",
        tibetan_title: "གསོ་བ་རིག་པ།",
        sanskrit_title: "Cikitsāvidyā",
        author_english: "",
        canon: "Tengyur",
        short_description: "Secular Indian treatises on Āyurvedic medicine and pharmaceutics.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Traditional Sciences",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4306-4312",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-950/70",
    },
    {
        english_title: "Arts",
        tibetan_title: "བཟོ་རིག་པ།",
        sanskrit_title: "Śilpavidyā",
        author_english: "",
        canon: "Tengyur",
        short_description: "Indian treatises on the graphic and manual arts, including iconometrics.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Traditional Sciences",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4313-4327",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-950/70",
    },
    {
        english_title: "Science of Secular Ethics",
        tibetan_title: "ཐུན་མོང་བ་ལུགས་ཀྱི་བསྟན་བཅོས།",
        sanskrit_title: "Nītiśāstra",
        author_english: "",
        canon: "Tengyur",
        short_description: "Indian treatises on ethics and worldly wisdom.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Traditional Sciences",
        volumes: "Vols. xx-xx",
        section_numbers: "Toh 4328-4345",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-950/70",
    },
    {
        english_title: "Miscellaneous Texts",
        tibetan_title: "བསྟན་བཅོས་སྣ་ཚོགས།",
        sanskrit_title: "Viśvavidyā",
        author_english: "",
        canon: "Tengyur",
        short_description: "A collection of miscellaneous Indian texts that do not fit into any of the other categories such as early Tibetan scholars' works, newly inserted various texts on sūtra, general sciences, dedication and aspiration prayers.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-outline-600.png",
        canon_division: "Traditional Sciences",
        volumes: "Vols. xx-212",
        section_numbers: "Toh 4346-4464",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-950/70",
    },
    {
        english_title: "Degé Tengyur Catalog",
        tibetan_title: "བསྟན་འགྱུར་དཀར་ཆག",
        sanskrit_title: "Sūcilipi",
        author_english: "",
        canon: "Tengyur",
        short_description: "Historical and descriptive catalogue of the Degé Tengyur by its 18th century editor Zhuchen Tsültrim Rinchen.",
        thumbnailCover: "/pecha-wrapped-on-cloth-600.webp",
        canon_division: "Catalog",
        volumes: "Vol. 213",
        section_numbers: "Toh 4569",
        color: "bg-gray-950/70",
        darkColor: "dark:bg-gray-950/70",
    },
];

export const CollectionGalleryTengyurSections = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-mist-50/0 from-0% via-mist-50 via-50% to-mist-200 to-100% dark:bg-linear-to-b dark:from-mist-800 dark:from-0% dark:via-mist-800 dark:via-50% dark:to-mist-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Tengyur Divisions</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Tengyur is the collection of the Buddhist commentaries in Tibetan. It contains some 3,300 works in 213 volumes, all translations into Tibetan of the Indian commentaries on the words of the Buddha. These ten divisions follow the Degé Tengyur digital edition by Adarshah.org.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="md">
                            Degé Tengyur Outline
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
                                className="relative flex aspect-[.5625] w-full max-w-56 flex-col justify-end md:aspect-[.5625] md:max-w-68 bg-radial-[at_50%_35%] from-mist-50 from-0% via-mist-100 via-30% to-mist-400 to-75% dark:from-mist-50 dark:from-0% dark:via-mist-100 dark:via-30% dark:to-mist-500 dark:to-75% drop-shadow-lg border-2 border-gray-300 dark:border-gray-900 rounded-4xl overflow-hidden"
                            >
                                <img alt={text.english_title} src={text.thumbnailCover} className="absolute inset-0 z-0 size-full cursor-grab object-contain rounded-sm mix-blend-luminosity" />

                                <div className="z-10 bg-linear-to-t from-black/30 to-black/0 pt-16 md:pt-20 lg:pt-24 rounded-b-sm">
                                    <div className={`relative ${text.color} ${text.darkColor} px-5 pt-5 pb-4 text-white backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-alpha-white/30 md:px-5 rounded-b-sm`}>
                                        <h3 className="text-xl text-brand-200">{text.english_title}</h3>
                                        <p className="font-tibetan mt-1 text-2xl">{text.tibetan_title}</p>
                                        <p className="mt-1 text-md">{text.sanskrit_title}</p>
                                        <p className="mt-4 text-xs">{text.canon}</p>
                                        <p className="hidden mt-2 text-sm md:text-sm">{text.short_description}</p>
                                        <div className="flex gap-2 mt-1 justify-between items-top">
                                            <div className="flex flex-col gap-0">
                                                <p className="text-sm text-brand-200 uppercase">{text.canon_division}</p>
                                                <p className="text-xs text-brand-200">{text.volumes}  ⸺ {text.section_numbers}</p>
                                            </div>
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
