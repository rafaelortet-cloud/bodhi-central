"use client";

import { GroupsListing } from "@/app/(marketing)/resources/community/groups-listing";
import { HeaderCenteredGroupListing } from "@/app/(marketing)/resources/community/header-centered-group-listing";

export default function CommunityPage() {

    return (
        <div className="flex w-full h-full flex-col items-center justify-center">
            <HeaderCenteredGroupListing />
            <GroupsListing />
        </div>
    );
}
