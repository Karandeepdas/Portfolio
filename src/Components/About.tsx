import Profile from "../assets/Picsart_25-12-23_22-48-28-982-modified.png"
import resume from "../assets/mylatestresume.pdf"
export default function About(){
    return (
        <div className="bg-[rgb(23,23,23)] py-1 md:px-16 px-8 grid md:grid-cols-2 gap-2 grid-cols-1">
            <div className="order-2 md:order-1 col-span-1 flex flex-col gap-2 items-center md:items-start">
            <h2 className="text-green-500 text-3xl font-sans font-bold">Hello, I am Karan</h2>
            <h4 className="text-center text-white text-6xl font-extrabold">Full-Stack Developer</h4>
            <div className="w-full"><p className="text-justify text-gray-400 text-lg font-serif">I am a passionate full-stack developer with a strong interest in exploring modern and emerging technologies. I hold a degree in Mathematics and Computing from IIT Ropar and have hands-on experience with web development technologies. I enjoy solving complex problems and continuously strive to enhance my technical skills while staying aligned with industry trends.</p></div>
             <a  href={resume} target="_blank" rel="noopener noreferrer" className="text-white py-1 px-3 flex gap-1 rounded-md bg-green-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
               </svg>Resume</a>
            </div>
            <div className="order-1 md:order-2 col-span-1 flex justify-center">
             <img className="md:w-80 w-64" src={Profile}></img>
            </div>
        </div>
    )
}