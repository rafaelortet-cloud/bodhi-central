import { useState } from "react";
import { User01, Globe01 } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { FileTrigger } from "@/components/base/file-upload-trigger/file-upload-trigger";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";

export const ProfileTab = () => {
    const [uploadedAvatar, setUploadedAvatar] = useState<string | undefined>("https://www.untitledui.com/logos/images/ContrastAI.jpg");

    const handleAvatarUpload = (files: FileList | null) => {
        const file = files?.[0];

        if (!file) return;

        setUploadedAvatar(URL.createObjectURL(file));
    };

    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Form data:", data);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Profile</SectionHeader.Heading>
                        <SectionHeader.Subheading>Update your public profile information.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Public Profile Picture */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Profile picture" description="This will be displayed on your profile." />

                    <div className="flex items-center gap-5">
                        <img
                            src={uploadedAvatar}
                            alt="Profile Avatar"
                            className="size-16 rounded-full object-cover ring-1 ring-avatar-contrast-border ring-inset"
                        />

                        <div className="flex gap-4">
                            <FileTrigger acceptedFileTypes={["image/*"]} onSelect={handleAvatarUpload}>
                                <Button size="sm" color="secondary">
                                    Replace avatar
                                </Button>
                            </FileTrigger>
                        </div>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Username */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Username" description="Your unique identifier on the platform." />

                    <div className="w-full max-w-md">
                         <Input name="username" aria-label="Username" size="sm" placeholder="username" icon={User01} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                 {/* Website */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Website / Portfolio" description="A link to your personal site or portfolio." />

                    <div className="w-full max-w-md">
                         <Input name="website" aria-label="Website" size="sm" placeholder="https://example.com" icon={Globe01} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                 {/* Bio */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Bio" description="Write a short introduction." />

                    <div className="flex w-full max-w-2xl flex-col gap-2">
                         <TextArea name="bio" aria-label="Bio" placeholder="Tell us a little bit about yourself..." rows={4} />
                         <span className="text-sm text-secondary">275 characters left</span>
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray">
                    Reset <span className="max-lg:hidden"> to default</span>
                </Button>
                <SectionFooter.Actions>
                    <Button color="secondary" size="md">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" size="md">
                        Save changes
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};
