import React from "react";

import SmartButton from "@components/SmartButton";
import Icon from "@components/Icon";

import cx from "@utils/classes";

export default function ({
  to,
  label,
  icon,
  filled,
  outline,
  large,
  rounded,
  reverse,
  disabled,
  className,
  children,
  onClick,
}) {
  return (
    <SmartButton
      className={cx(
        label ? "px-4" : "px-2",
        filled && "bg-primary-light hover:bg-primary-dark",
        outline && "border border-divider hover:border-divider-dark",
        large && "text-lg px-6 py-4",
        rounded && "rounded-full",
        reverse && "flex-row-reverse",
        disabled && "!text-secondary !bg-primary-light !opacity-75",
        "inline-flex items-center justify-center font-medium text-secondary hover:text-secondary-dark py-2 rounded transition-colors whitespace-nowrap focus:outline-none",
        className
      )}
      href={to}
      disabled={disabled}
      onClick={onClick}
    >
      {!children ? (
        <div
          className={cx(
            reverse && "flex-row-reverse",
            "inline-flex items-center justify-center whitespace-nowrap"
          )}
        >
          {icon && (
            <Icon
              className={cx(
                large && "!w-6 !h-6",
                label && (reverse ? "ml-4" : "mr-4"),
                "icon"
              )}
              name={icon}
            />
          )}
          {label}
        </div>
      ) : (
        children
      )}
    </SmartButton>
  );
}
