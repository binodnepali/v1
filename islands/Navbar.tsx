import { useEffect, useState } from "preact/hooks";

import { Button } from "../components/Button.tsx";
import { Link } from "../components/Link.tsx";

import { IconLinkedIn } from "../components/IconLinkedIn.tsx";
import { IconEmail } from "../components/IconEmail.tsx";
import { IconGitHub } from "../components/IconGitHub.tsx";

export default function Navbar({
  github_profile_id,
  linkedin_profile_id,
  email,
}: {
  linkedin_profile_id: string;
  github_profile_id: string;
  email: string;
}) {
  const { isDark, toggleTheme } = useTheme();

  const links = [
    {
      href: linkedin_profile_id,
      label: "linkedin",
      icon: <IconLinkedIn className="fill-current" />,
    },
    {
      href: `mailto:${email}`,
      label: "email",
      icon: <IconEmail className="fill-current" />,
    },
    {
      href: github_profile_id,
      label: "github",
      icon: <IconGitHub className="fill-current" />,
    },
  ];

  return (
    <nav class="h-14 flex items-center px-4">
      <div class="w-full flex flex-grow-1 items-center">
        <Link
          class="font-semibold text-2xl text-teal-500"
          href="/"
          label="b.n"
        >
          B.N
        </Link>
      </div>

      <div class="flex gap-4">
        {links.map(({ href, label, icon }) => (
          <Link
            href={href}
            key={href}
            label={label}
            target="_blank"
          >
            {icon}
          </Link>
        ))}
      </div>

      <Button class="ml-2" onClick={toggleTheme}>
        <div class="flex">
          <span class="material-symbols-outlined">
            {isDark ? "dark_mode" : "light_mode"}
          </span>
        </div>
      </Button>
    </nav>
  );
}

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return {
    isDark,
    toggleTheme: () => {
      const currentDark = !isDark;

      setIsDark(currentDark);

      if (currentDark) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    },
  };
}
