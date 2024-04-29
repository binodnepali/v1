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

              {exp.nestedExperiences.map((ex) => (
                <div className="mt-2">
                  <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {ex.title}
                  </h5>
                  <p className="text-lg text-slate-500 dark:text-slate-400">
                    {`${formateDate(ex.starts_at)} - ${
                      formateDate(ex.ends_at)
                    }`}
                  </p>

                  <p className="mt-2 text-lg text-slate-700 dark:text-slate-100 whitespace-pre-line">
                    {ex.description}
                  </p>

                  {ex.skills && (
                    <div className="mt-2 flex flex-col gap-2 text-base text-slate-500 dark:text-slate-400">
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        Skills
                      </p>

                      <div className="flex flex-wrap gap-2 text-slate-500 dark:text-slate-400">
                        {ex.skills.map((skill, i) => {
                          return (
                            <span
                              key={skill}
                              //choose secondary color for text
                              className="text-emerald-500 dark:text-emerald-400"
                            >
                              {` ${skill}${
                                i !== ex.skills.length - 1 ? "," : ""
                              }`}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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

function formateDate(
  date: {
    month: number;
    year: number;
  } | null,
) {
  if (!date) return "Present";

  return `${MONTHS_MAP[date.month]} ${date.year}`;
}

const MONTHS_MAP: {
  [key: string]: string;
} = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
