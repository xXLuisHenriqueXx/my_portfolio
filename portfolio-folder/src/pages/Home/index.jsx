import React from 'react';
import Container from '../../components/common/Container';
import ContainerMain from '../../components/Home/ContainerMain';
import ContainerText from '../../components/Home/ContainerText';
import ContainerImageContacts from '../../components/Home/ContainerImageContacts';

export default function Home() {
    return (
        <Container id={"home"}>
            <ContainerMain>
                <ContainerText />

                <ContainerImageContacts />
            </ContainerMain>
        </Container>
    )
}