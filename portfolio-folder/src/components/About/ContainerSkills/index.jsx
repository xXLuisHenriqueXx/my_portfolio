import React from "react";
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        mainContainer: 'w-full md:w-[31.25rem] xl:w-[36.5rem] 2xl:w-[42rem] 2xl:h-[30rem] p-4 xl:px-8 2xl:p-10 bg-backgroundCard rounded-md',
        title: 'pt-4 text-xl md:text-2xl lg:text-3xl font-medium font-bebas text-lightColor text-center',
        iconsContainer: 'flex flex-col mt-8',
        iconsRow: 'flex flex-row justify-between items-center gap-x-3 sm:gap-x-7 md:gap-0',
        icon: 'w-[4.375rem] md:w-[6.25rem] 2xl:w-[8.125rem] p-2 2xl:p-4 bg-backgroundIcon rounded-md grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110'
    },

    variants: {
        iconsRow: {
            second: {
                iconsRow: 'pt-8'
            }
        }
    }
});

const { mainContainer, title, iconsContainer, iconsRow, icon } = card();

export default function ContainerSkills() {
    return (
        <div className={mainContainer()}>
            <h2 className={title()}>Minhas competências em programação:</h2>

            <div className={iconsContainer()}>
                <div className={iconsRow()}>
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Ícone do HTML5" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Ícone do CSS3" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Ícone do JavaScript" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Ícone do ReactJS" />
                </div>
                
                <div className={iconsRow({ iconsRow: 'second' })}>
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Ícone do TailwindCSS" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Ícone do ExpressJS" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Ícone do NodeJS" />
                    <img className={icon()} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" alt="Ícone do RubyOnRails" />
                </div>
            </div>
        </div>
    );
}