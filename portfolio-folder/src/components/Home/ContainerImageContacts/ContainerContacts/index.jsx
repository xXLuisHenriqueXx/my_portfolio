import React from "react";
import { tv } from "tailwind-variants";

import Github from '../../../../assets/github.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Gmail from '../../../../assets/gmail.svg';

const card = tv({
    slots: {
        container: 'flex flex-col justify-center items-center md:w-[24rem] lg:absolute lg:bottom-8 lg:left-12  xl:left-20 xl:bottom-10 2xl:left-36 2xl:bottom-12 bg-backgroundCard rounded-md',
        containerIcons: 'flex flex-row w-full items-center justify-between py-4 px-8',
        title: 'pt-4 text-2xl font-bebas text-lightColor',
        icon: 'w-[70px] p-2 bg-backgroundIcon rounded-full grayscale transition duration-500 ease-in-out hover:grayscale-0' 
    }
});

const { container, title, containerIcons, icon } = card();

export default function ContainerContacts() {
    return (
        <div className={container()}>
            <h2 className={title()}>
                MEUS CONTATOS
            </h2>

            <div className={containerIcons()}>
                <a href="https://github.com/xXLuisHenriqueXx" target='_blank'>
                    <img src={Github} alt="Github logo" className={icon()} />
                </a>

                <a href="https://www.linkedin.com/in/luis-henrique-a2b833269/" target='_blank'>
                    <img src={Linkedin} alt="Linkedin logo" className={icon()} />
                </a>

                <a href="mailto:luishenri567@gmail.com" target='_blank'>
                    <img src={Gmail} alt="Gmail logo" className={icon()} />
                </a>
            </div>
        </div>
    );
}