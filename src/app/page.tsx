import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[100vh] max-w-full p-2 flex flex-col items-center justify-center gap-2">
      <Link
        href="/login"
        className="py-2 px-6 text-white text-[1.2rem] bg-[#F99417] w-[10%] rounded-[.5rem] text-center"
      >
        Prijavi se
      </Link>
      <Link
        href="/signup"
        className="py-2 px-6 text-white text-[1.2rem] bg-[#F99417] w-[10%] rounded-[.5rem] text-center"
      >
        Registruj se
      </Link>
    </div>
  );
}
