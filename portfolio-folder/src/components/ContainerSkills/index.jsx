import React from "react";

export default function ContainerSkills() {
    const skillIcon = "p-2 bg-backgroundIcon rounded-lg w-[4.375rem] md:w-[6.25rem] 2xl:w-[8.125rem] 2xl:p-4 grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110";
    
    return (
        <div className="
        w-full p-4 bg-backgroundCard rounded-lg
        md:w-[31.25rem]
        2xl:w-[42rem] 2xl:h-[30rem] 2xl:p-10"
        >
            <h2 className="pt-4 text-xl md:text-2xl lg:text-3xl font-medium font-bebas text-lightColor text-center">
                Minhas competências em programação:
            </h2>
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between items-center gap-x-3
                    sm:gap-x-7
                    md:gap-0
                ">
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Ícone do HTML5" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Ícone do CSS3" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Ícone do JavaScript" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Ícone do ReactJS" />
                </div>
                <div className="flex flex-row justify-between items-center pt-8 gap-x-3
                    sm:gap-x-7
                    md:gap-0
                ">
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Ícone do TailwindCSS" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Ícone do ExpressJS" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Ícone do NodeJS" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" alt="Ícone do RubyOnRails" />
                </div>
            </div>
        </div>
    );
}