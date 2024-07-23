import React from "react";
import Container from "../../components/Container";
import ContainerIntroduction from "../../components/ContainerIntroduction";
import ContainerSkills from "../../components/ContainerSkills";

function About() {
    return (
        <Container id={"about"} bgImage={"bg-about"} bgPosition={"bg-top"}>
            <div className="
                    w-full max-h-screen grid grid-cols-1 place-items-center 
                    xl:grid-cols-2 xl
                "
            >
                <ContainerIntroduction />
                <ContainerSkills />

            </div>
        </Container>
    )
}

export default About;