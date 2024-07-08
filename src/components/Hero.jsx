import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero2.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
  <div id="hero" className="border-b border-neutral-300 pb-10 lg:mb-35 mt-28">
    <div className="flex flex-wrap">

        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
                    lg:text-8xl">José Vilaça
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible" 
                className="bg-gradient-to-r from-blue-500 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-light text-transparent">
                Information Systems Engineer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                    {HERO_CONTENT.p1}
                    <br />
                    {HERO_CONTENT.p2}
                </motion.p>
            </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-16">
            <div className="flex justify-end">
                <motion.img 
                initial={{x:100, opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                src={profilePic} alt="José Vilaça" 
                className="rounded-2xl object-cover shadow-xl" />
            </div>
        </div>

    </div>
  </div>
  )
}

export default Hero