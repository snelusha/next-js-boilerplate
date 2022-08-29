import React from "react";

import Link from "next/link";

function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

function LinkButton({ href, children, ...rest }) {
  return (
    <Link href={href}>
      <a target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    </Link>
  );
}

export default function ({ href, ...rest }) {
  const Component = href ? LinkButton : Button;
  return <Component href={href} {...rest} />;
}
