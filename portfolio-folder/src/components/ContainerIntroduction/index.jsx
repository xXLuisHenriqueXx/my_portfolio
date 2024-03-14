import React from "react";

export default function ContainerIntroduction() {
    const textWhite = "p-2 indent-4 text-xl lg:text-2xl font-semibold font-roboto text-baseText"
    const textHighlited = "font-dynapuff text-highlitedText"

    return (
        <div className="
                flex flex-col p-3 bg-backgroundCard backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900 
                md:w-[500px] 
                lg:mt-32 lg:left-20 lg:absolute lg:w-[600px]
            "
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