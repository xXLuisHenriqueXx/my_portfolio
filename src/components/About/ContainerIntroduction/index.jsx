import React from "react";
import { tv } from "tailwind-variants";
import { motion } from "motion/react";

const card = tv({
    slots: {
        container: 'flex flex-col md:justify-center w-full md:w-[31.25rem] md:h-68 lg:w-[36.5rem] lg:h-72 xl:h-96 2xl:w-[45rem] 2xl:h-[28rem] p-4 2xl:p-10 bg-backgroundCard rounded-md',
        normalText: 'p-2 indent-8 md:text-lg lg:text-xl 2xl:text-2xl font-roboto text-lightColor',
        highlightedText: 'text-highlitedColor'
    }
});

const { container, normalText, highlightedText } = card();

export default function ContainerIntroduction() {
    return (
        <motion.div
            className={container()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
        >
            <p className={normalText()}>
                Me chamo <b className={highlightedText()}>Luis Henrique Cardoso</b> e sou desenvolvedor <b className={highlightedText()}>Fullstack Web e Mobile</b>.
            </p>
            <p className={normalText()}>
                Realizei meu ensino médio com técnico em informática integrado, no <b className={highlightedText()}>Instituto Federal Farroupilha, Campus Júlio de Castilhos</b>, onde acontenceu o início minha paixão pelo mundo da programação.
            </p>
            <p className={normalText()}>
                No momento estou cursando Sistemas de Informação na <b className={highlightedText()}>Universidade Federal de Santa Maria, Campus Sede</b>.
            </p>
            <p className={normalText()}>Estou sempre buscando estudar as novas tendências do mercado, afim de produzir o melhor produto possível.</p>
        </motion.div>
    )
}