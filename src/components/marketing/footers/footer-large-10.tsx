import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";

const footerNavList = [
    {
        label: "Scripture",
        items: [
            {
                label: "Overview",
                href: "/scripture",
            },
            {
                label: "Collections",
                href: "/scripture/collections",
            },
            {
                label: "Traditions",
                href: "/scripture/traditions",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            {
                label: "Connections",
                href: "#",
            },
        ],
    },
    {
        label: "Learning Paths",
        items: [
            {
                label: "Introduction",
                href: "#",
            },
            {
                label: "Global Paths",
                href: "#",
            },
            {
                label: "Academic Paths",
                href: "#",
            },
            {
                label: "Practice Paths",
                href: "#",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                label: "Groups Around You",
                href: "/resources/community",
            },
            {
                label: "Study Centers",
                href: "/resources/study-centers",
            },
            {
                label: "Digital Platforms",
                href: "#",
            },
            {
                label: "Materials",
                href: "#",
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                label: "Project Information",
                href: "/about/project-information",
            },
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "Get Involved",
                href: "#",
            },
            {
                label: "Contact Us",
                href: "#",
            },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                label: "Terms",
                href: "#",
            },
            {
                label: "Privacy",
                href: "#",
            },
            {
                label: "Cookies",
                href: "#",
            },
        ],
    },
];
const footerSocials = [
    {
        label: "X (formerly Twitter)",
        icon: X,
        href: "https://x.com/",
    },
    {
        label: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/",
    },
    {
        label: "GitHub",
        icon: GitHub,
        href: "https://github.com/",
    },
    {
        label: "AngelList",
        icon: AngelList,
        href: "https://angel.co/",
    },
    {
        label: "Dribbble",
        icon: Dribbble,
        href: "https://dribbble.com/",
    },
    {
        label: "Layers",
        icon: Layers,
        href: "https://layers.com/",
    },
];

export const FooterLarge10 = () => {
    return (
        <footer className="bg-bg-secondary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Continue your journey</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join thousands of people exploring the Buddha's teachings.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button color="secondary" size="xl" href="/about/project-information">
                            Learn more
                        </Button>
                        <Button size="xl" href="/scripture">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-64 md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">An initiative to preserve and channel universal Buddhist scripture and its learning globally.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-fg-brand-secondary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-gray" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-quaternary">© 2026 Bodhi Station. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
