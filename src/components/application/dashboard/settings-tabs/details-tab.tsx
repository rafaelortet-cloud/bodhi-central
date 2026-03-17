import { Mail01, Phone, Clock } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";

const timezones = [
    { id: "pac", label: "Pacific Standard Time (PST)" },
    { id: "est", label: "Eastern Standard Time (EST)" },
    { id: "utc", label: "Coordinated Universal Time (UTC)" },
    { id: "gmt", label: "Greenwich Mean Time (GMT)" },
    { id: "cet", label: "Central European Time (CET)" },
];

export const DetailsTab = () => {
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
                        <SectionHeader.Heading>Personal info</SectionHeader.Heading>
                        <SectionHeader.Subheading>Update your personal details here.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Name */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Name" description="Your legal given and family name." />

                    <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
                        <Input name="firstName" aria-label="First name" size="sm" placeholder="First name" />
                        <Input name="lastName" aria-label="Last name" size="sm" placeholder="Last name" />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Email Address */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Email address" description="Used for sign-in and account recovery." />

                    <div className="w-full max-w-md">
                         <Input name="email" type="email" aria-label="Email address" size="sm" placeholder="olivia@untitledui.com" icon={Mail01} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Phone Number */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Phone number" description="Used for two-factor authentication and urgent alerts." />

                    <div className="w-full max-w-md">
                         <Input name="phone" type="tel" aria-label="Phone number" size="sm" placeholder="+1 (555) 000-0000" icon={Phone} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Job Title */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Job title" description="What you do at your company." />

                    <div className="w-full max-w-md">
                         <Input name="jobTitle" aria-label="Job title" size="sm" placeholder="Product Designer" />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Timezone */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Timezone" description="Used to format dates and times correctly across your dashboard." />

                    <div className="w-full max-w-md">
                        <Select
                            name="timezone"
                            aria-label="Timezone"
                            size="sm"
                            defaultSelectedKey="pac"
                            items={timezones}
                        >
                            {(item) => (
                                <Select.Item id={item.id} textValue={item.label}>
                                    <div className="flex items-center gap-2">
                                        <Clock className="size-4 text-fg-quaternary" />
                                        <span>{item.label}</span>
                                    </div>
                                </Select.Item>
                            )}
                        </Select>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Danger Zone: Account Deletion */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Account management" description="Permanently delete your account and all of your content." />

                    <div className="flex items-start">
                        <Button color="primary-destructive" size="sm" type="button">
                            Delete account
                        </Button>
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray" type="button">
                    Reset <span className="max-lg:hidden"> to default</span>
                </Button>
                <SectionFooter.Actions>
                    <Button color="secondary" size="md" type="button">
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
