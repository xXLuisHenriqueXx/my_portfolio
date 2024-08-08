import React from "react";

export default function ContainerIntroduction() {
    const textWhite = "p-2 indent-4 font-light md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-roboto text-lightColor"
    const textHighlited = "font-dynapuff text-highlitedColor"

    return (
        <div className="
                w-full flex flex-col p-3 bg-backgroundCard rounded-lg
                md:w-[31.25rem] md:h-68 md:justify-center
                lg:w-[36.5rem] lg:h-72
                xl:h-auto
                2xl:w-[45rem] 2xl:h-[28rem] 2xl:p-10"
        >
            <p className={textWhite}>
                Me chamo <span className={textHighlited}>Luis Henrique Cardoso</span> e sou desenvolvedor web e mobile.
            </p>
            <p className={textWhite}>
                Realizei meu ensino médio com técnico em informática integrado, no <span className={textHighlited}>Instituto Federal Farroupilha</span>, onde iniciou minha paixão pelo mundo da programação.
            </p>
            <p className={textWhite}>
                No momento estou cursando Sistemas de Informação na <span className={textHighlited}>Universidade Federal de Santa Maria</span>.
            </p>
        </div>
    );
}