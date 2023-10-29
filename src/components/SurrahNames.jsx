import styles from "./SurrahNames.module.css";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
function SurrahNames({ index, data }) {
  const [searchP, setSearchP] = useSearchParams();
  function handleClick(one) {
    console.log(one.number);

    //!puting surrah number on url so user can  share link and get same surrah
    setSearchP({ surah: one.number });
  }
  //   console.log(data.number);
  //   console.log(index);
  return (
    <motion.li
      onClick={() => handleClick(data[index])}
      layout
      initial={{ opacity: 0, y: 0 }}
      // animate={{ opacity: 1, x: 1 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 1 }}
      key={index}
      className={`bg-slate-400 px-12 py-6  flex gap-[2rem] items-center cursor-pointer w-[40rem] ml-8 ${styles.li}`}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className={`capitalize text-black text-[2.5rem] ${styles.arab}`}>
          {data[index].name}
        </h2>
        <h3 className={`text-[2.5rem] text-gray-600 capitalize`}>
          {data[index].englishName}
        </h3>
      </motion.div>
      <h4 className={`bg-green-500  text-[2.1rem]  `}>{data[index].number}</h4>
    </motion.li>
  );
}

export default SurrahNames;
