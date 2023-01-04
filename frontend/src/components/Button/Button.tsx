import React, { ReactNode, useMemo } from "react";

type SizeProps = "small" | "medium" | "large";
type TypeProps = "primary" | "secondary" | "minimal";
interface ButtonProps {
  type?: TypeProps;
  size?: SizeProps;
  children?: string;
  icon?: ReactNode;
  position?: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
}
const baseButtonClasses =
  "flex flex-row justify-center items-center gap-2 rounded relative border disabled:cursor-not-allowed group";
const defaultClasses = "hover:opacity-90  transition-all duration-200";
const primaryClasses =
  "bg-primary-500 active:bg-primary-700 focus:border focus:border-solid focus:border-violet-300 border-transparent disabled:opacity-40";
const secondaryClasses =
  "bg-primary-0 border-solid border-secondary-300 hover:border-secondary-400 active:bg-primary-100 disabled:border-primary-100";
const minimalClasses =
  "border-transparent bg-transparent hover:bg-primary-0 active:bg-primary-100 focus:border-solid focus:border focus:border-secondary-200";
const defaultActiveClasses =
  "after:block after:absolute after:rounded after:left-0 after:top-0 after:w-full after:h-full " +
  "after:opacity-0 after:transition-all after:duration-500 " +
  "active:after:opacity-100 active:after:shadow-none active:after:duration-0";
const primaryActiveClasses = "after:shadow-primary";
const secondaryActiveClasses = "after:shadow-secondary";
const minimalActiveClasses = "after:shadow-minimal";

const getSizeClasses = (size: SizeProps) => {
  switch (size) {
    case "small": {
      return "px-4 py-1 h-7";
    }
    case "large": {
      return "px-6 py-3 h-14";
    }
    default: {
      return "px-4 py-2 h-8";
    }
  }
};

const getSizeIconClasses = (size: SizeProps) => {
  switch (size) {
    case "small": {
      return "!p-2";
    }
    case "large": {
      return "!p-4";
    }
    default: {
      return "!p-3";
    }
  }
};

const getTypeClasses = (type: TypeProps) => {
  switch (type) {
    case "primary":
      return primaryClasses + " " + primaryActiveClasses;
    case "minimal":
      return minimalClasses + " " + minimalActiveClasses;
    default:
      return secondaryClasses + " " + secondaryActiveClasses;
  }
};

const getSpanClasses = (type: TypeProps, size: SizeProps) => {
  switch (type) {
    case "primary":
      if (size === "large") {
        return "text-base font-semibold text-primary-0";
      }
      return "text-xs font-semibold text-primary-0";
    case "minimal":
      if (size === "large") {
        return "text-base font-semibold text-secondary-400 group-disabled:text-secondary-200 group-focus:text-secondary-500 group-active:text-secondary-500 group-hover:text-secondary-500";
      }
      return "text-xs font-semibold text-secondary-400 group-disabled:text-secondary-200 group-focus:text-secondary-500 group-active:text-secondary-500 group-hover:text-secondary-500";
    default:
      if (size === "large") {
        return "text-base font-semibold text-secondary-400 group-hover:text-secondary-500 group-active:text-secondary-500 group-disabled:text-primary-100";
      }
      return "text-xs font-semibold text-secondary-400 group-hover:text-secondary-500 group-active:text-secondary-500 group-disabled:text-primary-100";
  }
};

const getIconClasses = (type: TypeProps, size: SizeProps) => {
  const primary = "stroke-primary-0 fill-primary-0";
  const secondary =
    "stroke-secondary-400 fill-secondary-400 group-disabled:stroke-primary-100 group-disabled:fill-primary-100 group-hover:stroke-secondary-500 group-hover:fill-secondary-500 group-active:stroke-secondary-500 group-active:fill-secondary-500";
  const minimal =
    "stroke-secondary-400 fill-secondary-400 group-disabled:stroke-secondary-200 group-disabled:fill-secondary-200 group-focus:stroke-secondary-500 group-focus:fill-secondary-500 group-active:stroke-secondary-500 group-active:fill-secondary-500 group-hover:stroke-secondary-500 group-hover:fill-secondary-500";
  switch (size) {
    case "large":
      if (type === "primary") {
        return "w-4 h-4 " + primary;
      }
      if (type === "secondary") {
        return "w-4 h-4 " + secondary;
      }
      return "w-4 h-4 " + minimal;
    case "small":
      if (type === "primary") {
        return "w-3 h-3 " + primary;
      }
      if (type === "secondary") {
        return "w-3 h-3 " + secondary;
      }
      return "w-3 h-3 " + minimal;
    default:
      if (type === "primary") {
        return "w-3.5 h-3.5 " + primary;
      }
      if (type === "secondary") {
        return "w-3.5 h-3.5 " + secondary;
      }
      return "w-3.5 h-3.5 " + minimal;
  }
};

export const Button = ({
  type = "secondary",
  size = "small",
  children,
  disabled = false,
  position = "left",
  icon,
  ...props
}: ButtonProps) => {
  const buttonClasses = useMemo(() => {
    const modeClass = getTypeClasses(type);
    const sizeClass = getSizeClasses(size);
    return [modeClass, sizeClass].join(" ");
  }, [type, size]);
  const sizeIconClasses = useMemo(
    () => (!children ? getSizeIconClasses(size) : null),
    [size, children]
  );
  const spanClasses = useMemo(() => getSpanClasses(type, size), [type, size]);
  const iconClasses = useMemo(() => getIconClasses(type, size), [type, size]);

  return (
    <button
      type="button"
      className={`${baseButtonClasses} ${defaultClasses} ${defaultActiveClasses} ${buttonClasses} ${sizeIconClasses}`}
      disabled={disabled}
      {...props}
    >
      {position === "right" ? (
        <>
          {children && <span className={spanClasses}>{children}</span>}
          {icon && <span className={iconClasses}>{icon}</span>}
        </>
      ) : (
        <>
          {icon && <span className={iconClasses}>{icon}</span>}
          {children && <span className={spanClasses}>{children}</span>}
        </>
      )}
    </button>
  );
};
