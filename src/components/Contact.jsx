import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mt-10">

      {/* Animated Heading */}
      <motion.h1
        className="my-10 text-center text-4xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Details */}
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-center mt-5">{CONTACT.address}</p>
        <p className="text-center mb-3 mt-10">{CONTACT.phoneNo}</p>

        {/* Email with Infinite Glow Animation */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="border-b border-neutral-700 hover:text-gray-300 inline-block mt-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            textShadow: [
              "0 0 0px #ffffff",
              "0 0 6px #ffffff",
              "0 0 0px #ffffff",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          {CONTACT.email}
        </motion.a>

      </motion.div>
    </div>
  );
};

export default Contact;

