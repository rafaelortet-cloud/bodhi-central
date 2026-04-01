import { Button } from "@/components/base/buttons/button";

export const CTACenteredPlansSignup = () => {
    return (
        <section className="bg-brand-section py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary_on-brand md:text-display-md">Sign up for a free account</h2>
                    <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 md:text-xl">Join thousands of people using Bodhi Central..</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-8 md:flex-row md:self-center">
                        <Button href="/plans" color="secondary" size="xl" className="shadow-xs! ring-0">
                            Plans
                        </Button>
                        <Button href="/sign-up" size="xl">Sign up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
