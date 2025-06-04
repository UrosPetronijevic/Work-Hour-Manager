import NavigationMain from "@/_components/_navigations/NavigationMain";
import LogedinUserInfo from "@/_components/LogedinUserInfo";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>
        <LogedinUserInfo />
      </header>

      <nav>
        <NavigationMain />
      </nav>

      <main>{children}</main>
    </div>
  );
}
