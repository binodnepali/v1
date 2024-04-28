import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main class="container mx-auto px-4">
        <h1 class="text-4xl font-bold">Binod Nepali</h1>
        <p class="text-2xl font-semibold">Software Engineer</p>
      </main>

      <footer class="mt-auto">
        <div class="container mx-auto p-4">
          <p class="text-center">
            &copy; {new Date().getFullYear()} Binod Nepali
          </p>
        </div>
      </footer>
    </>
  );
}
