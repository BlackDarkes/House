import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export const Button = ({ children, onClick, ariaLabel, type, className }: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};
