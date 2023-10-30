import Perfil from '../../assets/perfil.png';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Gmail from '../../assets/gmail.svg';

function Home(){
    return (
        <div className="home container mx-auto w-full h-screen px-4 bg-home bg-bottom bg-no-repeat 3xl:bg-contain">
            <div className="lg:flex lg:flex-row">
                <div className="flex flex-col justify-center items-center pt-24 lg:items-start lg:absolute lg:top-32 lg:left-12 xl:left-24 3xl:top-40 3xl:left-40">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold font-roboto text-baseText">Olá, eu me chamo</h2>
                    <h1 className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl 3xl:text-10xl font-black font-bebas text-highlitedText">LUIS HENRIQUE</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-bold font-roboto text-baseText">e sou desenvolvedor web</h2>
                </div>

                <div className="md:flex md:flex-col md:items-center lg:flex-row lg:w-full">
                    <div className="mt-4 flex justify-center lg:absolute lg:top-40 lg:right-12 xl:right-24 3xl:right-40">
                        <img src={ Perfil } alt="Minha foto" className="w-[360px] lg:w-[420px] xl:w-[540px] 3xl:w-[680px] animate-float"/>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-20 md:w-[400px] lg:absolute lg:bottom-8 lg:left-12 bg-backgroundCard backdrop-blur-sm rounded-2xl shadow-xl shadow-background">
                        <h2 className="pt-4 text-2xl font-semibold font-bebas text-baseText">
                            Meus contatos
                        </h2>
                        <div className="py-4 px-8 flex flex-row w-full items-center justify-between">
                            <a href="https://github.com/xXLuisHenriqueXx" target='_blank'><img src={ Github } alt="Github logo" className="p-2 bg-backgroundCard rounded-full w-[75px] grayscale transition duration-500 ease-in-out hover:grayscale-0"/></a>
                            <a href="https://www.linkedin.com/in/luis-henrique-a2b833269/" target='_blank'><img src={ Linkedin } alt="Linkedin logo" className="p-2 bg-backgroundCard rounded-full w-[75px] grayscale transition duration-500 ease-in-out hover:grayscale-0"/></a>
                            <a href="mailto:luishenri567@gmail.com" target='_blank'><img src={ Gmail } alt="Gmail logo" className="p-2 bg-backgroundCard rounded-full w-[75px] grayscale transition duration-500 ease-in-out hover:grayscale-0"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;