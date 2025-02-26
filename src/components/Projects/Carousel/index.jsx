import React, { useState } from 'react';
import { tv } from 'tailwind-variants';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import NotFound from '../../../assets/project_notfound.svg';

const card = tv({
    slots: {
        container: "relative flex justify-center items-center w-full h-[80%] my-4 bg-backgroundIcon rounded-md overflow-hidden",
        containerBox: "flex w-full h-full transition-transform duration-300",
        containerContent: "flex flex-col flex-shrink-0 justify-center items-center w-full h-full",
        title: "text-xl md:text-2xl 2xl:text-3xl font-extrabold text-violetColor",
        createdText: "text-xs 2xl:text-base text-lightColor font-normal my-1",
        technologiesText: "text-xs 2xl:text-base font-semibold text-highlitedColor text-center py-1 px-2 bg-backgroundCard rounded-md",
        descriptionText: "text-sm 2xl:text-base text-lightColor font-light text-wrap text-center mx-2",
        image: "w-52 md:w-64 2xl:w-80 h-auto object-cover my-4 cursor-pointer",
        button: "absolute top-1/2 transform -translate-y-1/2 bg-backgroundCard p-2 rounded-full"
    },
    variants: {
        button: {
            left: {
                button: "left-1 sm:left-2 lg:left-4"
            },
            right: {
                button: "right-1 sm:right-2 lg:right-4"
            }
        }
    }
});

const { container, containerBox, containerContent, title, createdText, technologiesText, descriptionText, image, button } = card();

const projectsData = [
    {
        id: 1,
        title: "PomodoroStudy",
        description: "Aplicativo Fullstack móvel que ajuda na organização estudantil.",
        technologies: "React native | NodeJS | Fastify | PostgreSQL ",
        date: '01/2024',
        link: "",
        image: NotFound,
        imageAlt: "Imagem do projeto PomodoroStudy"
    },
    {
        id: 2,
        title: "DevPizza",
        description: "Projeto de site, que consiste em uma pizzaria fictícia.",
        technologies: "ReactJS | TailwindCSS",
        date: '05/2024',
        link: "https://github.com/xXLuisHenriqueXx/Pizzaria_LandingPage",
        image: NotFound,
        imageAlt: "Imagem do projeto DevPizza"
    },
    {
        id: 3,
        title: "EcoMap",
        description: "Projeto de aplicativo, que consiste em uma ferramenta que busca locais próximos para descarte de lixo.",
        technologies: "React native | NodeJS | ExpressJS | MongoDB",
        date: '07/2024',
        link: "https://github.com/xXLuisHenriqueXx/ecoMap_frontend",
        image: NotFound,
        imageAlt: "Imagem do projeto EcoMap"
    }
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevIndex = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        )
    }

    const handleNextIndex = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className={container()}>
            <div className={containerBox()} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {projectsData.map((project) => {
                    return (
                        <div key={project.id} className={containerContent()}>
                            <h1 className={title()}>{project.title}</h1>

                            <p className={createdText()}>Projeto criado em: <b>{project.date}</b></p>

                            <p className={technologiesText()}>{project.technologies}</p>

                            <a href={project.link} target='_blank'>
                                <img src={project.image} alt={project.imageAlt} className={image()} />
                            </a>

                            <p className={descriptionText()}>{project.description}</p>
                        </div>
                    )
                })}
            </div>
            <button className={button({ button: 'left' })} onClick={handlePrevIndex}>
                <FaChevronLeft color="#E0D9F5" size={22} />
            </button>

            <button className={button({ button: 'right' })} onClick={handleNextIndex}>
                <FaChevronRight color="#E0D9F5" size={22} />
            </button>
        </div>
    )
}