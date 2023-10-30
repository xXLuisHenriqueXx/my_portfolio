function NavBar(){
    return (
        <div className='absolute w-full h-screen'>
            <nav className='bg-black h-[40px]'>
                <a href="#home" className="text-white">Home</a>
                <a href="#about" className="text-white">About Me</a>
                <a href="#projects" className="text-white">Projects</a>
            </nav>
        </div>
    );
}

export default NavBar;  