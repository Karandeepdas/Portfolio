import {FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedin, FaTelegramPlane,FaInstagram } from "react-icons/fa";
export default function Contact(){
    return (
        <div className="grid w-full bg-[rgb(23,23,23)] py-2 px-16 grid-cols-1 gap-16 md:grid-cols-2">
         <div className="col-span-1 flex flex-col justify-center">
            <h1 className="text-white text-xl">Send a Message</h1>
            <form >
            <input type="hidden" name="_format" value="json" />
            <div className="flex gap-x-6 mb-6">
             <div className="w-full relative">
          <label className="flex  items-center mb-2 text-white text-sm font-medium" htmlFor="name">Name<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
           </svg>
         </label>
            <input type="text" name="name" id="name" className="block w-full h-11 px-5 py-2.5 border text-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 outline-none focus:outline-none focus:ring-0 focus:bg-[rgb(23,23,23)]" placeholder="Name" required/>
             </div>
            <div className="w-full relative">
            <label htmlFor="email" className="flex  items-center mb-2 text-white text-sm font-medium">Email<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
          </svg>
         </label>
         <input type="email" id="email" name="email" className="block w-full h-11 px-5 py-2.5 text-white border leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400  focus:outline-none focus:ring-0 focus:bg-[rgb(23,23,23)]" placeholder="Email" required/>
          </div>
           </div>
           <label htmlFor="message" className="block mb-2.5 text-sm font-medium text-heading text-white">Your message</label>
           <textarea id="message" rows={4}  className="bg-neutral-secondary-medium border border-default-medium text-white text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body rounded-xl" placeholder="Write your thoughts here..."></textarea>
           <button className="text-white p-2 mt-2 rounded-l-full rounded-r-full flex justify-center items-center gap-1 cursor-pointer bg-blue-700 hover:bg-blue-500">
            <FaTelegramPlane/>
            Send message</button>
          </form>
         </div>
         <div className="col-span-1 flex flex-col justify-between">
           <h1 className="text-white text-xl">Contact Information</h1>
           <p className="text-white">Feel free to reach out to me for any queries and oppertunity</p>
           <div>
           <div className="flex py-1 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-300">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
             </svg>
            <h1 className="text-white">+918812980382</h1>
           </div>
           <div className="flex py-1 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-300">
           <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
           </svg>
            <h1 className="text-white">karandeepdas6@gmail.com</h1>
           </div>
           </div>
           <div>
            <h1 className="text-white text-lg mb-2">Follow Me</h1>
           <div className="flex gap-8">
             <a href="" className="p-2 rounded-full bg-gray-300 hover:scale-105 transition"><FaGithub className="text-black text-2xl"/></a>
             <a href="" className="p-2 rounded-full bg-gray-300 hover:scale-105 transition"><FaLinkedin className="text-blue-600 text-2xl"/></a>
             <a href="" className="p-2 rounded-full bg-gray-300 hover:scale-105 transition"><FaXTwitter className="text-black text-2xl"/></a>
              <a href="" className="p-2 rounded-full bg-gray-300 hover:scale-105 transition"><FaInstagram className="text-black text-2xl"/></a>
           </div>
           </div>
         </div>
        </div>
    )
}