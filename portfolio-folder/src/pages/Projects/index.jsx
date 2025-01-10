import React from 'react';
import { tv } from 'tailwind-variants';

import Container from '../../components/common/Container';
import ContainerMain from '../../components/Projects/ContainerMain';
import Carousel from '../../components/Projects/Carousel';

const card = tv({
  slots: {
    containerContent: "flex flex-col justify-center items-center w-full h-full py-7 px-4",
    title: "text-4xl font-medium font-bebas text-lightColor",
    normalText: "text-sm 2xl:text-base text-lightColor text-wrap text-center",
    linkText: "font-bold text-linkText",
  }
});

const { containerContent, title, normalText, linkText } = card();

export default function Projects() {
  return (
    <Container id={"projects"}>
      <ContainerMain>
        <div className={containerContent()}>
          <h1 className={title()}>MEUS PROJETOS</h1>

          <Carousel />

          <p className={normalText()}>
            Você pode visualizar meus projetos em andamento clicando nesse <a className={linkText()} href="https://github.com/xXLuisHenriqueXx" target='_blank'>LINK</a>!
          </p>
        </div>
      </ContainerMain>
    </Container>
  )
}