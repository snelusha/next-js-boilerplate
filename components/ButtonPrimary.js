import React from "react";

import SmartButton from "@components/SmartButton";
import Icon from "@components/Icon";

import cx from "@utils/classes";

export default function ({
  to,
  label,
  icon,
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
        outline && "border border-accent hover:border-accent-dark",
        large && "px-6 py-4",
        rounded && "rounded-full",
        reverse && "flex-row-reverse",
        disabled && "opacity-75",
        "inline-flex items-center justify-center font-medium text-accent-contrast py-2 bg-accent hover:bg-accent-dark rounded transition-colors whitespace-nowrap focus:outline-none",
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
