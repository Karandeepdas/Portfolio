
import checkers from '../assets/checkers.jpg'
import Ecart from "../assets/Ecart.png"
import weatherapp from "../assets/weatherapp.png"
import admin from "../assets/admindash.avif"
export default function Project(){
    return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 py-2 md:px-16 px-8 bg-[rgb(23,23,23)]">
        <div className="col-span-1 flex md:flex-row flex-col rounded-xl bg-[rgb(8,8,8)]">
            <div className="w-full h-1/3 md:w-1/3 md:h-full">
             <img
              src={admin}
              alt="Technology"
              className="w-full h-full pointer-events-none object-cover cursor- rounded-t-xl md:rounded-l-xl md:rounded-t-none"/> </div>
           <div className="flex-1 p-5 items-center gap-1">
            
             <h1 className="text-white font-bold font-sans text-2xl ">FinanceVisualizer</h1>
            
             <div className='flex my-2 gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
                <h1 className='text-white text-xl font-serif'>Key Highlights</h1>
             </div>
               <ul className="list-disc list-outside space-y-2 text-gray-300 text-md marker:text-green-500">
                 <li>Full-stack finance tracker with interactive visualizations</li>
                  <li>Secure REST APIs with JWT-based authentication</li>
                 <li>Responsive React + Tailwind frontend</li>
                  <li>Production deployment on Vercel with CI/CD</li>
               </ul>
             
               <div className='flex my-2 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
               <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <h1 className='text-white text-xl font-serif'>Tech used</h1>
             </div>
             <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-2 p-1'>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>React.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Javascript</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Node.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Mongodb</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>JWT</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Tailwind</div>
             </div>
             <div className='w-full flex justify-end mt-4'>
               <a target="_blank" rel="noopener noreferrer" href='https://financevisualiz.netlify.app/' className='text-white bg-green-700 p-2 cursor-pointer rounded-lg'>Demo</a>
              </div>
           </div>
        </div>
        <div className="col-span-1 flex rounded-xl bg-[rgb(8,8,8)] flex-col md:flex-row">
            <div className="w-full h-1/3 md:w-1/3 md:h-full">
             <img
              src={checkers}
              alt="Technology"
              className="w-full h-full pointer-events-none object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"/> </div>
           <div className="flex-1 p-5 items-center gap-1">
            
             <h1 className="text-white font-bold font-sans text-2xl ">Checkers</h1>
            
             <div className='flex my-2 gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
                <h1 className='text-white text-xl font-serif'>Key Highlights</h1>
             </div>
               <ul className="list-disc list-outside space-y-2 text-gray-300 text-md marker:text-green-500 px-1">
                 <li>Designed a responsive Checkers board UI using React + Vite and vanilla CSS</li>
                  <li>Implemented complete Checkers rules including captures and move validation</li>
                 <li>Built an AI player using the Minimax algorithm for strategic decision-making</li>
                  <li>Ensured smooth gameplay through optimized state handling and rendering</li>
               </ul>
             
               <div className='flex my-2 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
               <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <h1 className='text-white text-xl font-serif'>Tech used</h1>
             </div>
             <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-2 p-1'>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>HTML</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>CSS</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>React</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Node.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Express</div>
                
             </div>
             <div className='w-full flex justify-end mt-4'>
               <a target="_blank" rel="noopener noreferrer" href='https://github.com/Karandeepdas/Checkers' className='text-white bg-green-700 p-2 cursor-pointer rounded-lg'>Demo</a>
              </div>
           </div>
        </div>
      <div className="col-span-1 flex md:flex-row flex-col rounded-xl bg-[rgb(8,8,8)]">
            <div className="w-full h-1/3 md:w-1/3 md:h-full">
             <img
              src={Ecart}
              alt="Technology"
              className="w-full h-full pointer-events-none object-cover md:rounded-l-xl md:rounded-t-none rounded-t-xl"/> </div>
           <div className="flex-1 p-5 items-center gap-1">
            
             <h1 className="text-white font-bold font-sans text-2xl ">E-commerce</h1>
            
             <div className='flex my-2 gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
                <h1 className='text-white text-xl font-serif'>Key Highlights</h1>
             </div>
               <ul className="list-disc list-outside space-y-2 text-gray-300 text-md marker:text-green-500 px-1">
                 <li>Built a full-stack e-commerce cart application with CRUD operations and dynamic pricing</li>
                  <li>Managed global cart state using React Context API for item updates and real-time totals</li>
                 <li>Responsive UI built with Tailwind CSS</li>
                  <li>Checkout workflow with notifications using Hot toast</li>
               </ul>
             
               <div className='flex my-2 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
               <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <h1 className='text-white text-xl font-serif'>Tech used</h1>
             </div>
             <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-2 p-1'>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>React.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Javascript</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Node.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Mongodb</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>HotToast</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Tailwind</div>
             </div>
             <div className='w-full flex justify-end mt-4'>
               <a target="_blank" rel="noopener noreferrer" href='https://github.com/Karandeepdas/E-com-website' className='text-white bg-green-700 p-2 cursor-pointer rounded-lg'>Demo</a>
              </div>
           </div>
        </div>
            <div className="col-span-1 flex md:flex-row flex-col rounded-xl bg-[rgb(8,8,8)]">
            <div className="md:w-1/3 md:h-full w-full h-1/3">
             <img
              src={weatherapp}
              alt="Technology"
              className="w-full h-full pointer-events-none object-cover md:rounded-l-xl md:rounded-t-none rounded-t-xl"/> </div>
           <div className="flex-1 p-5 items-center gap-1">
            
             <h1 className="text-white font-bold font-sans text-2xl ">WeatherApp</h1>
            
             <div className='flex my-2 gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-500">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
               </svg>
                <h1 className='text-white text-xl font-serif'>Key Highlights</h1>
             </div>
               <ul className="list-disc list-outside space-y-2 text-gray-300 text-md marker:text-green-500 px-1">
                 <li>Built a real-time weather app using the Visual Crossing REST API for accurate global forecasts</li>
                  <li>Implemented location-based search with debounced API calls</li>
                 <li>Responsive UI with React hooks and Tailwind</li>
                  <li>Deployed on Vercel for fast, scalable production delivery</li>
               </ul>
             
               <div className='flex my-2 gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
               <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                <h1 className='text-white text-xl font-serif'>Tech used</h1>
             </div>
             <div className='w-full grid md:grid-cols-4  grid-cols-2 gap-2 p-1'>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>React.js</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Typescript</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Hot-Toast</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>RestApi</div>
                <div className='col-span-1 flex justify-center items-center bg-blue-700 text-white rounded-xl px-1'>Tailwind</div>
             </div>
             <div className='w-full flex justify-end mt-4'>
               <a  target="_blank" rel="noopener noreferrer" href='https://weather-app-sdt7.vercel.app/' className='text-white bg-green-700 p-2 cursor-pointer rounded-lg'>Demo</a>
              </div>
           </div>
        </div>
    </div>
    )
}