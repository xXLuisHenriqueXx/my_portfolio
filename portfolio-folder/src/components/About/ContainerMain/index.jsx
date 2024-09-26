import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        mainContainer: 'flex flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between lg:relative w-full h-screen gap-y-5'
    }
});

const { mainContainer } = card();

export default function ContainerMain({ children }) {
    return (
        <div className={mainContainer()}>
            {children}
        </div>
    )
}
