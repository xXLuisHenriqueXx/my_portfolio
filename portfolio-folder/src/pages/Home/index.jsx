import React from 'react';
import Perfil from '../../assets/perfil.png';
import ContainerContacts from '../../components/ContainerContacts';
import Container from '../../components/Container';


export default function Home() {
    const textH2 = "text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold font-roboto text-baseText";

    return (
        <Container id={"home"} bgImage={"bg-home"} bgPosition={"bg-bottom"}>
            <div className="lg:flex lg:flex-row">
                <div className="
                        flex flex-col justify-center items-center pt-24 
                        lg:items-start lg:absolute lg:top-24 lg:left-12 
                        xl:left-24 3xl:top-40 3xl:left-40
                    "
                >
                    <h2 className={textH2}>Olá, eu me chamo</h2>
                    <h1 className="
                            text-7xl font-black font-bebas text-highlitedText
                            md:text-7xl 
                            lg:text-8xl 
                            xl:text-9xl 
                            3xl:text-10xl
                        "
                    >
                        LUIS HENRIQUE
                    </h1>
                    <h2 className={textH2}>e sou desenvolvedor web</h2>
                </div>

                <div className="md:flex md:flex-col md:items-center lg:flex-row lg:w-full">
                    <div className="mt-4 flex justify-center lg:absolute lg:top-28 lg:right-12 xl:right-24 3xl:right-40">
                        <img src={Perfil} alt="Minha foto" className="w-[360px] lg:w-[420px] xl:w-[540px] 3xl:w-[680px] animate-float" />
                    </div>
                    <ContainerContacts />
                </div>
            </div>
        </Container>
    )
}