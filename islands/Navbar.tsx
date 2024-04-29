import { useEffect, useState } from "preact/hooks";

import { Button } from "../components/Button.tsx";
import { Link } from "../components/Link.tsx";

import { IconLinkedIn } from "../components/IconLinkedIn.tsx";
import { IconEmail } from "../components/IconEmail.tsx";
import { IconGitHub } from "../components/IconGitHub.tsx";

const links = [
  {
    href: "https://www.linkedin.com/in/binodnepali",
    label: "linkedin",
    icon: <IconLinkedIn className="fill-current" />,
  },
  {
    href: "mailto:nepalibinod9@gmail.com",
    label: "email",
    icon: <IconEmail className="fill-current" />,
  },
  {
    href: "https://github.com/binodnepali/portfolio",
    label: "github",
    icon: <IconGitHub className="fill-current" />,
  },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

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
