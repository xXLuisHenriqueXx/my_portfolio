import React from "react";
import { tv } from "tailwind-variants";
import { motion } from "motion/react";

const card = tv({
  slots: {
    container:
      "flex flex-col justify-center items-center pt-24 pb-4 lg:items-start lg:absolute lg:top-24 2xl:top-40",
    normalText:
      "text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-lightColor",
    title:
      "text-7xl lg:text-8xl 2xl:text-10xl font-black font-bebas text-highlitedColor -mb-2",
  },
});

const { container, normalText, title } = card();

export default function ContainerText() {
  return (
    <motion.div
      className={container()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <h2 className={normalText()}>Olá, eu me chamo</h2>
      <h1 className={title()}>LUIS HENRIQUE</h1>
      <h2 className={normalText()}>e sou desenvolvedor.</h2>
    </motion.div>
  );
}
