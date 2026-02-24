"use client";

import { ArrowLeft, ArrowRight, Dataflow01 } from "@untitledui/icons";
import { Carousel } from "@/components/application/carousel/carousel-base";
import { Button } from "@/components/base/buttons/button";
import { RoundButton } from "@/components/marketing/testimonials/round-button";

const collectionTexts = [
    {
        english_title: "Analysis of Rules for Monks (Vol. 1: Heavy oﬀenses, or garukāpatti)",
        pali_title: "Bhikku Vibhaṅga",
        author_pali: "Buddha Shakyamuni",
        canon: "Rules and Their Analysis",
        short_description: "The first part of the Vinaya Piṭaka is known as the Sutta-vibhaṅga, which can be rendered as the Analysis of the Sutta. In this context the word sutta does not mean a discourse of the Buddha, but refers to the Pātimokkha, the Monastic Code, which consists of the rules of conduct that form the kernel of the Sutta-vibhaṅga. The Sutta vibhaṅga, then, is the analysis of the rules of the Pātimokkha.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-vol-1-600.jpg",
        pitaka_section: "Sutta-vibhaṅga",
        section_numbers: "Bu Vb",
        color: "bg-cyan-950/70",
        darkColor: "dark:bg-cyan-900/70",
    },
    {
        english_title: "Analysis of Rules for Monks (Vol. 2: Light oﬀenses, or lahukāpatti)",
        pali_title: "Bhikku Vibhaṅga",
        author_pali: "Buddha Shakyamuni",
        canon: "Rules and Their Analysis",
        short_description: "This volume contains the second and last part of the Bhikkhu-vibhaṅga, “the Monks’ Analysis”. Whereas the first volume contains the heavy oﬀenses of pārājika and saṅghādisesa, also known as garukāpatti, the current volume contains the light oﬀenses, or lahukāpatti.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-vol-2-600.jpg",
        pitaka_section: "Sutta-vibhaṅga",
        section_numbers: "Bu Vb",
        color: "bg-cyan-950/70",
        darkColor: "dark:bg-cyan-900/70",
    },
    {
        english_title: "Analysis of Rules for Nuns",
        pali_title: "Bhikkhunī Vibhaṅga",
        author_pali: "Buddha Shakyamuni",
        canon: "Rules and Their Analysis",
        short_description: "This volume consists of the Bhikkhunī-vibhaṅga, the Nuns’ Pātimokkha rules and their analysis.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-600.jpg",
        pitaka_section: "Sutta-vibhaṅga",
        section_numbers: "Bi Pj 1 - Bi As 1-7",
        color: "bg-cyan-950/70",
        darkColor: "dark:bg-cyan-900/70",
    },
    {
        english_title: "The Great Division",
        pali_title: "Mahāvagga",
        author_pali: "Buddha Shakyamuni",
        canon: "Chapters on Legal Topics",
        short_description: "The Great Division is the first of the Khandhakas, and focuses mostly on the main regulations and ceremonies of the Sangha.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-xl-600.jpg",
        pitaka_section: "KHANDHAKAS",
        section_numbers: "KD 1-10",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-900/70",
    },
    {
        english_title: "The Lesser Division",
        pali_title: "Cūḷavagga",
        author_pali: "Buddha Shakyamuni",
        canon: "Chapters on Legal Topics",
        short_description: "The Lesser Division is the second of the Khandhakas, and is more concerned with lesser regulations and the working of details.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-xl-600.jpg",
        pitaka_section: "KHANDHAKAS",
        section_numbers: "KD 11-22",
        color: "bg-fuchsia-950/70",
        darkColor: "dark:bg-fuchsia-900/70",
    },
    {
        english_title: "The Compendium",
        pali_title: "Parivāra",
        author_pali: "Buddha Shakyamuni",
        canon: "The Compendium",
        short_description: "The Parivāra, “the Compendium”, is a technical analysis of the content of the Suttavibhaṅga and the Khandhakas. It summarizes and distils the essence of the Vinaya, leaving out all narratives and stories. The Parivāra is unique to the Theravada school and it is probable that it was compiled in the sectarian period. Its manner of analysis shares certain characteristics with the Abhidhamma, such as expanding and filling in schemes of classification not given in full detail in the other canonical texts.",
        thumbnailCover: "/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg",
        pitaka_section: "PARIVĀRA",
        section_numbers: "Pvr 1-21",
        color: "bg-red-900/70",
        darkColor: "dark:bg-red-900/70",
    },
];

export const CollectionGalleryVinayaPitaka = () => {
    return (
        <section className="relative overflow-hidden -mt-28 z-100 bg-linear-to-b from-orange-25/0 from-0% via-orange-50 via-9% to-orange-100 to-100% dark:bg-linear-to-b dark:from-gray-950/0 dark:from-0% dark:via-gray-950 dark:via-9% dark:to-orange-950 py-6 md:py-10">
            <div className="mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col justify-between md:flex-row">
                    <div className="flex flex-1 flex-col max-w-280 pr-4 md:pr-24">
                        <h2 className="text-display-md text-primary md:text-display-lg">Vinaya Piṭaka</h2>
                        <p className="mt-1 text-base text-tertiary md:mt-2 md:text-lg">
                            The Vinaya Piṭaka, “the Basket of Monastic Law”, contains the rules that are binding on monastics and the regulations that apply to monastic communities.
                        </p>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 self-stretch md:mt-0 md:flex-row-reverse md:justify-center md:self-start">
                        <Button color="secondary" size="xl" iconLeading={Dataflow01}>
                            Vinayapiṭaka Outline
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
                                        <p className="mt-2 text-sm md:text-regular">{text.short_description}</p>
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
