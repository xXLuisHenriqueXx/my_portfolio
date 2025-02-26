import React from "react";
import { tv } from "tailwind-variants";

const card = tv({
  slots: {
    container: "relative w-full min-h-screen",
  },
});

const { container } = card();

export default function Container({ children, id }) {
  return (
    <div className={container()} id={id}>
      {children}
    </div>
  );
}
