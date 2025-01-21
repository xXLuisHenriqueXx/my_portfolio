import React from 'react';
import { tv } from 'tailwind-variants';
import { motion } from 'motion/react';

const card = tv({
    slots: {
        container: "w-full h-screen flex justify-center items-center",
        containerBox: "flex justify-center items-center w-full h-[75%] xl:w-[60%] xl:h-[90%] lg:mx-12 bg-backgroundCard rounded-md"
    }
});

const { container, containerBox } = card();

export default function ContainerMain({ children }) {
    return (
        <div className={container()}>
            <motion.div
                className={containerBox()}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                {children}
            </motion.div>
        </div>
    )
}