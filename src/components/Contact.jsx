import { CONTACT } from "../constants/index.js";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mt-20">

      {/* Title */}
      <motion.h1
        className="text-center text-4xl font-semibold"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h1>

      {/* Contact Container */}
      <motion.div
        className="mt-16 flex flex-col items-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >

        {/* Address */}
        <motion.div
          className="flex items-center gap-4 text-lg tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <MapPin className="text-cyan-400" />
          <span className="text-neutral-300">{CONTACT.address}</span>
        </motion.div>

        {/* Phone */}
        <motion.a
          href={`tel:${CONTACT.phoneNo}`}
          className="flex items-center gap-4 text-lg tracking-tight hover:text-cyan-300 transition"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Phone className="text-cyan-400" />
          <span>{CONTACT.phoneNo}</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-4 text-lg tracking-tight hover:text-cyan-300 transition"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            textShadow: [
              "0 0 0px rgba(34,211,238,0)",
              "0 0 10px rgba(34,211,238,0.7)",
              "0 0 0px rgba(34,211,238,0)"
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Mail className="text-cyan-400" />
          <span>{CONTACT.email}</span>
        </motion.a>

      </motion.div>
    </div>
  );
};

export default Contact;


