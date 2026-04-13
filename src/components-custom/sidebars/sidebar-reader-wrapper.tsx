"use client";

import { Menu02, Building08, BookOpen01, Headphones01, Image01, VideoRecorder, AlignLeft01, AlignRight01, Link01, Dataflow01, ArrowRight, Settings03, Download01, GraduationHat02, Bookmark, HelpOctagon } from "@untitledui/icons";
import { SidebarReaderLeft } from "@/components-custom/sidebars/sidebar-reader-left";
import { SidebarReaderRight } from "@/components-custom/sidebars/sidebar-reader-right";
import { openCanonNavigator } from "@/components-custom/navigation/canon-navigation/canon-navigation-modal-wrapper";




export const SidebarReaderWrapper = () => {
    return (
        <>
            <SidebarReaderLeft
                activeUrl=""
                items={[
                    {
                        label: "Canon Navigation",
                        href: "",
                        icon: Building08,
                        onClick: openCanonNavigator,
                    },
                    {
                        label: "Table of Contents",
                        href: "",
                        icon: Menu02,
                    },
                    {
                        label: "Front Matter",
                        href: "",
                        icon: AlignLeft01,
                    },
                    {
                        label: "Main Body Outline",
                        href: "",
                        icon: BookOpen01,
                    },
                    {
                        label: "Back Matter",
                        href: "",
                        icon: AlignRight01,
                    },
                ]}
                footerItems={[
                    {
                        label: "Learning Paths",
                        href: "",
                        icon: GraduationHat02,
                    },
                    {
                        label: "Video Carousel",
                        href: "",
                        icon: VideoRecorder,
                    },
                    {
                        label: "Illustrations Carousel",
                        href: "",
                        icon: Image01,
                    },
                    {
                        label: "Quizzes",
                        href: "",
                        icon: HelpOctagon,
                    },
                    {
                        label: "Audio Carousel",
                        href: "",
                        icon: Headphones01,
                    },
                ]}
            />
            <SidebarReaderRight
                activeUrl=""
                items={[
                    {
                        label: "Connections & Parallels",
                        href: "",
                        icon: Link01,
                    },
                    {
                        label: "Overviews & Recommended Reading",
                        href: "",
                        icon: BookOpen01,
                    },
                    {
                        label: "Bookmarks",
                        href: "",
                        icon: Bookmark,
                    },

                ]}
                footerItems={[
                    {
                        label: "Preferences & Settings",
                        href: "",
                        icon: Settings03,
                    },
                    {
                        label: "Downloads",
                        href: "",
                        icon: Download01,
                    },
                ]}
            />
        </>
    );
}