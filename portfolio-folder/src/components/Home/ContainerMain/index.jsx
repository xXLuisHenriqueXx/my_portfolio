import React from 'react';
import { tv } from 'tailwind-variants';

const card = tv({
  slots: {
    container: 'lg:flex lg:flex-row'
  }
});

const { container } = card();

export default function ContainerMain({ children }) {
  return (
    <div className={container()}>
        {children}
    </div>
  )
}
