import React from "react";

export default function Container({ children, id, bgImage, bgPosition }) {
    const Class = `container mx-auto w-full min-h-screen px-4 ${bgPosition} ${bgImage} bg-no-repeat`
    
    return (
        <div 
            className={Class}
            id={id}
        >
            { children }
        </div>
    );
}