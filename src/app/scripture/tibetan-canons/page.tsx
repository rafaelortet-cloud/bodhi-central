import Image from 'next/image';
import { CollectionGalleryKangyurSections } from '@/components/marketing/collection-sections/collection-gallery-kangyur-sections';
import { CollectionGalleryTengyurSections } from '@/components/marketing/collection-sections/collection-gallery-tengyur-sections';
import { Button } from '@/components/base/buttons/button';

export default function TibetanCanonsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/tibetan-buddhist-library-01.jpg)] bg-position-bottom bg-cover bg-center bg-no-repeat pb-40">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/55 dark:bg-black/55 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-20 pb-12 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Tibetan Canons</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">The Tibetan Buddhist scriptures and commentaries.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-4xl px-4 pb-20 md:px-6 grid grid-cols-2 md:grid-cols-2 gap-16 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/35 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/pecha-wrapped-on-cloth-600.webp" alt="Sakya" width={100} height={100} className="hidden drop-shadow-lg" />
                                    <h2 className="text-display-sm text-primary text-center py-2">The Kangyur</h2>
                                    <p className="pb-4 text-md font-semibold text-tertiary text-center text-balance">The Kangyur is the collection of the translated words of the Buddha in Tibetan.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <div className="flex flex-col items-center justify-center bg-linear-to-b from-white/0 via-white/35 via-55% to-white/0 dark:bg-linear-to-b dark:from-black/10 dark:via-black/55 dark:via-55% dark:to-black/10 p-4 rounded-[7rem]">
                                    <Image src="/pecha-wrapped-on-cloth-600.webp" alt="Sakya" width={100} height={100} className="hidden drop-shadow-lg" />
                                    <h2 className="text-display-sm text-primary text-center py-2">The Tengyur</h2>
                                    <p className="pb-4 text-md font-semibold text-tertiary text-center text-balance">The Tengyur is the collection of the translated Buddhist treatises in Tibetan.</p>
                                    <Button color="secondary" size="sm">
                                        Overview
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <CollectionGalleryKangyurSections />
            <CollectionGalleryTengyurSections />
        </>
    );
}
