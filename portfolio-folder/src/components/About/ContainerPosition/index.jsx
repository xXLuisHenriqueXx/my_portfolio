import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
    slots: {
        mainContainer: 'lg:absolute'
    },

    variants: {
        mainContainer: {
            left: {
                mainContainer: 'lg:top-20 2xl:top-28 lg:left-10 2xl:-left-28'
            },
            right: {
                mainContainer: 'lg:bottom-20 2xl:bottom-28 lg:right-10 2xl:-right-28'
            }
        }
    }
});

const { mainContainer } = card();

export default function ContainerPosition({ side, children }) {
    return (
        <div className={mainContainer({ mainContainer: side})}>
            {children}
        </div>
    )
}
