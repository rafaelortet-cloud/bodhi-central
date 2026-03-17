import { CheckCircle, Zap } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

export const PlansTab = () => {
    return (
        <div className="flex flex-col gap-8 px-4 lg:px-8">
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Subscription plan</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage your subscription, billing cycle, and plan features.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-5">
                {/* Current Plan Card */}
                <div className="flex flex-col gap-6 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary ring-inset">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold text-primary">Pro Plan</h3>
                                <Badge size="sm" type="modern">
                                    Active
                                </Badge>
                            </div>
                            <p className="mt-1 text-sm text-secondary">Our most popular plan for professionals.</p>
                        </div>
                        <div className="flex items-end gap-1 sm:flex-col sm:items-end sm:gap-0">
                            <div className="flex items-baseline gap-1">
                                <span className="text-display-sm font-semibold text-primary">$2</span>
                                <span className="text-sm text-secondary">/ month</span>
                            </div>

                        </div>
                    </div>

                    <hr className="h-px border-none bg-border-secondary" />

                    {/* Usage limits */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-secondary">Storage usage</span>
                            <span className="text-sm font-medium text-secondary">8.2 GB / 10 GB</span>
                        </div>
                        <ProgressBar value={82} max={100} min={0} />
                        <p className="text-sm text-tertiary">You are approaching your storage limit. Consider upgrading for unlimited storage.</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-secondary">Your plan securely renews on <span className="font-semibold text-primary">Oct 12, 2026</span>.</p>
                        <div className="flex items-center gap-3">
                            <Button size="md" color="secondary">
                                Cancel plan
                            </Button>
                            <Button size="md" color="primary">
                                Upgrade plan
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Upgrade Options */}
                <div className="mt-4 flex flex-col gap-4">
                    <h4 className="text-md font-semibold text-primary">Available plans</h4>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {/* Basic Plan */}
                        <div className="flex flex-col justify-between gap-6 rounded-xl bg-primary p-6 shadow-xs ring-1 ring-secondary ring-inset">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h5 className="text-md font-semibold text-primary">Basic</h5>
                                    <p className="mt-1 text-sm text-secondary">For hobbyists and side projects.</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-display-xs font-semibold text-primary">Free</span>
                                </div>
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> 1 Project
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> Basic Support
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> 1 GB Storage
                                    </li>
                                </ul>
                            </div>
                            <Button size="md" color="secondary" className="w-full">
                                Downgrade
                            </Button>
                        </div>

                        {/* Pro Plan (Current) */}
                        <div className="flex flex-col justify-between gap-6 rounded-xl bg-primary p-6 shadow-xs ring-2 ring-brand ring-inset">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-md font-semibold text-brand-primary">Pro</h5>
                                        <Badge size="sm" type="modern">Current</Badge>
                                    </div>
                                    <p className="mt-1 text-sm text-secondary">Everything you need as a pro.</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-display-xs font-semibold text-primary">$2</span>
                                    <span className="text-sm text-secondary">/mo</span>
                                </div>
                                <ul className="flex flex-col gap-3">
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> Unlimited Projects
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> Priority Support
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-secondary">
                                        <CheckCircle className="size-5 shrink-0 text-brand-secondary" /> 10 GB Storage
                                    </li>
                                </ul>
                            </div>
                            <Button size="md" color="secondary" isDisabled className="w-full">
                                Current Plan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
