import React from "react";

export default function ContainerSkills() {
    const skillIcon = "p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110";
    
    return (
        <div className="
        mt-20 p-4 bg-backgroundCard backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900 
        md:w-[500px] 
        lg:absolute lg:mt-64 lg:right-20 "
        >
            <h2 className="pt-4 text-xl lg:text-3xl font-medium font-bebas text-baseText text-center">
                Minhas competências em programação web:
            </h2>
            <div className="flex flex-col mt-8">
                <div className="flex flex-row justify-between items-center">
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Ícone do HTML5" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Ícone do CSS3" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Ícone do JavaScript" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="Ícone do PHP" />
                </div>
                <div className="flex flex-row justify-between items-center pt-8">
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Ícone do Java" />
                    <img className={skillIcon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Ícone do MySql" />
                </div>
            </div>
        </div>
    );
}