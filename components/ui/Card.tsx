import { JSX } from "preact";

export default function Card(
  { children }: { children: JSX.Element },
) {
  return (
    <div className="border-l-4 border-teal-500 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md transition-transform hover:scale-105 duration-300 ease-in-out">
      {children}
    </div>
  );
}
