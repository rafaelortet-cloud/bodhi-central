import { BookClosed, FileCode01, LifeBuoy01, PlayCircle, Stars02 } from "@untitledui/icons";
import { NavMenuItemLink } from "./base-components/nav-menu-item";

const items = [
    {
        title: "Scripture Overview",
        subtitle: "The Buddhist scriptures at a glance.",
        href: "/scripture",
        Icon: BookClosed,
    },
    {
        title: "Collections",
        subtitle: "Browse the collections most popular and loved by thoughsands.",
        href: "/collections",
        Icon: Stars02,
    },
    {
        title: "Traditions",
        subtitle: "Many traditions with one open goal.",
        href: "/traditions",
        Icon: PlayCircle,
    },
    {
        title: "Connections",
        subtitle: "Learn about the connections between Buddhism and the world.",
        href: "/connections",
        Icon: FileCode01,
    },
    {
        title: "Help and support",
        subtitle: "Need help with something? Our expert team is here to help 24/7.",
        href: "/help",
        Icon: LifeBuoy01,
    },
];

export const DropdownMenuSimple = () => {
    return (
        <div className="px-3 pb-2 md:max-w-84 md:p-0">
            <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-secondary_alt md:p-2 md:shadow-lg">
                <ul className="flex flex-col gap-0.5">
                    {items.map(({ title, subtitle, href, Icon }) => (
                        <li key={title}>
                            <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
