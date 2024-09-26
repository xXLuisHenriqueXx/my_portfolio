import React from "react";
import Container from "../../components/common/Container";
import ContainerIntroduction from "../../components/About/ContainerIntroduction";
import ContainerSkills from "../../components/About/ContainerSkills";
import ContainerMain from "../../components/About/ContainerMain";
import ContainerPosition from "../../components/About/ContainerPosition";

function About() {
    return (
        <Container id={"about"}>
            <ContainerMain>
                <ContainerPosition side='left'>
                    <ContainerIntroduction />
                </ContainerPosition>

                <ContainerPosition side='right'>
                    <ContainerSkills />
                </ContainerPosition>
            </ContainerMain>
        </Container>
    )
}

export default About;