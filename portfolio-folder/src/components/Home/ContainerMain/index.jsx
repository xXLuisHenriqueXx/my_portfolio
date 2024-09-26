import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    mainContainer: 'lg:flex lg:flex-row'
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
