import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Quran.module.css";
import SearchComp from "../components/SearchComp";
import SurrahNames from "../components/SurrahNames";
import Loader from "../components/Loader";
import SurahInfo from "../components/SurahInfo";
import Error from "../components/Error";

function Quran({ setSelected }) {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //? fetching all the surahs to display in left side
  useEffect(() => {
    async function fetchSurrah() {
      try {
        setLoading(true);
        setSelected(1);

        const res = await fetch("http://api.alquran.cloud/v1/surah");
        if (!res.ok)
          throw new Error("we couldnt fetch the data, something is wrong");
        const data = await res.json();

        if (res.status == 200) setSurah(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSurrah();
  }, []);

  return (
    <div className={`${styles.container} w-[75%] h-[100vh] `}>
      <div>
        {/* <input /> */}
        <SearchComp />
      </div>
      <div className={`${styles.flex} flex gap-5 justify-between`}>
        <div className={`${styles.flex1}  w-[30%]`}>
          <motion.ul
            className={`flex flex-col gap-8  h-[90vh] overflow-y-scroll`}
          >
            <AnimatePresence>
              {/* conditioanl rendring, if theres is no error or loading we gonna show all surrah  */}
              {/* {loading && <Loader />} */}
              {error && <Error message={error} />}
              {!loading &&
                !error &&
                surah.map((item, index) => {
                  return (
                    <SurrahNames
                      index={index}
                      key={index}
                      data={surah}
                      //? to check WICH surrah we clicked so we can fetch data about it
                    />
                  );
                })}
            </AnimatePresence>
          </motion.ul>
        </div>
        <motion.div
          layout
          initial={{ opacity: 0, y: +100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.1 }}
          className={`${styles.flex2} bg-yellow-100 w-[68%] p-1 h-[90vh] mt-[10px] mr-7 cursor-default `}
        >
          {" "}
          <SurahInfo />
        </motion.div>
      </div>
    </div>
  );
}

export default Quran;
