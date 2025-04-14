import HomePage from "@/Components/HomePage";
import NavigationMain from "@/Components/Navigation/NavigationMain";

export default function MainPage() {
  return (
    <div className="min-h-screen max-w-screen">
      <NavigationMain />
      <HomePage />
    </div>
  );
}
