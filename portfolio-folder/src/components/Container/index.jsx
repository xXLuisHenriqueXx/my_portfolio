import React from "react";

export default function Container({ children, id, bgImage, bgPosition }) {
    const Class = `container mx-auto w-full h-[100vh] px-4 ${bgPosition} ${bgImage} bg-no-repeat lg:bg-cover`

    return (
        <div 
            className={Class}
            id={id}
        >
            { children }
        </div>
    );
}