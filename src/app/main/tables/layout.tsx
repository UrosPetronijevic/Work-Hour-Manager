import TableNavigation from "@/_components/_navigations/TableNavigation";

export default function TableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-2">
      <nav className="py-2 px-4">
        <TableNavigation />
      </nav>
      <main>{children}</main>
    </div>
  );
}
