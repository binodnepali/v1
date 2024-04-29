import { Profile } from "../src/types/Profile.ts";

export default function Bio({ data }: {
  data: Profile;
}) {
  const age = new Date().getFullYear() - data.birth_date.year;
  const yearOfExperience = new Date().getFullYear() - data.job_start_date.year;

  return (
    <div className="w-full sm:w-1/2">
      <div className="flex flex-col items-center justify-center gap-2 mt-4 mb-8">
        <img
          src={data.profile_pic_url}
          loading="eager"
          height="240"
          width="240"
          alt={data.full_name}
        />

        <h3 className="text-3xl font-semibold text-teal-500">
          {data.full_name}
        </h3>

        <p className="text-lg text-slate-500 dark:text-slate-400">
          {age} years old | {data.nationality}
        </p>

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Frontend Software Engineer @ adidas"
        >
          {data.occupation}
        </p>

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Sittard-Geleen, Netherlands"
        >
          {`${data.city}, ${data.country_full_name}`}
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-teal-500">Summary</h4>

        <p className="text-lg">
          {data.summary.replace(
            "{{year_of_experience}}",
            yearOfExperience.toString(),
          )}
        </p>
      </div>
    </div>
  );
}
