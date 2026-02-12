import Image from 'next/image';
import { CollectionGalleryNyingma } from '@/components/marketing/collection-sections/collection-gallery-nyingma';
import { CollectionGalleryKagyu } from '@/components/marketing/collection-sections/collection-gallery-kagyu';

export default function TibetanSchoolsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/himalayan-scenery-02.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/62 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-12 pb-2 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Tibetan Studies</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">The curricula of the four main lineages of Tibetan Buddhism.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_gelug.jpg" alt="Gelug" width={190} height={190} className="tibetanStudiesCard_img" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-black/40 p-2 border-t-4 border-yellow-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Gelug</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Standardized Tibetan studies into five genres: Pramana, Prajnaparamita, Madhyamaka,
                                        Abhidharma, and Vinaya.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-4 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_sakya.jpg" alt="Sakya" width={190} height={190} className="tibetanStudiesCard_img" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-black/40  p-2 border-t-4 border-green-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Sakya</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The Eighteen Treatises of the Sakya studies published by the International Buddhist Academy with Sachen International.</p>
                                </div>
                            </div>
                            <div className="col-start-1 md:col-start-2 h-auto md:-mt-60 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma" width={190} height={190} className="tibetanStudiesCard_img rounded-full" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-black/40 p-2 border-t-4 border-cyan-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Nyingma</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The Thirteen Great Indian Treatises on Vinaya, Abhidharma, the Profound View, and Vast Conduct.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-3 h-auto md:-mt-60 flex flex-col items-center justify-center gap-0">
                                <div className="tibetanStudiesCard_wrapper">
                                    <Image src="/collections_thumbnails_kagyu.jpg" alt="Kagyu" width={190} height={190} className="tibetanStudiesCard_img rounded-full" />
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-black/40 p-2 border-t-4 border-pink-700/50 rounded-t-[7rem] rounded-b-3xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Kagyu</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Eight Kagyu treatises on Pramana, Madhyamaka, Prajnaparamita, Abhidharma, Vinaya, and Vajrayana.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <CollectionGalleryNyingma />
            <CollectionGalleryKagyu />
        </>
    );
}
