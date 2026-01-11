"use client";

import { useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";

export const ContactSimpleForm03 = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="grid grid-cols-1 bg-primary lg:grid-cols-2">
            <div className="w-full px-4 py-16 md:px-8 md:py-24">
                <div className="mx-auto md:max-w-120">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Get in touch!</h2>
                    <p className="mt-4 text-lg whitespace-pre-line text-tertiary md:mt-5 md:text-xl">
                        We'd love to hear from you. Please fill out this form.You can also reach out to us at {" "}
                        <Button color="link-color" size="xl" href="mailto:info@bodhicentral.com" className="text-lg font-medium md:text-xl">
                            info@bodhicentral.com
                        </Button>
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <Input isRequired size="md" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                <Input isRequired size="md" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                            </div>
                            <Input isRequired size="md" name="email" label="Email" type="email" placeholder="you@company.com" />
                            <TextArea isRequired name="message" label="Message" placeholder="Leave us a message..." rows={5} />
                            <fieldset className="max-md:hidden">
                                <legend className="text-sm font-medium text-secondary">Topics</legend>
                                <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-2">
                                    <Checkbox name="scripture" size="md" label="Scripture" />
                                    <Checkbox name="learning-paths" size="md" label="Learning paths" />
                                    <Checkbox name="resources" size="md" label="Resources" />
                                    <Checkbox name="about" size="md" label="About" />
                                    <Checkbox name="legal" size="md" label="Legal" />
                                </div>
                            </fieldset>
                        </div>

                        <Button type="submit" size="xl">
                            Send message
                        </Button>
                    </Form>
                </div>
            </div>

            <div className="relative max-lg:hidden">
                <img
                    src="https://www.untitledui.com/marketing/woman-artist.webp"
                    alt="Woman artist"
                    className="max-size-full absolute inset-0 h-full object-cover"
                />
            </div>
        </section>
    );
};
