import React from "react";
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Gmail from '../../assets/gmail.svg';

export default function ContainerContacts() {
    const icon = "p-2 bg-backgroundIcon rounded-full w-[75px] grayscale transition duration-500 ease-in-out hover:grayscale-0";
    
    return (
        <div className="
                flex flex-col justify-center items-center mb-4
                md:w-[25rem]
                lg:absolute lg:bottom-8 lg:left-12 
                xl:left-20 xl:bottom-10
                2xl:left-36 2xl:bottom-12
                bg-backgroundCard rounded-lg
            "
        >
            <h2 className="pt-4 text-2xl font-medium font-bebas text-lightColor">
                Meus contatos
            </h2>
            <div className="py-4 px-8 flex flex-row w-full items-center justify-between">
                <a href="https://github.com/xXLuisHenriqueXx" target='_blank'>
                    <img src={Github} alt="Github logo" className={icon} />
                </a>

                <a href="https://www.linkedin.com/in/luis-henrique-a2b833269/" target='_blank'>
                    <img src={Linkedin} alt="Linkedin logo" className={icon} />
                </a>

                <a href="mailto:luishenri567@gmail.com" target='_blank'>
                    <img src={Gmail} alt="Gmail logo" className={icon} />
                </a>
            </div>
        </div>
    );
}