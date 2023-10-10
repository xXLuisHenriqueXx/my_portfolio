const NavBar = ()=> {
  
    const navBarMenu = [
    {
        name: 'Home',
        link: "#"
    },
    {
        name: 'About',
        link: "#about"
    },
    {
        name: 'Contact',
        link: "#contact"
    }
    ];

    return (
        <div className="flex items-center justify-between px-8 pt-[5px]">
            <span className="flex gap-x-[100px] font-bebas font-bold text-3xl text-violetText">Luis Henrique</span>
            <div>
                <a href={name}>

                </a>
            </div>
        </div>
    )
}



export default NavBar;