import Bio from "../components/Bio.tsx";
import Experience from "../components/Experience.tsx";
import Navbar from "../islands/Navbar.tsx";
import { getProfile } from "../src/server/getProfile.ts";

export default async function Home() {
  const data = await getProfile();

  return (
    <>
      <header>
        <Navbar
          github_profile_id={data.extra.github_profile_id}
          linkedin_profile_id={data.extra.linkedin_profile_id}
          email={data.email}
        />
      </header>

      <main className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 py-8 ">
          <Bio data={data} />

          <Experience data={data} />
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
