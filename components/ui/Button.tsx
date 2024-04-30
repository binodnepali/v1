import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-2 py-1 rounded ${props.class}`}
    />
  );
}
