const DOB = 1995;
const JOB_START_YEAR = 2019;
const CURRENT_ROLE = "Frontend Software Engineer";
const CURRENT_EMPLOYER = "adidas";
const CURRENT_EMPLOYER_URL = "https://www.linkedin.com/company/adidas/";
const CURRENT_LOCATION = "Sittard-Geleen, the Netherlands";

export default function Bio() {
  const age = new Date().getFullYear() - DOB;
  const yearOfExperience = new Date().getFullYear() - JOB_START_YEAR;

  return (
    <div className="w-full sm:w-1/2">
      <div
        className="flex flex-col items-center justify-center gap-2 mt-4 mb-8"
        title="Binod Nepali"
      >
        <img
          src="/profile.webp"
          loading="eager"
          height="240"
          width="240"
          alt="profile"
        />

        <h3 className="text-3xl font-semibold text-teal-500">
          Binod Nepali
        </h3>

        <p className="text-lg text-slate-500 dark:text-slate-400">
          {age} years old | Nepalese-Dutch
        </p>

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Frontend Software Engineer @ adidas"
          dangerouslySetInnerHTML={{
            __html:
              `${CURRENT_ROLE} @ <a href="${CURRENT_EMPLOYER_URL}" target="_blank" rel="noopener noreferrer"
              class="decoration-teal-500 dark:decoration-teal-400 hover:underline transition-colors duration-200"
              >${CURRENT_EMPLOYER}</a>`,
          }}
        />

        <p
          className="text-lg text-slate-500 dark:text-slate-400"
          title="Sittard-Geleen, Netherlands"
        >
          {CURRENT_LOCATION}
        </p>
      </div>

      <div>
        <h4 className="text-2xl font-semibold text-teal-500">About Me</h4>

        <p className="text-lg">
          {`Frontend Software Engineer with more than ${yearOfExperience} years of experience, I am
          passionate about creating visually appealing and functional websites
          using the latest web technologies. Whether working independently or
          collaboratively as part of a team, I thrive on tackling challenges and
          delivering exceptional work. I am also a strong believer in
          contributing to the community, and my personal projects on Github
          demonstrate my abilities to create example templates and solve complex
          coding problems. Additionally, my portfolio site and open-source
          project showcase my expertise in frameworks such as React, Next.js,
          Vue, Nuxt, and Fresh (a web framework for Deno). I am always eager to
          learn and take on new challenges, and my collaborative nature and
          dedication to continuous learning make me a valuable asset to any
          team.`}
        </p>
      </div>
    </div>
  );
}
