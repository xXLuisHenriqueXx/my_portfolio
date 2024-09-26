import React from 'react';
import ContainerContacts from './ContainerContacts';
import Perfil from '../../../assets/perfil.png';
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        mainContainer: 'md:flex md:flex-col md:items-center lg:flex-row lg:w-full',
        imageContainer: 'flex justify-center mt-4  lg:absolute lg:top-[10%] lg:right-12 xl:right-24 2xl:right-36',
        image: 'w-[360px] lg:w-[420px] xl:w-[540px] 2xl:w-[680px] animate-float'
    }
});

const { mainContainer, imageContainer, image } = card();

export default function ContainerImageContacts() {
    return (
        <div className={mainContainer()}>
            <div className={imageContainer()}>
                <img src={Perfil} alt="Minha foto" className={image()} />
            </div>
            
            <ContainerContacts />
        </div>
    )
}
