import React from 'react';
import { tv } from 'tailwind-variants';

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
            <div className={containerBox()}>
                {children}
            </div>
        </div>
    )
}