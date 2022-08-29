import React from "react";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const icons = {};

import cx from "@utils/classes";

export default function ({ className, name }) {
  const Icon = icons[name] || QuestionMarkCircleIcon;
  return <Icon className={cx("w-4 h-4", className)} />;
}
