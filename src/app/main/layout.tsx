import NavigationMain from "@/Components/Navigation/NavigationMain";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 flex-col p-8">
      <div className="flex bg-red-100 justify-between">
        <span className="py-2 px-4 bg-amber-300 text-2xl">Date</span>
        <span className="py-2 px-4 bg-blue-300 text-2xl">Username</span>
      </div>
      <div>
        <NavigationMain />
        {children}
      </div>
    </div>
  );
}
