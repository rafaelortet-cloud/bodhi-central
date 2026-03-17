import { Mail01 } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { RadioGroup, RadioButton } from "@/components/base/radio-buttons/radio-buttons";

export const EmailTab = () => {
    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Email Form data:", data);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Email</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage the email addresses associated with your account.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Primary Email */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Primary email" description="This email is used for account access and security notices." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="primaryEmail" 
                            type="email" 
                            aria-label="Primary email" 
                            size="sm" 
                            defaultValue="olivia@untitledui.com" 
                            icon={Mail01} 
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Alternative Email */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Alternative email" description="Add a backup email to recover your account if you lose access." />

                    <div className="flex w-full max-w-md items-start gap-4">
                        <div className="flex-1">
                            <Input 
                                name="altEmail" 
                                type="email" 
                                aria-label="Alternative email" 
                                size="sm" 
                                placeholder="Backup email address" 
                                icon={Mail01} 
                            />
                        </div>
                        <Button size="sm" color="secondary" type="button">
                            Add email
                        </Button>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Default Email Address for Communication */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Communication preferences" description="Which email address should we use for product updates and marketing?" />

                    <div className="w-full max-w-md">
                        <RadioGroup name="marketingEmail" defaultValue="primary">
                            <RadioButton 
                                value="primary" 
                                label="Primary email" 
                                hint="olivia@untitledui.com" 
                            />
                            <RadioButton 
                                value="alternate" 
                                label="Alternative email" 
                                hint="No alternative email added yet" 
                                isDisabled
                            />
                        </RadioGroup>
                    </div>
                </div>
            </div>

            <SectionFooter.Root>
                <Button size="md" color="link-gray" type="button">
                    Reset
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
