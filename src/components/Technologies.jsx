import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiMysql, SiDjango, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const Technologies = () => {
  const appear = {
    hidden: { opacity: 0, y: 20 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }
    })
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">

        {[
          <FaPython className="text-4xl text-yellow-400" />,
          <SiDjango className="text-4xl text-green-700" />,
          <SiMysql className="text-4xl text-blue-500" />,
          <RiReactjsLine className="text-4xl text-cyan-400" />,
          <SiHtml5 className="text-4xl text-orange-600" />,
          <SiCss3 className="text-4xl text-blue-600" />,
          <SiJavascript className="text-4xl text-yellow-400" />,
          <FaGithub className="text-4xl text-white" />
        ].map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={appear}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border-4 border-neutral-800 p-4"
            animate={{
              y: [0, -10, 0],    
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Technologies;

