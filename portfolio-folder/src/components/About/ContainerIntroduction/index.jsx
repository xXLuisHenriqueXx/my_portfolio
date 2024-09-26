import React from "react";
import { tv } from "tailwind-variants";

const card = tv({
    slots: {
        mainContainer: 'flex flex-col md:justify-center w-full md:w-[31.25rem] md:h-68 lg:w-[36.5rem] lg:h-72 xl:h-80 2xl:w-[45rem] 2xl:h-[28rem] p-3 2xl:p-10 bg-backgroundCard rounded-md',
        normalText: 'p-2 indent-4 md:text-lg lg:text-xl xl:text-xl 2xl:text-3xl font-semibold font-roboto text-lightColor',
        highlightedText: 'font-dynapuff text-highlitedColor'
    }
});

const { mainContainer, normalText, highlightedText } = card();

export default function ContainerIntroduction() {
    return (
        <div className={mainContainer()}>
            <p className={normalText()}>
                Me chamo <span className={highlightedText()}>Luis Henrique Cardoso</span> e sou desenvolvedor web e mobile.
            </p>
            <p className={normalText()}>
                Realizei meu ensino médio com técnico em informática integrado, no <span className={highlightedText()}>Instituto Federal Farroupilha</span>, onde iniciou minha paixão pelo mundo da programação.
            </p>
            <p className={normalText()}>
                No momento estou cursando Sistemas de Informação na <span className={highlightedText()}>Universidade Federal de Santa Maria</span>.
            </p>
        </div>
    );
}