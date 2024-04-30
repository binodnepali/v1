import { BirthDate } from "../src/types/Profile.ts";

export default function BioSection(
  {
    birth_date,
    job_start_date,
    profile_pic_url,
    full_name,
    nationality,
    occupation,
    city,
    country_full_name,
    summary,
  }: {
    birth_date: BirthDate;
    job_start_date: BirthDate;
    profile_pic_url: string;
    full_name: string;
    nationality: string;
    occupation: string;
    city: string;
    country_full_name: string;
    summary: string;
  },
) {
  const age = new Date().getFullYear() - birth_date.year;
  const yearOfExperience = new Date().getFullYear() - job_start_date.year;

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-2 mt-4 mb-8">
        <img
          src={profile_pic_url}
          loading="eager"
          height="240"
          width="240"
          alt={full_name}
        />

        <h2 className="text-2xl font-semibold text-teal-500">
          {full_name}
        </h2>

        <p className="text-lg text-slate-500 dark:text-slate-400">
          {age} years old | {nationality}
        </p>

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Frontend Software Engineer @ adidas"
        >
          {occupation}
        </p>

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Sittard-Geleen, Netherlands"
        >
          {`${city}, ${country_full_name}`}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-teal-500">About me</h3>

        <p className="text-base whitespace-pre-line">
          {summary.replace(
            "{{year_of_experience}}",
            `${yearOfExperience}`,
          )}
        </p>
      </div>
    </section>
  );
}
