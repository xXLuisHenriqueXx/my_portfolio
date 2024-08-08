import React from "react";
import Container from "../../components/Container";
import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSkills from "../../components/ContainerSkills";

function About() {
    return (
        <Container id={"about"}>
            <div className="
                    w-full h-screen flex flex-col justify-center items-center gap-y-5
                    lg:relative lg:flex-row lg:items-start lg:justify-between
            ">
                <div className="
                    lg:absolute lg:top-20 lg:left-10
                    2xl:-left-28 2xl:top-28
                ">
                    <ContainerIntroduction />
                </div>
                <div className="
                    lg:absolute lg:bottom-20 lg:right-10
                    2xl:-right-28 2xl:bottom-28
                ">
                    <ContainerSkills />
                </div>
            </div>
        </Container>
    )
}

export default About;