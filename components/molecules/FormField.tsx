import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

/**
 * Labelled form input — label above + bordered input.
 */
export default function FormField({
  label,
  type = "text",
  placeholder,
  required,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <label className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint block">
        {label}
      </label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className={cn(
          "w-full bg-field-bg border border-field-border",
          "text-fg-base font-sans text-[0.82rem] px-4 py-3",
          "outline-none placeholder:text-fg-faint",
          "transition-colors duration-200 focus:border-accent/50"
        )}
      />
    </div>
  );
}
