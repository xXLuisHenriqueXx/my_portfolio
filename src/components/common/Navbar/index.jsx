import React, { useState } from "react";
import { tv } from "tailwind-variants";
import { FiMenu, FiX } from "react-icons/fi";

const card = tv({
    slots: {
        container: "fixed left-0 flex justify-between items-center w-full h-20 z-50 bg-transparent",
        containerContent: "md:flex md:justify-end md:items-center md:w-[500px]",
        containerLinks: "hidden md:flex md:flex-row md:pr-4 lg:pr-12 md:space-x-12 lg:space-x-16",
        containerMenu: "md:hidden fixed flex flex-col items-center top-16 left-0 w-full h-[400px] bg-background",
        nameText: "text-4xl font-jolly text-violetColor md:pl-4 lg:pl-12 lg:text-5xl",
        textLinkHamburguer: "text-5xl font-bebas text-lightColor hover:text-violetColor transition-colors",
        textLink: "text-2xl font-bebas text-lightColor hover:text-violetColor transition-all duration-500",
        icon: "text-4xl text-lightColor"
    }
});

const { container, containerContent, containerLinks, containerMenu, nameText, textLinkHamburguer, textLink, icon } = card();

const navData = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "Sobre mim",
        link: "#about"
    },
    {
        name: "Projetos",
        link: "#projects"
    }
]

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={container()}>
            <div>
                <h1 className={nameText()}>Luis Henrique</h1>
            </div>
            <div className={containerContent()}>
                <div className={containerLinks()}>
                    {navData.map((item, index) => (
                        <a key={index} href={item.link} className={textLink()}>{item.name}</a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={handleMenu}>
                        {showMenu ? (
                            <FiX className={icon()} />
                        ) : (
                            <FiMenu className={icon()} />
                        )}
                    </button>
                </div>
                {showMenu && (
                    <div className={containerMenu()}>
                        {navData.map((item, index) => (
                            <a key={index} href={item.link} className={textLinkHamburguer()}>{item.name}</a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
} 