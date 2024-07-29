import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-300 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>

      <div className="flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3 px-4 lg:px-0">
          <p className="mb-20 font-light tracking-tighter text-center">
            {ABOUT_TEXT.p1}
            <br />
            {ABOUT_TEXT.p2}
            <br />
            {ABOUT_TEXT.p3}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
