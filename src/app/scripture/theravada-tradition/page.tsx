"use client";

import Image from 'next/image';
import { CollectionGalleryVinayaPitaka } from "@/components/marketing/collection-sections/collection-gallery-vinaya-pitaka";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";
import { CollectionGalleryAbhidhammaPitaka } from "@/components/marketing/collection-sections/collection-gallery-abhidhamma-pitaka";

export default function TheravadaTraditionPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/jetavanaramaya-scenery-01.jpg)] bg-cover bg-center bg-no-repeat">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/62 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-6">
                        <h1 className="text-display-md text-brand-800 dark:text-brand-200 md:text-display-lg lg:text-display-xl">Theravada Tradition</h1>
                        <p className="text-center text-lg font-semibold text-tertiary">The Pali Canon, the earliest Buddhist scriptures.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-20 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center gap-0">
                                <Image src="/pecha-wrapped-on-cloth-600.webp" alt="Gelug" width={240} height={240} className="rounded-t-[4.5rem]" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-3 border-t-2 border-brand-200 rounded-t-[3rem] rounded-b-[1rem]">
                                    <h2 className="text-display-sm text-primary text-center py-2">Vinaya Piṭaka</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The first basket of the Pali Canon, containing the rules and regulations for monks and nuns.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <Image src="/pecha-wrapped-on-cloth-600.webp" alt="Sakya" width={240} height={240} className="rounded-t-[4.5rem]" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40  p-3 border-t-2 border-brand-200 rounded-t-[3rem] rounded-b-[1rem]">
                                    <h2 className="text-display-sm text-primary text-center py-2">Sutta Piṭaka</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The second basket of the Pali Canon, containing the discourses of the Buddha.</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-0">
                                <Image src="/pecha-wrapped-on-cloth-600.webp" alt="Sakya" width={240} height={240} className="rounded-t-[4.5rem]" />
                                <div className="flex flex-col items-center justify-center bg-white/65 dark:bg-black/40 p-3 border-t-2 border-brand-200 rounded-t-[3rem] rounded-b-[1rem]">
                                    <h2 className="text-display-sm text-primary text-center py-2">Abhidhamma Piṭaka</h2>
                                    <p className="pb-2 text-md text-tertiary text-center">The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section>
                <CollectionGalleryVinayaPitaka />
                <CollectionGallerySuttaPitaka />
                <CollectionGalleryAbhidhammaPitaka />
            </section>
        </>
    );
}
