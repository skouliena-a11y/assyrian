import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-white",
    outline: "border border-zinc-700 text-white hover:bg-zinc-900"
  } as const;
  return <button className={clsx(base, variants[variant], className)} {...props} />;
}
