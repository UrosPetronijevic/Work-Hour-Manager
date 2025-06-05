import NavigationMain from "@/_components/_navigations/NavigationMain";
import LogedinUserInfo from "@/_components/LogedinUserInfo";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="flex flex-col gap-1">
        <LogedinUserInfo />
        <nav>
          <NavigationMain />
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
