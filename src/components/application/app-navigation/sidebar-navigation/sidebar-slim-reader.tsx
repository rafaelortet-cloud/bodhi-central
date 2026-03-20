"use client";

import type { FC } from "react";
import { useState } from "react";
import { LifeBuoy01, LogOut01, Settings01 } from "@untitledui/icons";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { cx } from "@/utils/cx";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavItemBase } from "../base-components/nav-item";
import { NavItemButton } from "../base-components/nav-item-button";
import { NavList } from "../base-components/nav-list";
import type { NavItemType } from "../config";

interface SidebarNavigationSlimProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: (NavItemType & { icon: FC<{ className?: string }> })[];
    /** List of footer items to display. */
    footerItems?: (NavItemType & { icon: FC<{ className?: string }> })[];
}

export const SidebarNavigationSlim = ({ activeUrl, items, footerItems = [] }: SidebarNavigationSlimProps) => {
    const activeItem = [...items, ...footerItems].find((item) => item.href === activeUrl || item.items?.some((subItem) => subItem.href === activeUrl));
    const [currentItem, setCurrentItem] = useState(activeItem || items[1]);
    const [isHovering, setIsHovering] = useState(false);

    const MAIN_SIDEBAR_WIDTH = 88;

    const mainSidebar = (
        <aside
            style={{
                width: MAIN_SIDEBAR_WIDTH,
            }}
            className={cx(
                "group flex h-full max-h-full max-w-full overflow-y-auto pt-12 pb-4 px-2 transition duration-100 ease-linear",
            )}
        >
            <div
                className={cx(
                    "flex w-auto flex-col justify-between rounded-xl border border-secondary ring-1 ring-secondary transition duration-300 ring-inset",
                )}
            >

                <ul className="mt-4 flex flex-col gap-0.5 px-3">
                    {items.map((item) => (
                        <li key={item.label}>
                            <NavItemButton
                                size="md"
                                current={currentItem.href === item.href}
                                href={item.href}
                                label={item.label || ""}
                                icon={item.icon}
                                onClick={() => setCurrentItem(item)}
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex flex-col gap-4 px-3 py-5">
                    {footerItems.length > 0 && (
                        <ul className="flex flex-col gap-0.5">
                            {footerItems.map((item) => (
                                <li key={item.label}>
                                    <NavItemButton
                                        size="md"
                                        current={currentItem.href === item.href}
                                        label={item.label || ""}
                                        href={item.href}
                                        icon={item.icon}
                                        onClick={() => setCurrentItem(item)}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop sidebar navigation */}
            <div
                className="z-50 hidden lg:fixed lg:inset-y-0 lg:top-8 lg:bottom-0 lg:left-0 lg:flex"
                onPointerEnter={() => setIsHovering(true)}
            >
                {mainSidebar}
            </div>

            {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
            <div
                style={{
                    paddingLeft: MAIN_SIDEBAR_WIDTH,
                }}
                className="invisible hidden lg:sticky lg:top-16 lg:bottom-0 lg:left-0 lg:block"
            />

            {/* Mobile header navigation */}
            <MobileNavigationHeader>
                <aside className="group flex h-full max-h-full w-full max-w-full flex-col justify-between overflow-y-auto bg-primary pt-4">
                    <div className="px-4">
                        <UntitledLogo className="h-8" />
                    </div>

                    <NavList items={items} />

                    <div className="mt-auto flex flex-col gap-5 px-2 py-4">
                        <div className="flex flex-col gap-2">
                            <NavItemBase current={activeUrl === "/support"} type="link" href="/support" icon={LifeBuoy01}>
                                Support
                            </NavItemBase>
                            <NavItemBase current={activeUrl === "/settings"} type="link" href="/settings" icon={Settings01}>
                                Settings
                            </NavItemBase>
                        </div>

                        <div className="relative flex items-center gap-3 border-t border-secondary pt-6 pr-8 pl-2">
                            <AvatarLabelGroup
                                status="online"
                                size="md"
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                title="Olivia Rhye"
                                subtitle="olivia@untitledui.com"
                            />

                            <div className="absolute top-1/2 right-0 -translate-y-1/2">
                                <Button
                                    size="sm"
                                    color="tertiary"
                                    iconLeading={<LogOut01 className="size-5 text-fg-quaternary transition-inherit-all group-hover:text-fg-quaternary_hover" />}
                                    className="p-1.5!"
                                />
                            </div>
                        </div>
                    </div>
                </aside>
            </MobileNavigationHeader>
        </>
    );
};
