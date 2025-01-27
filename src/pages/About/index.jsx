import React from "react";

import Container from "../../components/common/Container";
import ContainerMain from "../../components/common/ContainerMain";
import ContainerPosition from "../../components/About/ContainerPosition";
import ContainerIntroduction from "../../components/About/ContainerIntroduction";
import ContainerSkills from "../../components/About/ContainerSkills";

export default function About() {
    return (
        <Container id={"about"}>
            <ContainerMain screen={'about'}>
                <ContainerIntroduction />

                <ContainerSkills />
            </ContainerMain>
        </Container>
    )
}