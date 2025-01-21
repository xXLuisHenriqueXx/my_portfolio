import React from "react";
import { tv } from "tailwind-variants";
import { motion } from 'motion/react'

import Github from '../../../../assets/github.svg';
import Linkedin from '../../../../assets/linkedin.svg';
import Gmail from '../../../../assets/gmail.svg';

const card = tv({
    slots: {
        container: 'flex flex-col justify-center items-center md:w-[24rem] lg:absolute lg:bottom-8 lg:left-12  xl:left-20 xl:bottom-10 2xl:left-36 2xl:bottom-12 bg-backgroundCard rounded-md',
        containerIcons: 'flex flex-row w-full items-center justify-between py-4 px-8',
        title: 'pt-4 text-2xl font-bebas text-lightColor',
        icon: 'w-[70px] p-2 bg-backgroundIcon rounded-full grayscale transition duration-500 ease-in-out hover:grayscale-0'
    }
});

const { container, title, containerIcons, icon } = card();

const contactsData = [
    {
        icon: Github,
        link: "https://github.com/xXLuisHenriqueXx",
        alt: "Github logo"
    },
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/luis-henrique-a2b833269/",
        alt: "Linkedin logo"
    },
    {
        icon: Gmail,
        link: "mailto:mailto:luishenri567@gmail.com",
        alt: "Gmail logo"
    }
]

export default function ContainerContacts() {
    return (
        <motion.div
            className={container()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
        >
            <h2 className={title()}>
                MEUS CONTATOS
            </h2>

            <div className={containerIcons()}>
                {contactsData.map((contact, index) => (
                    <a key={index} href={contact.link} target="_blank" rel="noreferrer">
                        <img className={icon()} src={contact.icon} alt={contact.alt} />
                    </a>
                ))}
            </div>
        </motion.div>
    )
}