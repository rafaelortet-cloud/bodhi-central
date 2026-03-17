import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { SectionFooter } from "@/components/application/section-footers/section-footer";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Toggle } from "@/components/base/toggle/toggle";

export const NotificationsTab = () => {
    return (
        <Form
            className="flex flex-col gap-6 px-4 lg:px-8"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Notifications Form data:", data);
            }}
        >
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Notifications</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage when and how you receive notifications.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Email Notifications */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Email notifications" description="Receive emails about your account activity and security." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        <Toggle 
                            name="communication_emails" 
                            size="sm" 
                            label="Communication emails" 
                            hint="Receive emails about unusual activity, billing updates, and account changes." 
                            defaultSelected 
                        />
                        <Toggle 
                            name="marketing_emails" 
                            size="sm" 
                            label="Marketing emails" 
                            hint="Receive emails about new features, product updates, and promotional offers." 
                        />
                        <Toggle 
                            name="social_emails" 
                            size="sm" 
                            label="Social emails" 
                            hint="Receive emails when someone mentions you, comments on your post, or sends a message." 
                            defaultSelected 
                        />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Push Notifications */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Push notifications" description="Receive push notifications in your browser or on your device." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        <Toggle 
                            name="push_mentions" 
                            size="sm" 
                            label="Mentions and replies" 
                            hint="Get notified when someone replies to your comment or mentions you." 
                            defaultSelected 
                        />
                        <Toggle 
                            name="push_messages" 
                            size="sm" 
                            label="Direct messages" 
                            hint="Get notified when a team member sends you a direct message." 
                            defaultSelected 
                        />
                        <Toggle 
                            name="push_tasks" 
                            size="sm" 
                            label="Task assignments" 
                            hint="Get notified when you are assigned a new task." 
                        />
                    </div>
                </div>

                 <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Do Not Disturb */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Do not disturb" description="Pause all non-essential notifications during specified hours." />

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        <Toggle 
                            name="do_not_disturb" 
                            size="sm" 
                            label="Enable do not disturb mode" 
                            hint="Mute all marketing and social notifications. Critical security alerts will still be sent." 
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
                        Save changes
                    </Button>
                </SectionFooter.Actions>
            </SectionFooter.Root>
        </Form>
    );
};
