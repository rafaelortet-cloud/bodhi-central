import { CreditCard01, Download01, Mail01, Plus } from "@untitledui/icons";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { SectionLabel } from "@/components/application/section-headers/section-label";
import { Table, TableCard } from "@/components/application/table/table";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

const invoices = [
    { id: "1", invoiceNumber: "INV-2026-003", amount: "USD $2.00", date: "Oct 12, 2025", status: "Paid" },
    { id: "2", invoiceNumber: "INV-2025-011", amount: "USD $24.00", date: "Oct 12, 2024", status: "Paid" },
    { id: "3", invoiceNumber: "INV-2024-009", amount: "USD $24.00", date: "Oct 12, 2023", status: "Paid" },
];

export const BillingTab = () => {
    return (
        <div className="flex flex-col gap-8 px-4 lg:px-8">
            <SectionHeader.Root>
                <SectionHeader.Group>
                    <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                        <SectionHeader.Heading>Billing</SectionHeader.Heading>
                        <SectionHeader.Subheading>Manage your payment methods and billing history.</SectionHeader.Subheading>
                    </div>
                </SectionHeader.Group>
            </SectionHeader.Root>

            <div className="flex flex-col gap-8">
                {/* Payment Method Section */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Payment method" description="Update your billing information." />

                    <div className="flex flex-col items-start gap-4 rounded-xl bg-primary p-5 shadow-xs ring-1 ring-secondary ring-inset sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-lg border border-secondary bg-primary_alt shadow-xs">
                                <CreditCard01 className="size-6 text-fg-quaternary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-primary">Visa ending in 4242</span>
                                <span className="text-sm text-secondary">Expiry 06/2028</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button size="sm" color="secondary">
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Billing Email */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Billing email" description="Where should we send your receipts?" />

                    <div className="w-full max-w-md">
                        <Input name="billingEmail" type="email" aria-label="Billing email" size="md" defaultValue="olivia@untitledui.com" icon={Mail01} />
                    </div>
                </div>

                <hr className="h-px w-full border-none bg-border-secondary" />

                {/* Invoice History */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(200px,280px)_1fr] lg:gap-8">
                    <SectionLabel.Root size="sm" title="Billing history" description="Download previous invoices and receipts." />

                    <div className="w-full">
                        <TableCard.Root>
                            <TableCard.Header 
                                title="Invoices" 
                                contentTrailing={
                                    <Button size="sm" color="secondary" iconLeading={<Download01 />}>
                                        Download all
                                    </Button>
                                } 
                            />
                            <Table aria-label="Billing history table" selectionMode="none">
                                <Table.Header>
                                    <Table.Head id="invoice">Invoice</Table.Head>
                                    <Table.Head id="amount">Amount</Table.Head>
                                    <Table.Head id="date">Date</Table.Head>
                                    <Table.Head id="status">Status</Table.Head>
                                    <Table.Head id="actions"><span className="sr-only">Actions</span></Table.Head>
                                </Table.Header>
                                <Table.Body items={invoices}>
                                    {(item) => (
                                        <Table.Row id={item.id}>
                                            <Table.Cell>
                                                <span className="font-medium text-primary">{item.invoiceNumber}</span>
                                            </Table.Cell>
                                            <Table.Cell>{item.amount}</Table.Cell>
                                            <Table.Cell>{item.date}</Table.Cell>
                                            <Table.Cell>
                                                <Badge size="sm" type="color" color="success">
                                                    {item.status}
                                                </Badge>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className="flex justify-end">
                                                    <Button size="sm" color="link-gray" iconLeading={<Download01 />}>
                                                        <span className="sr-only">Download {item.invoiceNumber}</span>
                                                    </Button>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </TableCard.Root>
                    </div>
                </div>
            </div>
        </div>
    );
};
