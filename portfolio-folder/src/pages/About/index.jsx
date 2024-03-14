import React from "react";
import Container from "../../components/Container";
import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSkills from "../../components/ContainerSkills";

function About(){
    return (
        <Container id={"about"} bgImage={"bg-about"} bgPosition={"bg-top"}>
            <div className="
                    w-full h-screen flex flex-col justify-center 
                    md:flex md:flex-col md:items-center 
                    lg:flex-row lg:justify-between lg:items-start
                "
            >
                <ContainerIntroduction />
                <ContainerSkills />
            </div>
        </Container>
    )
}

export default About;