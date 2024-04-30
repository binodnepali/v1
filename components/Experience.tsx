import SeeMoreExperiences from "../islands/SeeMoreExperiences.tsx";
import { Experience } from "../src/types/Profile.ts";
import Card from "./ui/Card.tsx";

type MapppedExperience = Experience & {
  nestedExperiences: Experience[];
};

export default function ExperienceSection({ experiences }: {
  experiences: Experience[];
}) {
  const mappedExperiences = experiences.map((exp) => ({
    ...exp,
    nestedExperiences: [],
  })).reduce<MapppedExperience[]>((acc, exp) => {
    const index = acc.findIndex((e) => e.company === exp.company);

    if (index === -1) {
      acc.push(exp);
      acc[acc.length - 1].nestedExperiences.push(exp);
    } else {
      acc[index].nestedExperiences.push(exp);
    }

    return acc;
  }, []);

  return (
    <section className="w-full sm:w-1/2">
      <h4 className="text-2xl font-semibold text-teal-500">Experience</h4>

      {mappedExperiences.map((exp, i) => (
        <div
          className="mt-4"
          key={i}
        >
          <Card>
            <>
              <p className="text-xl font-semibold text-slate-900 dark:text-slate-100 uppercase">
                {exp.company}
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Full time - {calculateWorkDuration(
                  exp.nestedExperiences[
                    exp.nestedExperiences.length - 1
                  ].starts_at,
                  exp.nestedExperiences[0].ends_at,
                )}
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                {exp.location}
              </p>

              <SeeMoreExperiences experiences={exp.nestedExperiences} />
            </>
          </Card>
        </div>
      ))}
    </section>
  );
}

function calculateWorkDuration(
  starts_at: {
    day: number;
    month: number;
    year: number;
  },
  ends_at: {
    day: number;
    month: number;
    year: number;
  } | null,
) {
  const startDate = new Date(
    starts_at.year,
    starts_at.month,
    starts_at.day,
  );
  const endDate = ends_at
    ? new Date(ends_at.year, ends_at.month + 1, ends_at.day)
    : new Date();

  const diff = endDate.getTime() - startDate.getTime();
  const year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  if (year === 0) {
    return `${month} months`;
  }

  return `${year} yrs ${month} months`;
}
