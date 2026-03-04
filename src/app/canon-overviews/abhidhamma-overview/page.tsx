"use client";

import type { ComponentPropsWithRef, FC } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy01, Link01, Dataflow01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge, type BadgeColor } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { isReactComponent } from "@/utils/is-react-component";
import { CollectionGallerySuttaPitaka } from "@/components/marketing/collection-sections/collection-gallery-sutta-pitaka";




const ContentSplitImage01 = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="bg-primary">
            <div className="relative mx-auto flex max-w-container flex-col items-center px-4 py-16 md:flex-row md:px-8 md:pt-16 md:pb-24">
                <div className="flex max-w-160 flex-col items-start md:absolute">
                    <BadgeGroup size="md" addonText="Pali Canon Overviews" color="brand" theme="light" className="pr-3" iconTrailing={null}>
                        18 min read
                    </BadgeGroup>
                    <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-xl text-balance">Abhidhamma: a systematic analysis of the doctrine</h1>
                    <p className="mt-4 max-w-140 text-lg text-tertiary md:mt-6 md:text-xl">
                        The third basket of the Pali Canon, containing the higher teachings and philosophical analysis.
                    </p>

                    <div className="mt-8 flex items-center gap-3 md:mt-12">
                        <img
                            src="/collections_thumbnails_sakya.jpg"
                            className="size-12 rounded-full object-cover"
                            alt="Natali Craig"
                        />
                        <div>
                            <p className="text-md font-semibold text-primary">Bhikkhu Sujato</p>
                            <p className="text-md text-tertiary">Published by Sutta Central</p>
                        </div>
                    </div>
                </div>

                <img
                    className="mt-16 h-100 w-full object-cover object-top rounded-3xl md:mt-0 md:ml-auto md:h-180 md:w-140 md:max-w-[50vw]"
                    src="/textCovers/buddha-sakyamuni-zoom-in-2xl-600.jpg"
                    alt="Buddha Sakyamuni with two disciples"
                />
                {/* Background Image - Rainbow Light Accent */}
                <img
                    alt="Light Accent"
                    aria-hidden="true"
                    src="https://www.untitledui.com/marketing/light-accent.webp"
                    className="absolute z-20 -right-1/3 bottom-1/2 max-w-160 opacity-50 dark:opacity-40 mix-blend-multiple md:right-8 md:-bottom-1/6 md:max-w-7xl mask-b-from-90% mask-b-to-100% scale-x-[-1]"
                />
            </div>
            {/* Main content */}
            <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24">
                <div className="mx-auto flex justify-center gap-16">
                    {/* Table of contents */}
                    <div className="sticky top-[120px] hidden h-fit w-80 self-start flex-col gap-8 md:flex">
                        <div className="w-full border-t border-secondary" />
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-semibold text-brand-secondary">Table of contents</p>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Introduction", href: "#introduction", indent: "ml-0" },
                                    { title: "Origins", href: "#origins", indent: "ml-0" },
                                    { title: "The Books of the Theravāda Abhidhamma", href: "#the-books-of-the-theravada-abhidhamma", indent: "ml-0" },
                                    { title: "Dhammasaṅgaṇī", href: "#dhammasangani", indent: "ml-6" },
                                    { title: "Vibhaṅga", href: "#vibhanga", indent: "ml-6" },
                                    { title: "Dhātukathā", href: "#dhatukatha", indent: "ml-6" },
                                    { title: "Puggalapaññatti", href: "#puggalapannatti", indent: "ml-6" },
                                    { title: "Kathāvatthu", href: "#kathavatthu", indent: "ml-6" },
                                    { title: "Yamaka", href: "#yamaka", indent: "ml-6" },
                                    { title: "Paṭṭhāna", href: "#patthana", indent: "ml-6" },
                                    { title: "The Books of the Sarvāstivāda Abhidhamma", href: "#the-books-of-the-sarvastivada-abhidhamma", indent: "ml-0" },
                                    { title: "The Dharmaguptaka Śāripūtrābhidharma", href: "#the-dharmaguptaka-sariputrabhidharma", indent: "ml-0" },
                                    { title: "Abhidhamma in Buddhist Traditions", href: "#abhidhamma-in-buddhist-traditions", indent: "ml-0" },
                                    { title: "Criticism", href: "#criticism", indent: "ml-0" },
                                ].map((item) => (
                                    <li key={item.title} className={item.indent}>
                                        <Button href={item.href} size="lg" color="link-gray">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full border-t border-secondary" />
                        <div className="flex gap-3">
                            <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Link01} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                            <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                        </div>
                    </div>
                    {/* Article content */}
                    <div className="max-w-prose md:max-w-full">
                        <div className="mx-auto prose md:prose-lg">
                            <p className="lead first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-serif first-letter:text-brand-800 dark:first-letter:text-brand-100">
                                The Abhidhamma Piṭaka is the last of the three piṭakas (or “baskets”) in the canons of the early Buddhist schools. It takes the terms and ideas found in the Discourses, and organizes and analyzes them systematically.
                            </p>
                            <hr />
                            <h2 id="introduction">Introduction</h2>
                            <p>
                                There is a complete set of seven canonical Abhidhamma books in Pali, belonging to the Theravāda school. In addition, there is a complete set of seven (different) canonical texts of the Sarvāstivāda school preserved in Chinese translation, a major treatise of the Dharmaguptaka school in Chinese, and some smaller Sanskrit portions. As is the case with the Discourses, the Pali texts have received the most study and attention.
                            </p>
                            <p>
                                Unlike the Suttas and Vinaya, the Abhidhamma texts of the different schools are not closely related. It seems likely, in fact, that these were some of the formative texts in establishing the different schools. Nevertheless, Erich Frauwallner in his Studies in Abhidharma Literature and the Origins of Buddhist Philosophical Systems (1996) has identified certain core features of Abhidhamma that are common between the traditions. This notably includes the Pali Vibhaṅga, the Sarvāstivāda Dharmaskandha, and the Dharmaguptaka Śāripūtrābhidharmaśastra. These texts all include a common core, which is ultimately derived from the Saṁyutta Nikāya.
                            </p>
                            <p>
                                Despite their differences, however, it would be a mistake to see the canonical Abhidhamma texts as presenting strongly sectarian positions. Apart from the polemical works such as the Kathāvatthu, for the most part, they focus on presenting the central ideas of the Dhamma in different ways.
                            </p>
                            <h2 id="origins">Origins</h2>
                            <p>
                                The word abhidhamma is found occasionally in the early texts, usually alongside the parallel term abhivinaya. There is, of course, no body of texts called the abhivinaya, and these early uses of abhidhamma don’t refer to settled texts such as exist today. Rather, in this kind of context the prefix abhi- is comparable to the English “meta-” in the sense of “about the Dhamma, about the Vinaya”, and refers to discussions and conversations about the teachings. Such conversations would have, over time, been remembered and shared, and evolved gradually into the formalistic treatises of the Abhidhammapiṭaka.
                            </p>
                            <p>
                                The traditions vary in how they see the origin of the Abhidhamma. The Chinese and Tibetan traditions typically ascribe each Abhidhamma book to a disciple of the Buddha. However, certain of the Vinaya accounts of the First Council include the Abhidhamma, and thus assume that it was present at the time of the Buddha’s passing. The Theravāda tradition also holds that the texts (with the exception of the Kathāvatthu) were spoken by the Buddha. This is mentioned in the late canononical Parivāra (sabbasattuttamo sīho, piṭake tīṇi desayi, Pvr 3#5) and the paracanonical Milindapañha (tepiṭakaṁ buddhavacanaṁ, Mil 2#55), which both date from about three to four hundred years after the Buddha passed away. The Theravādin commentaries were later to claim that the Buddha taught the seven books of the Abhidhamma Piṭaka to the deities in the Tāvatiṁsa heaven, headed by his mother. Venerable Sāriputta subsequently learned them and conveyed them to his students.
                            </p>
                            <p>
                                The long-standing consensus among historical scholars is that the books of the Abhidhamma were compiled in the centuries after the Buddha. It is not possible to determine definite dates. However, it is likely that the common core of the Vibhaṅga/Dharmaskandha/Śāripūtrābhidharmaśastra predates the separation between these traditions, which happened around the time of King Ashoka in about 250 BCE, less than two centuries after the Buddha’s death. But the bulk of the content must have been developed after this time. A number of details, such as the fact that the works were accepted as canonical in the Milinda, around 100 BCE, suggests that they were completed before this time. So a range of 300 BCE–100 BCE for the composition of the canonical Abhidhamma texts seems reasonable.
                            </p>
                            <p>
                                While the belief that the books were composed by immediate students of the Buddha is untenable, it does point to something in how they might have developed. The major disciples would have established teaching lineages, or styles of learning, that reflected the specialties of the different masters. Over time, the explanations of various teachers became systematized and codified. The actual books as they exist today, however, are the products of schools, composed under the guidance of leading monks.
                            </p>
                            <figure>
                                <img className="h-60 md:h-120" src="/jetavanaramaya-scenery-01.jpg" alt="Woman working at computer" />
                                <figcaption>
                                    Image courtesy of Rafael Ortet via{" "}
                                    <a
                                        href="https://artlist.io/"
                                        className="rounded-xs outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        ArtList
                                    </a>
                                </figcaption>
                            </figure>

                            <h2 id="the-books-of-the-theravada-abhidhamma">The Books of the Theravāda Abhidhamma</h2>
                            <p>
                                For the most part, the long and complex texts of the Theravāda Abhidhamma are concerned with analyzing and classifying material, not with explaining it. Presumably they would have been taught by experienced teachers in monasteries, who would have drawn out, explained, and illustrated the abstruse texts. Eventually such explanations were codified and recorded in the Pali commentaries.
                            </p>
                            <p>
                                While they introduced a number of new terms and methods, the canonical Abhidhamma texts are doctrinally conservative. Many of the concepts familiar from later Abhidhamma are not found—ultimate vs. conventional truth, mind moments, kalāpas, the idea that each phenomena is defined by its sabhāva or “individual essence”. While some new terms are found, for the most part they seem to have been introduced in order to clarify and disambiguate the terminology, and weren’t intended to convey specific new concepts. That is not to say that there are no new ideas, just that they play a fairly minor role overall.
                            </p>
                            {/* Abhidhamma Piṭaka */}
                            <figure>
                                <div className="flex flex-col bg-secondary px-6 py-4 gap-2 rounded-4xl drop-shadow-sm">
                                    <div className="flex flex-row items-center justify-between gap-4">
                                        <h4 className="not-prose text-display-xs text-brand-700 dark:text-brand-700/80">The Seven Books of the Theravāda Abhidhamma</h4>
                                        <div className="flex flex-col gap-3 md:justify-center pb-1">
                                            <Button color="secondary" size="sm" iconLeading={Dataflow01}>
                                                Outline
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-full flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-2 rounded-3xl">
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Dhammasaṅgaṇi</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Compendium of Phenomena</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Vibhaṅga</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Book of Analysis</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Dhātukathā</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Discussion of Elements</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Puggalapaññatti</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Description of Personality Types</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Kathāvatthu</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Points of Controversy</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-gray-200/70 dark:bg-gray-800/80 px-2 py-3 rounded-2xl border border-gray-300 dark:border-gray-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Yamaka</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">The Pairs</p>
                                        </div>
                                        <div className="mx-auto w-full h-full flex flex-col items-center justify-center gap-0 bg-olive-200/80 dark:bg-olive-800/80 px-2 py-3 rounded-2xl border border-olive-300 dark:border-olive-700">
                                            <p className="not-prose text-md font-light text-primary/70 text-center">Paṭṭhāna</p>
                                            <p className="not-prose text-md font-bold text-center text-secondary">Conditional Relations</p>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <h3 id="dhammasangani">Dhammasaṅgaṇī</h3>
                            <p>
                                The Dhammasaṅgaṇī (Enumeration of Phenomena) is built on the idea of a mātikā, a list of contents or matrix. A mātikā acts as a simple instance of a template that is applied and transformed in ever more complex forms throughout the work. The Dhammasaṅgaṇī mātikās list sets of phenomena (dhammas). Most of these are doctrinal terms familiar from the suttas, although some are specialized Abhidhamma terms. The Dhammasaṅgaṇī starts with three mātikās. The first classifies dhammas into 22 sets of three (tika), and the next two use sets of two (duka), 100 pairs for Abhidhamma terms, and 42 for Sutta terms.
                            </p>
                            <p>
                                The first of the triple sets is the momentous group: wholesome, unwholesome, and undetermined. This serves as a framework for classifying all the various phenomena. While it seems simple enough, even this detail was controversial, as some schools rejected the existence of the undetermined, or morally neutral, category.
                            </p>
                            <h3 id="vibhanga">Vibhaṅga</h3>
                            <p>
                                The Vibhaṅga (Book of Analysis) consists of 18 chapters arranged by topic. The list of topics is closely related to the Saṁyutta Nikāya—aggregates, senses, dependent origination, etc. Most of the chapters have a threefold structure.
                            </p>
                            <ol>
                                <li>
                                    Analysis according to the suttas: this quotes a key passage from the suttas on the relevant topic and offers a modest analysis.
                                </li>
                                <li>
                                    Analysis according to the Abhidhamma: applies the sets of synonyms and terms as developed in the Dhammasaṅgaṇī.
                                </li>
                                <li>
                                    Catechism: tests the student’s knowledge with systematic questioning.
                                </li>
                            </ol>
                            <p>
                                A few sections, such as Vb 18 Dhammahadaya, do not fit this system. They may have originated as independent treatises.
                            </p>
                            <h3 id="dhatukatha">Dhātukathā</h3>
                            <p>
                                The Dhātukathā (Discussion of Elements) shows how the Dhammasaṅgaṇī mātikās relate to the 5 aggregates, 12 bases and 18 elements. It is organized according to fourteen methods.
                            </p>
                            <h3 id="puggalapannatti">Puggalapaññatti</h3>
                            <p>
                                The Puggalapaññatti (Designation of Persons) departs from the strictly phenomenological approach of most Abhidhamma texts to present a compendium of passages relating to different kinds of individual. These are set out in a mātikā that lists kinds of individuals numerically organized from one to ten. As suggested by the numerical arrangement, these terms are mostly derived from the Aṅguttara Nikāya, with modest changes in wording. The main concern is to classify personal or psychological tendencies as they relate to the development of the Buddhist path.
                            </p>
                            <p>
                                The Buddhist community, sponsored by kings such as Aśoka, took full advantage of these favorable conditions to spread the Dhamma over the Indian subcontinent and further. Less than two centuries after the Buddha’s passing, Buddhist communities were thriving in regions as far-flung as Sri Lanka and Afghanistan.
                            </p>
                            <h3 id="kathavatthu">Kathāvatthu</h3>
                            <p>
                                The Kathāvatthu (Points of Controversy) is a collection of over 200 discussions on points of interpretation of Buddhist doctrine. These consist of a debate between unnamed protagonists. Each relies either on logic or quotations from the suttas to support their arguments. Some of the discussions concern central problems in Buddhist philosophy, such as the nature of not-self, or the problem of continuity and impermanence. Many, however, are very minor.
                            </p>
                            <p>
                                While the text does not identify the points of view, most of them may be identified with the doctrines held by various Buddhist schools. Note that none of the controverted points deal with Brahmanical, Jaina, or other non-Buddhist views. Nor are there any significant differences in the suttas referred to; each debater assumes that they share a common sutta basis.
                            </p>
                            <p>
                                The Kathāvatthu is the only book of the Abhidhamma ascribed by the Theravāda to a specific author, Moggaliputtatissa, a senior monk at the time of King Ashoka. The core of the work probably formed then, but it grew substantially over time. One or two of the core discussions appear to share a common basis with the Vijñānakāya.
                            </p>
                            <h3 id="yamaka">Yamaka</h3>
                            <p>
                                The Yamaka (Pairs) consists of ten chapters on different topics, starting with the roots of wholesome or unwholesome conduct. It applies a series of pairs of questions, with the object of fully determining the scope of application of terms. For example, are all instances of rūpa (form, physical phenomena) included in the aggregate of form (rūpakkhandha)? No, because there are idiomatic uses of rūpa such as evarūpa (“of such a sort”). But are all instances of the aggregate of form included in rūpa? Yes.
                            </p>
                            <h3 id="patthana">Paṭṭhāna</h3>
                            <p>
                                Paṭṭhāna (Conditional Relations) sets out a simple mātikā listing 24 kinds of condition. The first is the “root condition” (hetupaccayo), dealing with how acts are caused by the unwholesome roots of greed, hate, and delusion, or their opposites. This mātikā is then applied to the mātikās of Dhammasaṅgaṇī, creating a bewildering complexity of possible combinations. The Paṭṭhāna is always heavily abbreviated, but if it were to be fully spelled out, it would probably be the largest book ever created, with many billions of combinations.
                            </p>
                            <p>
                                The Dhammasaṅgaṇī and the Paṭṭhāna bookend the Abhidhamma collection, the first dealing with phenomena, the latter with their relations. While method and the details have expanded considerably, the approach can be seen as a detailed application of the underlying principles of dependent origination.
                            </p>
                            <h2 id="the-books-of-the-sarvastivada-abhidhamma">The Books of the Sarvāstivāda Abhidhamma</h2>
                            <p>
                                While many, perhaps all, of the “eighteen” early schools would have had Abhidhamma texts of some sort, none were as famous as the Sarvāstivāda. The canonical texts mentioned here were supplemented or supplanted by the massively influential treatise Mahāvibhāṣa, which established the Sarvāstivāda as the Abhidhamma school par excellence. Even when later works such as Vasubandhu’s Abhidharmakoṣa or Nāgārjuna’s Mūlamadhyamakakārikā critiqued the Sarvāstivādin philosophy, they were still working with the framework of ideas and terms established by the school, and based originally on these canonical texts. Accordingly, while the Abhidhamma texts of most schools have disappeared, these texts were taken to China and preserved there in translation. In addition, there are some passages found in Sanskrit fragments and Tibetan texts.
                            </p>
                            <p>
                                The originals of all these Sarvāstivāda works were in Sanskrit.
                            </p>
                            <h3 id="sangitiparyaya">Saṅgītiparyāya</h3>
                            <p>
                                Regarded as one of the earliest of the Abhidhamma books, this is essentially a commentary on the Sarvāstivādin version of the Saṅgīti Sutta (DN 33). It was composed by Mahākausthila (according to the Sanskrit and Tibetan sources) or Śāriputra (according to the Chinese sources). The Chinese recension was translated by Xuanzang.
                            </p>
                            <h3 id="dharmaskandha">Dharmaskandha</h3>
                            <p>
                                As noted above, this text appears to share a common origin with the Vibhaṅga of the Pali tradition. It is maintained today in a complete Chinese and partial Sanskrit version. Compared to the Vibhaṅga, the method appears to be less formalized and more discursive, quoting a range of sutta passages. It was composed by Śāriputra (according to the Sanskrit and Tibetan sources) or Maudgalyāyana (according to Chinese sources). The Chinese edition was translated by Xuanzang.
                            </p>
                            <h3 id="prajnapati-shastra">Prajñaptiśāstra</h3>
                            <p>
                                This consists of a series of questions and answers on points of doctrine based on a mātikā, supported by sutta quotes. It was said to be composed by either Maudgalyāyana or Mahākatyāyana. The Chinese translation is by Dharmarakṣita.
                            </p>
                            <h3 id="dhatukaya">Dhātukāya</h3>
                            <p>
                                Composed by Purna (according to Sanskrit and Tibetan sources), or Vasumitra (according to Chinese sources). It was translated into Chinese by Xuanzang. The Dhātukāya bears some similarity to the Pali Dhātukathā, although it uses a different mātikā.
                            </p>
                            <h3 id="vijnanakaya">Vijñānakāya</h3>
                            <p>
                                This is a counterpart of the Pali Kathāvatthu, and may share a common historical basis. The text mentions the Theravādin Moggaliputtatissa, author of the Kathāvatthu, as an opponent in the debate on the key Sarvāstivāda doctrine that all phenomena exist in the past, future, and present. The text discusses far fewer points than the Kathāvatthu, however. It was composed by Devasarman and translated into Chinese by Xuanzang.
                            </p>
                            <h3 id="prakaranapada">Prakaraṇapāda</h3>
                            <p>
                                Composed by Vasumitra, and translated by Xuanzang (T 1542), with another partial translation by Gunabhadra and Bodhiyasa at T 1541. This was a central Abhidharma treatise, which influenced even non-Sarvāstivādin texts such as the Mahāprajñapāramītopadeśa.
                            </p>
                            <h3 id="jnanaprasthana">Jñānaprasthāna</h3>
                            <p>
                                Composed by Kātyāyanīputra and translated into Chinese by Xuanzang at T 1544. It also appears translated by Saṅghadeva and Zhu-fo-nian under the name 阿毘曇八犍度論 at T 1543. The largest of the Sarvāstivādin Abhidhamma books, this formed the basis for the later Sarvāstivāda treatises, and hence the modern study of Abhidharma especially in Tibetan Buddhism.
                            </p>

                            <h2 id="the-dharmaguptaka-sariputrabhidharma">The Dharmaguptaka Śāripūtrābhidharma</h2>
                            <p>
                                The only extant work of the Dharmaguptaka Abhidhamma, this was translated into Chinese by Dharmayaśas and Dharmagupta. It shares some content with the Vibhaṅga and Dharmaskandha, and other details with other texts. Whereas the other schools maintained multiple Abhidhamma texts, this single text covers much of the same ground, and seems to contain the entire Abhidhamma system of the Dharmaguptakas.
                            </p>
                            <h2 id="abhidhamma-in-buddhist-traditions">Abhidhamma in Buddhist Traditions</h2>
                            <p>
                                Throughout the years, the study of Abhidhamma has been held in high esteem by the Buddhist traditions. The Theravāda tradition developed a series of commentaries and treatises explaining the ideas of the Abhidhamma and extending them further. This is a living tradition, which boasts an unbroken series of publications down to modern times. Today, Abhidhamma study is specially emphasized in Burmese Buddhism, although it remains active in all Theravāda regions. Tibetan Buddhism likewise strongly emphasizes study of the Abhidharma, based mostly on Sarvāstivādin sources. In all regions, however, contemporary Abhidhamma study primarily relies on later treatises, and the canonical texts are usually not directly studied in depth.
                            </p>
                            <p>
                                As well as study, Abhidhamma has been a formative influence on several modern schools of meditation. In particular, the Burmese meditation schools, including Mahasi, Goenka, and Pa Auk, all rely closely on Abhidhamma concepts.
                            </p>
                            <p>
                                Perhaps unexpectedly, Abhidhamma is not restricted to monastic or scholarly circles. It is frequently taught to or by lay people, and is popular throughout Southeast Asia. In addition, Abhidhamma mātikās may form the basis for ceremonial recitation. In Thailand, the Dhammasaṅgaṇī tikamātikā and the 24 conditions of the Paṭṭhāna are used as funeral chants.
                            </p>
                            <p>
                                Each of the schools seems to have had main four <i>nikāyas</i>. The sequence of these is not fixed. The form adopted on SuttaCentral is the well-known sequence as used in the Pali tradition. In other schools, as implied by the accounts of the First Council, the collections were in different orders, such as placing the Saṁyutta first. Note that in the Chinese canon, the editors of the Taishō edition rearranged their material under the influence of the Pali canon to adopt the same sequence.
                            </p>
                            <p>
                                Each of the <i>nikāyas</i> includes material that was edited and arranged, and sometimes added to, over a period of time. While each collection contains some unique texts, for the most part the differences in the number of discourses is simply due to the fact that a given discourse may be assigned a different place in different collections.
                            </p>

                            <h2 id="criticism">Criticism</h2>
                            <p>
                                The Abhidhamma itself is a critical system, developed to clarify understanding of fundamental concepts and relations. Underlying this project is the assumption that such clarification is needed, which implies that not everyone understands things the same way. This critical aspect comes to the fore in works such as the Kathāvatthu, which showcases the rational methods of clarifying doctrines.
                            </p>
                            <p>
                                Some, such as the historical Sautrāntikas, criticized the Abhidhamma project itself, claiming it deviated from the suttas. It is not clear whether all early schools actually had an Abhidhamma Piṭaka. However, they all must have had some comparable works of analysis and explanation.
                            </p>
                            <p>
                                Criticism of Abhidhamma was a foundation of the Mahāyāna. Mahāyāna sutras criticize both specific details of Abhidhamma doctrines—such as the notion that each phenomenon is defined by its individual essence—and the overall direction of the Abhidhamma schools, alleging that its followers waste time debating trivia rather than understanding the profundity of the teaching. Nevertheless, Mahāyāna texts developed their own forms of Abhidhamma, and study of Abhidhamma is a core part of many Mahāyāna curricula to this day.
                            </p>
                            <p>
                                Criticism is also found in the Theravāda commentaries, which record challenges of the authenticity of the Abhidhamma. However, most of the debate in the schools concerns the interpretation of Abhidhamma, not the validity of the project itself.
                            </p>
                            <p>
                                This critical tradition continues in the present day. Within the Tibetan Buddhist education system, Abhidharma texts and concepts are studied, and considered in light of the critiques by the Sautrāntikas and Mahāyānists. And while some Theravādins maintain that it is essential to study Abhidhamma, others claim that key Abhidhamma ideas depart from the suttas, and that study of the Abhidhamma is unnecessary.
                            </p>

                            <p>
                                Early discourses that were not included in the <i>nikāyas</i> were gathered by the Pali tradition into their Khuddaka or “minor” collection. It’s not entirely clear why these weren’t simply included in the four <i>nikāyas</i>; originally it may have simply been a matter of organizational convenience. The Pali has six works in the Khuddaka that are considered to belong to the early period. These mostly consist of verse, with some narrative and doctrinal material in prose.
                            </p>
                            <ul>
                                <li>Dhammapada</li>
                                <li>Udāna</li>
                                <li>Itivuttaka</li>
                                <li>Sutta Nipāta</li>
                                <li>Theragāthā</li>
                                <li>Therīgāthā</li>
                            </ul>

                            <p>
                                While these texts are considered early, they are on the whole probably a little later than the main <i>nikāyas</i>. Certain chapters of the Sutta Nipāta have often been regarded as an especially early and authentic portion of the canon, but this should not be over-interpreted. Other parts of the Sutta Nipāta are clearly late. And there is nothing in the early portions to indicate that they are earlier than the bulk of the prose discourses.
                            </p>
                            <p>
                                The collection seems to have been considered an open one until quite a late date. The Burmese recension of the Pali canon even includes the Milindapañha, a text that could not have been written less than three hundred years after the Buddha’s passing.

                            </p>
                            <p>
                                It is unclear whether each school had its own version of the Khuddaka. However, many of these texts, especially the Dhammapada, have counterparts in the northern collections. It seems likely that despite differences in organization, each school would have had some collection loosely corresponding to the Khuddaka.
                            </p>
                            <p>
                                The remaining texts in the Khuddaka were added later. In style and content, they represent a striking shift from the early texts. They indicate different developments within the Buddhist community in the centuries following the Buddha. These later texts include the extensive collections of Jātaka tales, found in Pali and other traditions. Note that in the Pali tradition, only the verses are canoncial, while the stories themselves are found in the commentary.
                            </p>

                            <h2 id="canonicity-of-the-suttas">Canonicity of the Suttas</h2>
                            <p>
                                The early Discourses are regarded as canonical in all schools of Buddhism. They are considered to be Buddhavacana, the “words of the Buddha”, and are revered as sacred scripture. Each school, of course, accepts other texts as canonical also; but the Discourses, together with the Vinayas, are the main areas of overlap between the schools.
                            </p>
                            <p>
                                This general picture, however, gets more complicated when we try to pin down the details. While the Discourses are largely similar in each canon, they are not identical. Each of the three main schools maintains its own distinct canons: the Theravāda of South and Southeast Asia have their texts in Pali; Buddhists of Central Asia use Tibetan; and in East Asia the canon is in Chinese. A full set of nikāyas are in Pali; extensive collections are found in Chinese; and limited selections are found in Tibetan. The Sanskrit and other early Indic texts are not part of any formal canon, but the texts are nevertheless canonical in the sense that they are recognized as being the same as the texts in the canon.
                            </p>
                            <p>
                                So while we can say that the early Discourses are in principle considered canonical generally, for practical purposes each of the schools has a specific set of early Discourses found in their own canon.
                            </p>
                            <h2 id="suttas-in-the-buddhist-traditions">Suttas in the Buddhist Traditions</h2>
                            <p>
                                In traditional Buddhist education, the Discourses have usually not been directly taught. Rather, the teachings and principles found in the Discourses have been assimilated and organized in later texts, which became the medium of education. In the Theravāda, Discourses were until recently passed down in Pali, and so were only accessible to those, usually monks, who learned Pali. And not all those who learned Pali would study the Discourses. It seems that teaching was for practical purposes handed down in local monastic traditions, based on handbooks and sets of notes and commentaries. Before modern times, it would have been rare to find any but the largest monasteries that actually possessed a full set of the Tipiṭaka. Today, printed sets of the canon are widely available in both Pali and translation; but they are still often left in a locked cabinet on the shrine, unread.
                            </p>
                            <p>
                                For the most part, Buddhists might be familiar with a small set of popular discourses. These would include such texts as the Dhammacakkappavattana Sutta—the famous first sermon of the Buddha—and some short texts used for protection chanting and as the basis of sermons for the laity, such as the Maṅgala, Ratana, and Metta Suttas.
                            </p>
                            <p>
                                Apart from scholars, most Theravāda Buddhists do not clearly distinguish early Discourses from other sacred texts. The word sutta can mean simply “sacred scripture” and may even be used for such things as magic formulas and the like. While Buddhists are generally aware that there is such a thing as the Tipiṭaka that contains the words of the Buddha, only educated Buddhists have a clear idea of the contents. There is no tradition in Buddhism comparable to the Bible readings of the Christian Mass, and so no standard way of communicating the contents of the texts directly to the people.
                            </p>
                            <p>
                                In some Buddhist traditions, it is considered mandatory for ordained monks to memorize and study closely certain portions of the ancient texts. Sri Lankan monks, for example, memorize the Dhammapada. However, this is not the case in Thailand, for example, where there is no education requirement for monks. Even in the nine years of the formal Dhamma study curriculum in Thailand, the canonical Discourses are not studied, as they are considered too sacred.
                            </p>
                            <p>
                                In East Asian Buddhism, traditional education focused on the Mahāyāna sutras and the texts of the Chinese masters, and there is little evidence that the early discourses were widely studied. It is sometimes said that the translation style of the āgamas compares poorly with the more elegant diction of the Mahāyāna translations by Xuanzang and other masters. And the early discourses are, of course, not organized for easy reading and study.
                            </p>
                            <p>
                                Tibetan Buddhism includes study of early Buddhist schools as part of its regular curriculum. However, this refers to the Abhidhamma doctrines of the later schools. A reasonable grasp of the early Buddhist texts is, nevertheless, possible to achieve in Tibetan. Even though full āgama texts are lacking, substantial passages from the early texts are found in the Upāyika, which is a compilation of passages referred to in the Abhidharmakoṣa, and in other scattered texts.
                            </p>
                            <h2 id="modern-reform-and-postmodern-criticism">Modern Reform and Postmodern Criticism</h2>
                            <p>
                                From the middle of the 19th Century, European and Asian scholars began to study the Buddhist texts on historical grounds. Whereas traditional scholarship remained within each school, interpreting them within their local contexts, the new scholarship aimed to locate the texts in historical time and place. This approach was both critical—in the sense of being skeptical of traditional claims to authority, and requiring evidence to support claims—and constructive, in the sense that it aimed to build a coherent and meaningful historical picture in which to understand the texts.
                            </p>
                            <p>
                                Modernity brought a range of new techniques and achievements. These include:
                            </p>
                            <ul>
                                <li>Comparative study of the previously isolated scriptures in Chinese, Pali, Tibetan, and Sanskrit revealed both similarities and differences.</li>
                                <li>Based on the accounts of Chinese pilgrims, archaeologists unearthed a series of ancient sites in India, proving that familiar sutta locations like Sāvatthī or Rājagaha were real places.</li>
                                <li>Comparison of Buddhist scriptures with Hindu and Jaina texts allowed for a better understanding of the cultural forces active in the Buddha’s time.</li>
                                <li>Application of text-critical methods established the historical and doctrinal evolution of the Buddhist texts and their relation to one another.</li>
                                <li>The Aśokan pillars and inscriptions were discovered and deciphered, allowing for a proper historical understanding of this seminal Buddhist monarch.</li>
                                <li>There was a new emphasis on the early Discourses as the historical source for the Buddha’s teachings.</li>

                            </ul>
                            <p>
                                Modernist developments such as these are not confined to Western scholarship, but have been conducted in conjunction with textual and practical reforms throughout Asian Buddhism. Each of the traditions of Asian Buddhism has participated in and applied these developments in diverse ways. Some examples include:
                            </p>
                            <ul>
                                <li>In Theravāda, the Fifth and Sixth Councils reasserted the centrality of the Pali canon.</li>
                                <li>Translations of the Pali canon have been made into modern Asian languages and widely distributed across the Buddhist world, along with English translations.</li>
                                <li>The reformist Buddhism of King Mongkut in 19th Century Thailand was largely inspired by modernist ideas of textual and disciplinary reform.</li>
                                <li>Modern approaches to meditation were developed based on Pali texts. The Burmese vipassanā schools took the Satipaṭṭhāna Sutta as their core text, making this the single most influential text in the modern practice of meditation. In Thailand, reform movements such as the Forest Tradition, or Ajahn Buddhadāsa’s explicitly sutta-based approach, rejected traditional contemplative practices based on magical invocations, and advocated a return to the body-focused and grounded mindfulness practices of the early suttas.</li>
                                <li>The hugely influential Taishō edition of the Chinese canon was developed by Japanese scholars who had studied text-critical techniques in Germany. They rearranged the canon to put the āgamas in pride of place at the start of the collection, in the sequence found in the Pali. They also included limited information on Pali parallels.</li>
                                <li>The empirical and rational strands of the early texts were emphasized, arguing for an essential compatibility with modern science. This provided the basis for the later application of scientific method to mindfulness meditation, which has proved crucial to the global acceptance of meditation as an evidence-based approach to happiness, stress relief, and psychological wellness.</li>
                            </ul>
                            <p>
                                It remains the case that direct study of the suttas is a minority practice. However, across Asia we find popular reform movements that emphasize the central importance of the suttas. Sutta study is most popular in Sri Lanka, where there is a proliferation of teachers and movements advocating a return to the suttas. The hugely popular monk Venerable Kiribathgoda Gnanananda Thero is controversial for his insistence on treating the suttas as the primary sources of Dhamma. In Thailand, the Buddhavacana movement of Ajahn Kukrit Sotthibalo is changing the face of contemporary Thailand, bringing many people to read the suttas for the first time. In Taiwan, similarly, the recently deceased master Yin Shun emphasized the historical primacy of the early texts, arguing that there was an essential continuity between them and early Mahāyāna. And in countries outside the regions of traditional Buddhism, teachers such as Ajahn Brahm, Bhikkhu Bodhi, and many others advocate the teachings of the suttas.
                            </p>
                            <p>
                                Since the 1980s, such modernist reforms have come under postmodern criticism, mostly from American scholars who specialize in later forms of Buddhism. These criticisms aim to dislodge the modernist consensus, arguing that we have no real way of knowing what the Buddha taught, or the provenance of the Pali and other texts. A variety of specific arguments attempt to refute key claims of the modernists, such as the idea that the Buddha’s teaching was essentially rational. These arguments have been repeatedly criticized by experts in the field. The postmodern approach has yet to produce constructive results comparable to those of modernism.
                            </p>
                            <h2 id="translations">Translations</h2>
                            <p>
                                One of the most concrete outcomes of the modernist reforms has been the availability of translations of the early texts. Until now, almost all such translations have been from the Pali canon. But a few translations from the Chinese, Tibetan, and Sanskrit texts are now starting to appear.
                            </p>
                            <p>
                                Work began in Europe with isolated translations such as Viggo Fausböll’s translation of the Dhammapada in 1855 and the Sutta Nipāta in 1881. Under the leadership of T.W. Rhys Davids, the Pali Text Society, founded in 1881, undertook the task of translating the entire canon into English. These translations were groundbreaking, but have for the most part been replaced by a more modern and accurate generation of translations by scholars such as Bhikkhu Bodhi. We include some of the older translations on SuttaCentral, but for the most part they are primarily of historical interest, since not only is the language archaic, but they contain many errors.
                            </p>
                            <p>
                                Major translations from the Pali have also been made into Thai, Sinhala, Burmese, Cambodian, Vietnamese, Japanese, Hindi, and most recently Bangla. Most of these have been digitized and are available on SuttaCentral. However, we are still looking forward to including the Bangla and Cambodian translations, and the Japanese translation, though in the public domain, is unavailable due to the actions of the publisher.
                            </p>
                            <p>
                                It’s not always possible to easily find out the translation methods and approaches of these different editions. However, my understanding is that the above translations were all made directly from the Pali. In addition to this, there have been many secondary translations made from the English translations. Most of the remaining translations in SuttaCentral fall into this category, though not all. Some translations, for instance, in German or Norwegian, have been made directly from the Pali.
                            </p>
                            <p>
                                The new set of translations made from the Pali for SuttaCentral by myself and Bhante Brahmali build on this tradition. They aim to provide accurate, clear, and idiomatic translations of the early texts in Pali.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col items-start justify-between gap-y-6 border-t border-secondary pt-6 md:flex-row">

                            <div className="flex gap-3 md:hidden">
                                <Button color="secondary" size="md" onClick={() => copy("https://www.untitledui.com/")} iconLeading={copied ? Check : Copy01} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={X} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={Facebook} />
                                <Button color="secondary" size="md" className="text-fg-quaternary" iconLeading={LinkedIn} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface RoundButtonProps extends ComponentPropsWithRef<"button"> {
    icon?: FC<{ className?: string }>;
}

const RoundButton = ({ icon: Icon, ...props }: RoundButtonProps) => {
    return (
        <Button
            {...props}
            color="link-gray"
            className={cx(
                "group flex size-12 items-center justify-center rounded-full bg-primary ring-1 ring-secondary backdrop-blur transition duration-100 ease-linear ring-inset hover:bg-secondary md:size-14",
                props.className,
            )}
        >
            {props.children ??
                (isReactComponent(Icon) ? (
                    <Icon className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover md:size-6" />
                ) : null)}
        </Button>
    );
};

const BlogPost05 = () => {
    return (
        <div className="bg-primary">

            <ContentSplitImage01 />

            <SectionDivider className="pt-16 md:pt-24" />

            <CollectionGallerySuttaPitaka />

        </div>
    );
};

export default BlogPost05;
