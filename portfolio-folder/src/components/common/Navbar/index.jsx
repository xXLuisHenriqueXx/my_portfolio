import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    
    const textLinkHamburguer = "text-lightColor text-5xl py-10 font-bebas hover:text-violetColor transition-colors"
    const textLink = "text-lightColor text-2xl font-bebas hover:text-violetColor transition-all duration-500 lg:text-2xl"
    const icon = "text-lightColor text-4xl"
    
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav
            className='
                fixed z-50 bg-transparent h-20 px-4 w-full
                flex justify-between items-center
                xl:px-12
                2xl:px-24
            '
        >
            <div>
                <h1 className="
                        text-violetColor font-jolly text-4xl 
                        md:pl-4 
                        lg:pl-12 lg:text-5xl
                    "
                >
                    Luis Henrique
                </h1>
            </div>
            <div className="
                    md:w-[500px] md:flex md:justify-end md:items-center
                "
            >
                <div className="
                        hidden
                        md:flex md:flex-row md:space-x-12 md:pr-4 
                        lg:space-x-16 lg:pr-12
                    "
                >
                    <a href="#home" className={textLink}>Home</a>
                    <a href="#about" className={textLink}>Sobre mim</a>
                    <a href="#projects" className={textLink}>Projetos</a>
                </div>

                <div className="
                        md:hidden
                    "
                >
                    <button onClick={handleMenu}>
                        {showMenu ? (    
                                <FiX className={icon} />
                        ) : (    
                                <FiMenu className={icon} />
                        )}
                    </button>
                </div>
                {showMenu && (
                    <div className="
                            md:hidden
                            fixed top-16 left-0 w-full h-[400px]
                            bg-background flex flex-col items-center
                        "
                    >
                        <a href="#home" className={textLinkHamburguer} onClick={handleMenu}>Home</a>
                        <a href="#about" className={textLinkHamburguer} onClick={handleMenu}>Sobre mim</a>
                        <a href="#projects" className={textLinkHamburguer} onClick={handleMenu}>Projetos</a>
                    </div>
                )}
            </div>
        </nav>
    );
} 