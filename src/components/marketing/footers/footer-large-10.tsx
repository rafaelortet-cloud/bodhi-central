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
                href: "#",
            },
            {
                label: "Canons",
                href: "#",
            },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            {
                label: "Releases",
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
                label: "Shedra Paths",
                href: "#",
            },
            {
                label: "Shedra Paths",
                href: "#",
            },
            {
                label: "News",
                href: "#",
            },
            {
                label: "Media kit",
                href: "#",
            },
            {
                label: "Contact",
                href: "#",
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                label: "Groups Around You",
                href: "#",
            },
            {
                label: "Study Centers",
                href: "#",
            },
            {
                label: "Transmissions",
                href: "#",
            },
            {
                label: "Learning Materials",
                href: "#",
            },
            {
                label: "Support",
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
            {
                label: "Licenses",
                href: "#",
            },
            {
                label: "Settings",
                href: "#",
            },
            {
                label: "Contact",
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
        <footer className="bg-brand-950 py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-xs font-semibold text-primary md:text-display-sm">Start your journey</h2>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-xl">Join thousands of explorers of Buddhist awakening.</p>
                    </div>

                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:flex-row sm:self-start lg:mt-0">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-72 md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">An initiative aiming to explore and share the channeling of Buddhist scripture and its learning in digital format.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
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
