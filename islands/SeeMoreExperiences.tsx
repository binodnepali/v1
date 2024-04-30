import { JSX } from "preact/jsx-runtime";

import { Experience } from "../src/types/Profile.ts";
import { useState } from "preact/hooks";
import { Button } from "../components/ui/Button.tsx";

const MIN_NUM_OF_EXPERIENCES = 2;

export default function SeeMoreExperiences(
  { experiences }: {
    experiences: Experience[];
  },
): JSX.Element {
  const [pageSize, setPageSize] = useState<number>(MIN_NUM_OF_EXPERIENCES);

  const filteredExperiences = experiences.slice(0, pageSize);

  const hasMoreExperiences = experiences.length > pageSize;

  const remainingExperiences = experiences.length - pageSize;

  return (
    <>
      {filteredExperiences.map((exp, i) => (
        <SeeMoreExperience key={i} ex={exp} />
      ))}

      {hasMoreExperiences && (
        <Button
          className="mt-2 text-lg font-semibold text-teal-500"
          onClick={() => {
            setPageSize(pageSize + MIN_NUM_OF_EXPERIENCES);
          }}
        >
          {`See ${remainingExperiences} more experience${
            remainingExperiences > 1 ? "s" : ""
          }`}
        </Button>
      )}
    </>
  );
}

function SeeMoreExperience({ ex }: { ex: Experience }) {
  return (
    <div className="mt-2">
      <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {ex.title}
      </h5>
      <p className="text-lg text-slate-500 dark:text-slate-400">
        {`${formateDate(ex.starts_at)} - ${formateDate(ex.ends_at)}`}
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
                  {` ${skill}${i !== ex.skills.length - 1 ? "," : ""}`}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
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
