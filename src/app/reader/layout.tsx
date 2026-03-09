export default async function ReaderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="reader-root">
            {children}
        </div>
    );
}
