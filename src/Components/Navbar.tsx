export default function Navbar(){
    return (
        <nav className="w-full bg-[rgb(23,23,23)] flex justify-center py-1">
          <div className="flex justify-between w-96">
            <a href="#about" className="p-2 text-white cursor-pointer">About Me</a>
            <a href="#skills" className="p-2 text-white cursor-pointer">Skills</a>
            <a href="#projects" className="p-2 text-white cursor-pointer">Projects</a>
            <a href="#contacts" className="p-2 text-white cursor-pointer">Contact</a>
          </div>
        </nav>
    )
}