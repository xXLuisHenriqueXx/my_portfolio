import React from "react";

export default function Container({ children, id}) {
    const Class = `container mx-auto w-full min-h-screen px-4`;
    
    return (
        <div
            className={Class}
            id={id}
        >
            { children }
        </div>
    );
}