import LinkForm from "@/components/LinkForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-4">
      <div className="w-full max-w-2xl">
        <LinkForm />
      </div>
    </main>
  );
}
