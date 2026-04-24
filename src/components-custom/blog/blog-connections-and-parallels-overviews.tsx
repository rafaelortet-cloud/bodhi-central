import { Button } from "@/components/base/buttons/button";
import { type Article, Simple01Vertical } from "@/components/marketing/blog/base-components/blog-cards";

const articles: Article[] = [
    {
        id: "article-1",
        title: "Vinaya Parallels in Theravada and Mahayana Buddhism",
        summary: "Explore the Vinaya parallels between Theravada and Mahayana Buddhism.",
        href: "#",
        category: {
            name: "Canon Research",
            href: "#",
        },
        thumbnailUrl: "/placeholder-image-landscape.svg",
        publishedAt: "20 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "brand",
                href: "#",
            },
            {
                name: "Kangyur",
                color: "indigo",
                href: "#",
            },
            {
                name: "Buddha's Words",
                color: "pink",
                href: "#",
            },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Sutta Parallels in Theravada and Mahayana Buddhism",
        summary: "Explore the sutta parallels between Theravada and Mahayana Buddhism.",
        href: "#",
        category: {
            name: "Canon Research",
            href: "#",
        },
        thumbnailUrl: "/placeholder-image-landscape.svg",
        publishedAt: "19 Feb 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "blue",
                href: "#",
            },
            {
                name: "Tengyur",
                color: "pink",
                href: "#",
            },
            {
                name: "Treatises",
                color: "pink",
                href: "#",
            },
        ],
    },
    {
        id: "article-3",
        title: "Abhidhamma in Theravada and Mahayana Buddhism",
        summary: "Explore the Abhidhamma in Theravada and Mahayana Buddhism and discover how they complement each other on the path to awakening.",
        href: "#",
        category: {
            name: "Canon Research",
            href: "#",
        },
        thumbnailUrl: "/placeholder-image-landscape.svg",
        publishedAt: "18 Jan 2026",
        readingTime: "8 min read",
        author: {
            name: "John Doe",
            href: "#",
            avatarUrl: "/placeholder-image-landscape.svg",
        },
        tags: [
            {
                name: "Tibetan Canon",
                color: "success",
                href: "#",
            },
            {
                name: "Historical Context",
                color: "pink",
                href: "#",
            },
        ],
    },
];

export const BlogSectionConnectionsAndParallelsOverviews = () => {
    return (
        <section className="bg-linear-to-b from-brand-100 via-brand-50 via-15% to-brand-100 to-80% dark:bg-linear-to-b dark:from-brand-900/90 dark:via-brand-800/50 dark:via-50% dark:to-brand-900/90 py-12 md:py-20">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className="max-w-3xl">
                        <span className="text-sm font-light text-brand-600 dark:text-brand-700 md:text-md">Research</span>
                        <h2 className="mt-2 text-display-sm font-extralight text-brand-800 dark:text-brand-300 md:text-display-lg">Canonical Parallels Articles</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-2 md:text-xl">Expert articles on the textual connections and parallels between the early Buddhist canons and the later Buddhist traditions.</p>
                    </div>

                    <div className="hidden gap-3 lg:flex">
                        <Button size="sm">View more</Button>
                    </div>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3">
                    {articles.slice(0, 3).map((article) => (
                        <li key={article.id}>
                            <Simple01Vertical article={article} />
                        </li>
                    ))}
                </ul>
                <div className="mt-12 flex flex-col gap-3 lg:hidden">
                    <Button size="md">View more</Button>
                </div>
            </div>
        </section>
    );
};
