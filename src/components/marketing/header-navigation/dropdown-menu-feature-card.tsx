"use client";

import { BookClosed, FileCode01, PlayCircle, Stars02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { NavMenuItemLink } from "./base-components/nav-menu-item";
import { FeatureCardVertical } from "./base-components/nav-menu-item-card";

const items = [
    { title: "Intro to Learning Paths", subtitle: "Mapping the Buddhist learning paths by genres and tracks.", href: "/learning-paths", Icon: BookClosed },
    { title: "Fundamental Paths", subtitle: "A collection of paths to immerse in the fundational aspects of the journey.", href: "/learning-paths/fundamental-paths", Icon: Stars02 },
    { title: "Academic Paths", subtitle: "A selection of plans to immerse in systematic studies of the scriptures.", href: "/learning-paths/academic-paths", Icon: PlayCircle },
    { title: "Practice Paths", subtitle: "Buddhist practices and rituals to traverse the spiritual journey.", href: "/learning-paths/practice-paths", Icon: FileCode01 },
];

export const DropdownMenuFeatureCard = () => {
    return (
        <div className="px-3 pb-2 md:max-w-160 md:p-0">
            <nav className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary_alt md:w-max md:flex-row md:rounded-2xl md:shadow-lg">
                <ul className="flex flex-1 flex-col gap-0.5 pt-2 pb-3 md:p-2">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title + href}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
                <div className="bg-secondary px-1 pt-2 pb-3 md:max-w-76 md:px-2">
                    <FeatureCardVertical
                        href="#"
                        imgSrc="https://www.untitledui.com/marketing/smiling-girl.webp"
                        title="We've just released a new Public path!"
                        description="Check out all the new additions to the Learning Paths."
                        actionsContent={
                            <div className="inline-flex gap-3">
                                <Button color="link-gray" size="sm">
                                    Dismiss
                                </Button>
                                <Button color="link-color" size="sm">
                                    View
                                </Button>
                            </div>
                        }
                    />
                </div>
            </nav>
        </div>
    );
};
