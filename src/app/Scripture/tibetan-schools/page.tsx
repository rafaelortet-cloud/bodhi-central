import Image from 'next/image';

export default function TibetanSchoolsPage() {
    return (
        <>
            <div className="relative mx-auto bg-[url(/lineage-collections-wallpaper.jpg)] bg-cover">
                {/* Overlay layer for easy customization of color/transparency */}
                <div className="absolute inset-0 bg-white/75 dark:bg-black/80 z-0" aria-hidden="true" />

                {/* Content layer */}
                <div className="relative z-10">
                    <section className="flex flex-col items-center justify-center py-16 px-4 md:px-6">
                        <h1 className="text-4xl font-semibold">Tibetan Schools</h1>
                        <p className="mt-2 text-center text-md text-tertiary">The curricula of the four main lineages of Tibetan Buddhism.</p>
                    </section>
                    <section>
                        <div className="mx-auto max-w-container px-4 pb-24 md:px-6 grid grid-cols-4 gap-8 items-start">
                            <div className="flex flex-col items-center justify-center px-4">
                                <Image src="/collections_thumbnails_gelug.jpg" alt="Gelug" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Gelug Studies</h2>
                                <div className="w-1/2 h-2 bg-orange-800 my-4 rounded-full">

                                </div>
                                <p className="text-md text-tertiary text-center">Je Tsongkhapa standardized the Tibetan Buddhist curriculum into five major topics, and this was later adopted by many other schools. The five topics are: Prajnapāramitās, Madhyamaka, Pramana, Abhidharma, and Vinaya.</p>
                            </div>
                            <div className="col-start-4 flex flex-col items-center justify-center px-4">
                                <Image src="/collections_thumbnails_sakya.jpg" alt="Sakya" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Sakya Studies</h2>
                                <div className="w-1/2 h-2 bg-orange-800 my-4 rounded-full">

                                </div>
                                <p className="mt-2 text-md text-tertiary text-center">The texts included here were published in digital format in 2015 by the International Buddhist Academy in conjunction with Sachen International of Lama Guru.</p>
                            </div>
                            <div className="col-start-2 h-auto -mt-56 flex flex-col items-center justify-center px-4">
                                <Image src="/collections_thumbnails_nyingma.jpg" alt="Nyingma" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Nyingma Studies</h2>
                                <div className="w-1/2 h-2 bg-orange-800 my-4 rounded-full">
                                </div>
                                <p className="text-md text-tertiary text-center">In the Nyingma tradition, thirteen classics of Indian Mahayana philosophy are taught at Tibetan centers of education throughout Asia and the West. These texts cover the subjects of Vinaya, Abhidharma, Yogachara, Madhyamaka, and the path of the Bodhisattva.</p>
                            </div>
                            <div className="col-start-3 h-auto -mt-56 flex flex-col items-center justify-center px-4">
                                <Image src="/collections_thumbnails_kagyu.jpg" alt="Kagyu" width={150} height={150} className="rounded-full" />
                                <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Kagyu Studies</h2>

                                <div className="w-1/2 h-2 bg-orange-800 my-4 rounded-full">

                                </div>
                                <p className="text-md text-tertiary text-center">Eight Kagyu commentaries were recommended by the 16th Karmapa, Rangjung Rigpe Dorje, as the basis for study in the shedra at Rumtek Monastery. These eight treatises cover the subjects of Vinaya, Abhidharma, Epistemology, Madhyamaka, and Vajrayana.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
