import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        container: 'flex flex-col justify-center items-center pt-24 pb-8 lg:items-start lg:absolute lg:top-24 lg:left-12 xl:left-24 2xl:top-40 2xl:left-36',
        normalText: 'text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-lightColor',
        title: 'text-7xl lg:text-8xl 2xl:text-10xl font-black font-bebas text-highlitedColor -mb-2'
    }
});

const { container, normalText, title } = card();

export default function ContainerText() {
    return (
        <div className={container()}>
            <h2 className={normalText()}>Olá, eu me chamo</h2>
            <h1 className={title()}>LUIS HENRIQUE</h1>
            <h2 className={normalText()}>e sou desenvolvedor.</h2>
        </div>
    )
}
