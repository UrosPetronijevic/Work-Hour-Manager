import TableNavigation from "@/_components/_navigations/TableNavigation";

export default function TableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4">
      <nav>
        <TableNavigation />
      </nav>
      <main>{children}</main>
    </div>
  );
}
