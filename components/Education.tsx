import { Education } from "../src/types/Profile.ts";
import Card from "./ui/Card.tsx";

export default function EducationSection({ educations }: {
  educations: Education[];
}) {
  return (
    <section className="w-full sm:w-1/2">
      <h4 className="text-2xl font-semibold text-teal-500">Education</h4>
      <div className="grid grid-cols-1 gap-4">
        {educations.map((education, i) => (
          <div
            className="mt-4"
            key={i}
          >
            <Card>
              <>
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-100 uppercase">
                  {education.school}
                </p>
                <p className="text-base text-slate-900 dark:text-slate-100">
                  {education.degree_name} - {education.field_of_study}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {`${education.starts_at.year} - ${education.ends_at.year}`}
                </p>
              </>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
