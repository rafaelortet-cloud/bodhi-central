import Image from 'next/image';
import { CollectionGalleryNyingma } from '@/components/marketing/collection-sections/collection-gallery-nyingma';
import { CollectionGalleryKagyu } from '@/components/marketing/collection-sections/collection-gallery-kagyu';

export default function TibetanSchoolsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/lineage-collections-wallpaper.jpg)] bg-cover">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/75 dark:bg-black/80 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-16 pb-8 px-4 md:px-6">
                        <h1 className="text-display-xl font-light">Tibetan Schools</h1>
                        <p className="mt-2 text-center text-lg text-tertiary">The curricula of the four main lineages of Tibetan Buddhism.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center p-4 bg-white/65 dark:bg-black/40 rounded-t-full shadow-lg border-b-4 border-yellow-800/40">
                                <Image src="/collections_thumbnails_gelug.jpg" alt="Gelug" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs text-primary font-light text-center py-4">Gelug Studies</h2>
                                <p className="pb-2 text-md text-tertiary text-center">Je Tsongkhapa standardized the Tibetan Buddhist curriculum into major topics or genres, and this model was later adopted by many other schools.</p>
                            </div>
                            <div className="col-start-2 md:col-start-4 flex flex-col items-center justify-center p-4 bg-white/65 dark:bg-black/40 rounded-t-full shadow-lg border-b-4 border-green-800/40">
                                <Image src="/collections_thumbnails_sakya.jpg" alt="Sakya" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs text-primary font-light text-center py-4">Sakya Studies</h2>
                                <p className="pb-2 text-md text-tertiary text-center">The Eighteen Treatises of the Sakya school were published in 2015 by the International Buddhist Academy with Sachen International.</p>
                            </div>
                            <div className="col-start-1 md:col-start-2 h-auto md:-mt-40 flex flex-col items-center justify-center p-4 bg-white/65 dark:bg-black/40 rounded-t-full shadow-lg border-b-4 border-blue-800/40">
                                <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs text-primary font-light text-center py-4">Nyingma Studies</h2>
                                <p className="pb-2 text-md text-tertiary text-center">In the Nyingma school, thirteen classics of Indian Mahayana philosophy are taught at Tibetan centers of education throughout Asia and the West.</p>
                            </div>
                            <div className="col-start-2 md:col-start-3 h-auto md:-mt-40 flex flex-col items-center justify-center p-4 bg-white/65 dark:bg-black/40 rounded-t-full shadow-lg border-b-4 border-red-800/40">
                                <Image src="/collections_thumbnails_kagyu.jpg" alt="Kagyu" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs text-primary font-light text-center py-4">Kagyu Studies</h2>
                                <p className="pb-2 text-md text-tertiary text-center">The Eight Great Kagyu Commentaries are essential for a complete understanding of Sutra and Tantra from the Kagyu school perspective.</p>
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
