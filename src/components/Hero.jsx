import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/JPperfil.png"

const Hero = () => {
  return (
  <div className="border-b border-white pb-4 lg:mb-35">
    <div className="flex flex-wrap">

        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
                    lg:text-8xl">José Vilaça
                </h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-light text-transparent">
                Front-End Developer 
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {HERO_CONTENT}
                </p>
            </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-16">
            <div className="flex justify-end">
                <img src={profilePic} alt="José Vilaça" className="rounded-3xl object-cover shadow-xl" />
            </div>
        </div>

    </div>
  </div>
  )
}

export default Hero