import { TabList, Tabs } from "@/components/application/tabs/tabs";

const tabs = [
    {
        id: "legal",
        label: "Legal version",
    },
    {
        id: "simple",
        label: "Simple version",
    },
];

export const ContentSimple = () => {
    return (
        <Tabs keyboardActivation="manual" className="bg-primary">
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Current as of 4 Jan 2026</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Project Information</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                            Welcome to Bodhi Central. A public hub of dharma's teachings for awakening.
                        </p>

                        <TabList type="button-border" size="md" items={tabs} className="mt-8 w-full md:mt-12 md:w-auto [&_[role=tab]]:flex-1" />
                    </div>
                </div>
            </section>

            <main className="mx-auto max-w-container px-4 pb-24 md:px-8">
                <div className="mx-auto prose md:prose-lg md:max-w-180">
                    <p>
                        This initiative is a web application offering Buddhist traditional scriptures and learning experiences, embracing modernity and creativity with practical solutions for students.
                    </p>
                    <p>
                        Its core mission is twofold: first, to provide support to the living transmissions of scripture passed down by our Buddhist teachers; and second, to share open digital environments for students to access specific genres of the Tengyur catalog and their corresponding Tibetan commentaries.
                    </p>
                    <p>
                        This Welcome section informs about the content and auprovides information on the content and audience, motivational considerations, user experience propositions, and the 2022 roadmap of the initiative.
                    </p>

                    <h2>Content and Audience</h2>

                    <p>
                        Among the numerous texts that conform the Buddhist scriptural collections, the content gathered here focuses primarily on the Mahayana studies, Indian Buddhist texts written down during the Golden Age of Buddhist philosophy in India. Alongside, students will find texts from the major commentarial traditions on Indian texts that developed in Tibet from the 8th century onwards.
                    </p>

                    <p>
                        The commentaries presented here correspond to the curriculums at Tibetan monastic colleges (shedras), sets of texts initially standardized by Je Tsongkhapa (around 14th century) into major topics such as Prajnapāramitās, Madhyamaka, Pramana, Abhidharma, and Vinaya. Subsequently, several standardizations of study texts were also developed by other major Tibetan schools, each gathering their own commentaries under specific classifications of genres or topics.
                    </p>
                    <p>
                        This is an invitation to meet the great masters Nagarjuna, Aryadeva, Shantideva, Shantarakshita, Chandrakirti, Asanga, Vasubandhu, Dignaga, Dharmakirti, and many others, to read and study their seminal works in light of elucidatory commentaries composed by Tibetan masters from the outstanding traditions arisen from the Roof of the World.
                    </p>
                    <p>
                        It aims to be an offering to students of Buddhism longing for deepening readership, understanding, and contemplation of some of the most transformational Mahayana texts one could possibly study in a lifetime.
                    </p>
                    <p>
                        While hoping that this catalog might be useful, it should be emphasized the vital importance of receiving direct teachings from qualified teachers who can transmit the profound meaning of these texts. May this experiment contribute to the ongoing conversations and efforts on the Buddhist digital sphere to support living transmissions of scripture.
                    </p>

                    <h2>Three Considerations</h2>

                    <h3>Encrypted Yet Accessible</h3>

                    <p>
                        The first consideration here is a reflection on the universal naked wisdom to be revealed in Buddha's teachings encompassing a profound and compassionate message to humanity.
                    </p>

                    <p>
                        For more than 2.500 years, Buddha's teachings have survived thanks to uninterrupted streams of realizations carried out by many accomplished masters from a myriad of Buddhist traditions around the world. Preserved in various forms over time, these teachings are been passed down to us not without the foreseen contingencies for changes in the language and cultures, throughout centuries of uncertainties and opportunities.
                    </p>
                    <p>
                        In contemplating the becoming world it emerges the aspiration for these teachings to be always present thanks to the activity of unwavering bodhisattvas and our striving for awakening. Offsprings of the Victorious One in consonance continue decrypting and applying the teachings in meaningful ways, making them accessible and relevant to students and practitioners, and to the world in general without hesitation.
                    </p>

                    <h3>Many Traditions, One Open Goal</h3>

                    <p>
                        The processes of interpretation, validation, and assimilation of the teachings have given rise to an entropic development of numerous doctrines and traditions. The resulting diversification of Buddha's teachings is a testament of their adaptability at core, while at present facing the paradoxical possibility for these teachings to become more irrelevant to a world turning increasingly endangered, and deeply disturbed.
                    </p>

                    <h3>How long do we keep your information?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How do we keep your information safe?</h3>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h2>What are your privacy rights?</h2>

                    <p>
                        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst
                        ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
                    </p>

                    <h3>How can you contact us about this policy?</h3>

                    <p>
                        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
                        rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa
                        erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                    </p>

                    <ol>
                        <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                        <li>Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.</li>
                        <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
                    </ol>
                </div>
            </main>
        </Tabs>
    );
};
