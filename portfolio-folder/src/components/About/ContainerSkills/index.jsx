import React from "react";
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'w-full md:w-[31.25rem] xl:w-[36.5rem] 2xl:w-[45rem] 2xl:h-[27rem] p-4 xl:px-8 2xl:p-10 bg-backgroundCard rounded-md',
        title: 'pt-2 text-2xl lg:text-3xl font-medium font-bebas text-lightColor text-center',
        containerIcons: 'flex flex-col mt-4',
        iconsRow: 'flex flex-row justify-between items-center gap-x-3 sm:gap-x-7 md:gap-0',
        icon: 'w-[4.375rem] md:w-[5.25rem] 2xl:w-[8.125rem] p-2 2xl:p-4 bg-backgroundIcon rounded-md grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110'
    },

    variants: {
        iconsRow: {
            second: {
                iconsRow: 'pt-4 2xl:pt-8'
            }
        }
    }
});

const { container, title, containerIcons, iconsRow, icon } = card();

const iconsData = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "Ícone do TypeScript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        alt: "Ícone do TailwindCSS"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "Ícone do ReactJS"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        alt: "Ícone do ExpressJS"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg",
        alt: "Ícone do Fastify"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
        alt: "Ícone do RubyOnRails"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        alt: "Ícone do PostgreSQL"
    },
    {
       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
         alt: "Ícone do MongoDB" 
    }
];

export default function ContainerSkills() {
    const half = Math.ceil(iconsData.length / 2);
    const firstHalf = iconsData.slice(0, half);
    const secondHalf = iconsData.slice(half, iconsData.length);

    return (
        <div className={container()}>
            <h2 className={title()}>Minhas competências em programação:</h2>

            <div className={containerIcons()}>
                <div className={iconsRow()}>
                    {firstHalf.map((iconData, index) => (
                        <img key={index} className={icon()} src={iconData.src} alt={iconData.alt} />
                    ))}
                </div>
                
                <div className={iconsRow({ iconsRow: 'second' })}>
                    {secondHalf.map((iconData, index) => (
                        <img key={index} className={icon()} src={iconData.src} alt={iconData.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}