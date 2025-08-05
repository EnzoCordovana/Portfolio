import React from "react";
import "../styles/Button.scss";

interface Props {
  children: string;
  isPrimary?: boolean;
  variant?:
    | "solid"
    | "faded"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow";
  onClick?: () => void;
}
const Button: React.FC<Props> = ({
  children,
  isPrimary = true,
  variant = "solid",
  ...props
}) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`${
        isPrimary ? "btn-primary" : "btn-secondary"
      } btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;