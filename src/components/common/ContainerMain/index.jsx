import React from "react";
import { tv } from "tailwind-variants";
import { motion } from "motion/react";

const card = tv({
  slots: {
    container: "relative w-full h-screen",
    containerBox:
      "flex justify-center items-center w-full h-[75%] xl:w-[60%] xl:h-[90%] bg-backgroundCard rounded-sm",
  },
  variants: {
    container: {
      home: {
        container: "lg:flex lg:flex-row",
      },
      about: {
        container:
          "flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between gap-y-5",
      },
      projects: {
        container: "flex justify-center items-center",
      },
    },
  },
});

const { container, containerBox } = card();

export default function ContainerMain({ screen, children }) {
  return (
    <>
      {screen !== "projects" ? (
        <div className={container({ container: screen })}>{children}</div>
      ) : (
        <div className={container({ container: screen })}>
          <motion.div
            className={containerBox()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
