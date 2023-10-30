function About(){
    return (
        <div className="about container mx-auto w-full h-screen px-4 bg-about bg-top bg-no-repeat 3xl:bg-contain">
            <div className="w-full h-screen flex flex-col justify-center md:flex md:flex-col md:items-center lg:flex-row lg:justify-between lg:items-start">
                <div className="flex flex-col p-3 bg-backgroundCard backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900 md:w-[500px] lg:mt-32 lg:absolute lg:w-[700px]">
                    <p className="indent-4 text-xl lg:text-3xl font-semibold font-roboto text-baseText">
                        Me chamo <span className="font-dynapuff text-highlitedText">Luis Henrique Cardoso</span> e sou programador.
                    </p>
                    <p className="pt-2 indent-4 text-xl lg:text-3xl font-semibold font-roboto text-baseText">
                        Realizei meu ensino médio com técnico em informática integrado, no <span className="font-dynapuff text-highlitedText">Instituto Federal Farroupilha</span>, onde iniciou minha paixão pelo mundo da programação.
                    </p>
                    <p className="pt-2 indent-4 text-xl lg:text-3xl font-semibold font-roboto text-baseText">
                        No momento estou cursando Sistemas de Informação na <span className="font-dynapuff text-highlitedText">Universidade Federal de Santa Maria</span>.
                    </p>
                </div>
                <div className="mt-20 p-4 bg-backgroundCard backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900 md:w-[500px] lg:mt-96 lg:absolute">
                    <h2 className="pt-4 text-xl lg:text-3xl font-medium font-bebas text-baseText text-center">
                        Minhas competências em programação web:
                    </h2>
                    <div className="flex flex-col mt-8">
                        <div className="flex flex-row justify-between items-center">
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Ícone do HTML5"/>
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Ícone do CSS3"/>
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Ícone do JavaScript"/>
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="Ícone do PHP"/>
                        </div>
                        <div className="flex flex-row justify-between items-center pt-8">
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Ícone do Java"/>
                            <img className="p-2 bg-backgroundCard rounded-lg w-[70px] md:w-[100px] grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:scale-110" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Ícone do MySql"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;