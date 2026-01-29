import Image from 'next/image';
import { CollectionGalleryNyingma } from '@/components/marketing/collection-sections/collection-gallery-nyingma';
import { CollectionGalleryKagyu } from '@/components/marketing/collection-sections/collection-gallery-kagyu';

export default function TibetanSchoolsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/paper-like-buddha-in-garden-world-002.jpg)] bg-cover bg-center bg-top bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/80 dark:bg-black/70 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-16 pb-2 px-4 md:px-6">
                        <h1 className="text-display-xl">Tibetan Schools</h1>
                        <p className="mt-2 text-center text-lg text-tertiary">The curricula of the four main lineages of Tibetan Buddhism.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <Image src="/collections_thumbnails_gelug.jpg" alt="Gelug" width={190} height={190} className="rounded-full drop-shadow-xl" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-2 border-b-2 border-yellow-800/40 rounded-t-4xl rounded-b-4xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Gelug Studies</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Standardized Tibetan studies into five genres: Pramana, Prajnaparamita, Madhyamika,
                                        Abhidharma, and Vinaya.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-4 flex flex-col items-center justify-center gap-4">
                                <Image src="/collections_thumbnails_sakya.jpg" alt="Sakya" width={190} height={190} className="rounded-full drop-shadow-xl" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40  p-2 border-t-2 border-b-2 border-green-800/40 rounded-t-4xl rounded-b-4xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Sakya Studies</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Eighteen Treatises of the Sakya school published by the International Buddhist Academy with Sachen International.</p>
                                </div>
                            </div>
                            <div className="col-start-1 md:col-start-2 h-auto md:-mt-40 flex flex-col items-center justify-center gap-4">
                                <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma" width={190} height={190} className="rounded-full drop-shadow-xl" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-2 border-b-2 border-cyan-800/40 rounded-t-4xl rounded-b-4xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Nyingma Studies</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Thirteen Indian Mahayana texts on Vinaya, Abhidharma, the Profound View, and Vast Conduct.</p>
                                </div>
                            </div>
                            <div className="col-start-2 md:col-start-3 h-auto md:-mt-40 flex flex-col items-center justify-center gap-4">
                                <Image src="/collections_thumbnails_kagyu.jpg" alt="Kagyu" width={190} height={190} className="rounded-full drop-shadow-xl" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-2 border-t-2 border-b-2 border-pink-800/40 rounded-t-4xl rounded-b-4xl">
                                    <h2 className="text-display-sm text-primary text-center py-2">Kagyu Studies</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">Eight Kagyu treatises on Pramana, Madhyamika, Prajnaparamita, Abhidharma, Vinaya, and Vajrayana.</p>
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
