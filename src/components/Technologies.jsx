import { RiReactjsLine } from "react-icons/ri"
import { RiHtml5Fill, RiCss3Fill, RiVuejsFill, RiJavascriptFill, RiDatabase2Fill } from "react-icons/ri"
import { SiTableau, SiPowerbi, SiPython, SiApacheflink } from "react-icons/si"
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
  <div className="border-b border-neutral-300 pb-24">
    <motion.h1 
     whileInView={{opacity: 1, y: 0}}
     initial={{opacity: 0, y: -100}}
     transition={{duration: 1}}
    className="my-20 text-center text-4xl">Technologies</motion.h1>
    <motion.div 
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-300 p-4">
        <RiHtml5Fill className="text-6xl" style={{ color: '#E34F26' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <RiCss3Fill className="text-6xl" style={{ color: '#1572B6' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <RiVuejsFill className="text-6xl" style={{ color: '#4FC08D' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(4.8)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <RiJavascriptFill className="text-6xl" style={{ color: '#F7DF1E' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(2)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <RiDatabase2Fill className="text-6xl" style={{ color: '#336791' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <SiTableau className="text-6xl" style={{ color: '#1572B6' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <SiPowerbi className="text-6xl" style={{ color: '#F2C811' }} />
        </motion.div>
        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-300 p-4">
            <SiPython className="text-6xl" style={{ color: '#3776AB' }} />
        </motion.div>

    </motion.div>
  </div>

   )
}

export default Technologies