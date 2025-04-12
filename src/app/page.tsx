import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[100vh] max-w-full bg-red-300 p-2 flex flex-col items-center justify-center">
      <Link href="/login">Log in</Link>
      <Link href="/signup">Sign up</Link>
    </div>
  );
}
