import React from 'react';
import { tv } from 'tailwind-variants';
import { motion } from 'motion/react';

import ContainerContacts from './ContainerContacts';

import Perfil from '../../../assets/perfil.png';

const card = tv({
    slots: {
        container: 'md:flex md:flex-col md:items-center lg:flex-row lg:w-full',
        imageContainer: 'flex justify-center mb-4 lg:absolute lg:top-[10%] lg:right-12 xl:right-24 2xl:right-36',
        image: 'w-[360px] lg:w-[420px] xl:w-[540px] 2xl:w-[680px] animate-float'
    }
});

const { container, imageContainer, image } = card();

export default function ContainerImageContacts() {
    return (
        <div className={container()}>
            <motion.div
                className={imageContainer()}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                <img src={Perfil} alt="Minha foto" className={image()} />
            </motion.div>

            <ContainerContacts />
        </div>
    )
}