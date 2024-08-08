"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={pending}
      {...props}
    >
      {pending && <span className="loading loading-dots loading-md"></span>}
      {children}
    </button>
  );
};

export default FormSubmitButton;
