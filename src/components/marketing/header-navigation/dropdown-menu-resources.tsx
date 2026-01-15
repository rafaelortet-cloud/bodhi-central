"use client";

import type { FC, ReactNode } from "react";
import { BookClosed, BookOpen01, Codepen, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

type MenuItem = {
    title: string;
    subtitle?: string;
    href: string;
    Icon: FC<{ className?: string }>;
    badge?: ReactNode;
};

type MenuColumn = {
    title: string;
    items: MenuItem[];
};

const columns: MenuColumn[] = [
    {
        title: "Resources",
        items: [
            {
                title: "Groups Around You",
                subtitle: "Find and connect with others in your community.",
                href: "/resources/community",
                Icon: BookClosed,
            },
            {
                title: "Where to Study",
                subtitle: "Explore Buddhist study centers around the world.",
                href: "/resources/study-centers",
                Icon: Stars02,
            },
            {
                title: "Digital Portals",
                subtitle: "Research a world of digital portals for preservation and accessibility.",
                href: "/resources/digital-portals",
                Icon: Stars02,
            },
            {
                title: "The Blog",
                subtitle: "Read articles distiling wisdom and caring for the world",
                href: "/resources/blog",
                Icon: PlayCircle,
            },
        ],
    },
    {
        title: "Support",
        items: [
            {
                title: "Documentation",
                subtitle: "In-depth articles on our tools and technologies to empower users.",
                href: "/",
                Icon: FileCode01,
            },
            {
                title: "Join our Forum",
                subtitle: "Engage in conversations and share knowledge with others.",
                href: "/",
                Icon: Stars02,
            },
            {
                title: "Help and support",
                subtitle: "Need help with something? Our team is here to help.",
                href: "/",
                Icon: LifeBuoy01,
            },
        ],
    },
];

export const DropdownMenuResources = () => {
    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-secondary shadow-lg ring-1 ring-secondary_alt md:rounded-2xl md:shadow-lg">
                <div className="flex flex-col gap-5 rounded-xl bg-primary pt-4 pb-5 ring-1 ring-secondary md:gap-6 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col gap-1 px-4 md:p-0">
                        <p className="pt-4 text-2xl font-medium text-brand-primary">RESOURCES</p>
                        <p className="text-sm text-brandtertiary">Get started and discover more about our platform.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-sm font-semibold text-brand-tertiary">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Add content to the Desk", href: "#" },
                                    { title: "Manage your galleries", href: "#" },
                                    { title: "Explore your Dashboard", href: "#" },
                                ].map((item) => (
                                    <li key={item.title}>
                                        <Button href={item.href} color="link-gray" size="lg">
                                            {item.title}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2">
                            {columns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="mb-2 px-4 text-sm font-semibold text-brand-tertiary md:px-0">{column.title}</h3>
                                    <ul className="flex flex-col gap-0.5">
                                        {column.items.map(({ title, subtitle, href, Icon }) => (
                                            <li key={title}>
                                                <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                    <Button href="#" color="secondary" size="md" iconLeading={BookOpen01} className="hidden md:flex">
                        Dashboard
                    </Button>
                    <Button href="/my-desk" color="primary" size="md" className="hidden md:flex">
                        My Desk
                    </Button>
                    <Button href="/my-desk" color="primary" size="sm" className="md:hidden">
                        My Desk
                    </Button>
                </div>
            </nav>
        </div>
    );
};
