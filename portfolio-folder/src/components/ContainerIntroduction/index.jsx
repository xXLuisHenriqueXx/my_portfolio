import React from "react";

export default function ContainerIntroduction() {
    const textWhite = "p-2 indent-4 text-base lg:text-xl xl:text-2xl 3xl:text-3xl font-semibold font-roboto text-baseText"
    const textHighlited = "font-dynapuff text-highlitedText"

    return (
        <div className="
                flex flex-col p-3 bg-backgroundCard backdrop-blur-sm rounded-lg shadow-purplelight 
                md:w-[31.25rem] md:h-60 md:justify-center
                lg:w-[36.5rem] lg:h-72
                xl:h-auto
                3xl:w-[50rem] 3xl:h-[30rem] 3xl:p-10"
        >
            <p className={textWhite}>
                Me chamo <span className={textHighlited}>Luis Henrique Cardoso</span> e sou programador.
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