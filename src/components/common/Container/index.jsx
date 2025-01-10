import React from "react";
import { tv } from "tailwind-variants";

const card = tv({
    slots: {
        container: "container mx-auto w-full min-h-screen px-4"
    }
});

const { container } = card();

export default function Container({ children, id}) {
    return (
        <div className={container()} id={id}>
            { children }
        </div>
    )
}