import Bio from "../islands/Bio.tsx";
import Experience from "../islands/Experience.tsx";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 py-8 ">
          <Bio />

          <Experience />
        </div>
      </main>

      <footer className="mt-auto">
        <div className="container mx-auto p-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Binod Nepali
          </p>
        </div>
      </footer>
    </>
  );
}
