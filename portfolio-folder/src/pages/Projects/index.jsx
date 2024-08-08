import React, { useState } from 'react'
import Container from '../../components/Container'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

import NotFound from '../../assets/project_notfound.svg'

const projects = [
  {
    id: 1,
    title: "PomodoroStudy",
    description: "Projeto de TCC, que consiste em um aplicativo Fullstack que ajuda na organização estudantil.",
    technologies: "React native | NodeJS | ExpressJS | MongoDB ",
    date: '01/2024',
    image: NotFound,
    imageAlt: "Imagem do projeto PomodoroStudy"
  },
  {
    id: 2,
    title: "DevPizza",
    description: "Projeto de site para estudo, que consiste em uma pizzaria fictícia.",
    technologies: "ReactJS | TailwindCSS",
    date: '05/2024',
    image: NotFound,
    imageAlt: "Imagem do projeto DevPizza"
  },
]


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container id={"projects"}>
      <div className="
          w-full h-screen flex justify-center items-center
      ">
        <div className="
          w-full h-[75%] bg-backgroundCard rounded-lg flex justify-center items-center
          lg:mx-12
          xl:w-[60%] 
        ">
          <div className="
            w-full h-full flex flex-col justify-center items-center py-7 px-4
          ">
            <h1 className="
              text-5xl font-medium font-bebas text-lightColor
            ">
              MEUS PROJETOS
            </h1>

              <div className="
                w-full h-[80%] flex justify-center items-center bg-backgroundIcon my-4 rounded-lg relative overflow-hidden
              ">
                <div
                  className="flex w-full h-full transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                {projects.map((project) => {
                  return (
                    <div key={project.id} className="
                      flex-shrink-0 w-full h-full flex flex-col justify-center items-center
                    ">
                      <h1 className="
                        text-xl font-extrabold text-violetColor
                        md:text-2xl
                        2xl:text-3xl
                      ">
                        {project.title}
                      </h1>
                      
                      <p className="
                        text-xs text-lightColor font-normal my-1 
                        2xl:text-base
                      ">
                        Projeto criado em: <span className="font-bold">{project.date}</span>
                      </p>
                      <p className="
                        text-xs font-semibold text-highlitedColor text-center py-1 px-2 bg-backgroundCard rounded-lg
                        2xl:text-base
                      ">
                        {project.technologies}
                      </p>

                      <img src={project.image} alt={project.imageAlt} className="
                        w-52 h-auto object-cover my-4
                        md:w-64
                        2xl:w-80
                      "/>

                      <p className="
                        text-sm text-lightColor font-light text-wrap text-center mx-2
                        2xl:text-base
                      ">
                        {project.description}
                      </p>
                    </div>
                  )
                })}
              </div>
              <button
                className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-backgroundCard p-2 rounded-full 
                sm:left-2
                lg:left-4"
                onClick={handlePrevIndex}
              >
                <FaChevronLeft color="#E0D9F5" size={22} />
              </button>
              <button
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-backgroundCard p-2 rounded-full 
                sm:right-2
                lg:right-4"
                onClick={handleNextIndex}
              >
                <FaChevronRight color="#E0D9F5" size={22} />
              </button>
              </div>
              <p className="
                text-sm text-lightColor font-normal text-wrap text-center
                2xl:text-base
              ">
                Você pode visualizar meus projetos em andamento clicando nesse <a className="font-bold text-linkText" href="https://github.com/xXLuisHenriqueXx" target='_blank'>LINK</a>!
              </p>
            </div>
          </div>

        </div>
    </Container>
  )
}