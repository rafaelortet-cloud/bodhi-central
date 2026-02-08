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
        title: "Learning Paths",
        items: [
            {
                title: "Foundational Paths",
                subtitle: "Immerse yourself in the fundamental theories of the journey.",
                href: "#",
                Icon: BookClosed,
            },
            {
                title: "Academic Paths",
                subtitle: "Paths to systematic studies of the enlightenment.",
                href: "/resources/study-centers",
                Icon: Stars02,
            },
            {
                title: "Practice Paths",
                subtitle: "Practices and methods to transform your reality and the world.",
                href: "/resources/digital-portals",
                Icon: Stars02,
            },
        ],
    },
    {
        title: "Support",
        items: [
            {
                title: "Where to Study",
                subtitle: "Find a study center or an online course around the world.",
                href: "/",
                Icon: FileCode01,
            },
            {
                title: "Join our Forum",
                subtitle: "Engage in conversations and share knowledge with others.",
                href: "/",
                Icon: Stars02,
            },
        ],
    },
];

export const DropdownMenuLearningPaths = () => {
    return (
        <div className="px-3 pb-2 md:max-w-200 md:p-0">
            <nav className="overflow-hidden rounded-xl bg-brand-100 dark:bg-brand-900 drop-shadow-lg ring-1 ring-secondary_alt md:rounded-3xl md:drop-shadow-2xl dark:md:drop-shadow-gray-950">
                <div className="flex flex-col gap-5 rounded-xl bg-brand-25 dark:bg-brand-950 pt-4 ring-1 ring-secondary md:gap-8 md:rounded-t-2xl md:p-6 md:pt-5">
                    <div className="flex flex-col items-center gap-1 px-4 md:p-0">
                        <h4 className="pt-4 text-4xl font-light">STUDY and PRACTICE</h4>
                        <p className="text-sm text-tertiary">Paths of study and practice by the living masters of realization for our modern societies.</p>
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row md:gap-8 md:py-0">
                        <div className="-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0">
                            <h3 className="text-sm font-semibold text-brand-700 dark:text-brand-300">Quick Links</h3>
                            <ul className="flex flex-col gap-3">
                                {[
                                    { title: "Last Learning", href: "#" },
                                    { title: "New Additions", href: "#" },
                                    { title: "All Learning Paths", href: "#" },
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
                                    <h3 className="mb-2 px-4 text-sm font-semibold text-brand-700 dark:text-brand-300 md:px-0">{column.title}</h3>
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
