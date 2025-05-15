import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className="
       "
    >
      <motion.div
        className=" flex flex-col h-screen
         text-center gap-16 text-black text-lg sm-txt-xl pt-[5vh] md:text-2xl lg:text-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-black pb-[4vh]" variants={itemVariants}>
          Hier entsteht eine Website ...
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.span>
            Komplettlösungen für Photovoltaik und Energiesystemen – von der
            Planung bis zur Inbetriebnahme.
          </motion.span>
        </motion.div>
        <motion.div className="flex justify-center">
          <motion.img
            src="/FS-LOGO.png"
            alt="Feldhoff Solar - Photovoltaik und Energiesysteme"
            className="w-auto h-auto justify-center "
            variants={itemVariants}
          />
        </motion.div>
        <motion.div className="mail flex flex-col variants={itemVariants} px-5 md:px-[38vw]">
          <motion.div variants={itemVariants} className="flex flex-row gap-4">
            <FaPhoneAlt />
            <motion.a
              href="tel:+491623231807"
              className="hover:text-fsorange hover:underline"
            >
              0162 3231807
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-row gap-3">
            <FaEnvelope className="mr-2" />
            <motion.a
              href="mailto:toege@feldhoff-solar.de"
              className="hover:text-fsorange hover:underline"
            >
              toege@feldhoff-solar.de
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
