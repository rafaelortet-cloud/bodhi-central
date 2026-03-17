import { Lock01 } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

export const PasswordTab = () => {
    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Password Form data:", data);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Password</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage your password and security settings.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Current Password */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Current password" description="Enter your current password to make changes." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="currentPassword" 
                            type="password" 
                            aria-label="Current password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* New Password */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="New password" description="Your new password must be at least 8 characters long." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="newPassword" 
                            type="password" 
                            aria-label="New password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                            hint="Must be at least 8 characters."
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Confirm New Password */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Confirm new password" description="Please type your new password again." />

                    <div className="w-full max-w-md">
                        <Input 
                            name="confirmNewPassword" 
                            type="password" 
                            aria-label="Confirm new password" 
                            size="sm" 
                            placeholder="••••••••" 
                            icon={Lock01} 
                        />
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
                        Update password
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};
