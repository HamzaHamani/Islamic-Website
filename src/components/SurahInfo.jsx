import { data } from "autoprefixer";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
// import {
//   AiOutlineHeart,
//   AiOutlineLink,
//   AiOutlinePlayCircle,
//   AiFillHeart,
// } from "react-icons/AI";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import styles from "./SurahInfo.module.css";
import Loader from "./Loader";
import { useSearchParams } from "react-router-dom";

function SurahInfo() {
  const [searchP, setSearchP] = useSearchParams();

  const clickedSurah = searchP.get("surah");
  const [surah, setSurah] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [showUrl, setShowUrl] = useState(false);

  useEffect(() => {
    async function Fetch() {
      try {
        setLoading(false);
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${clickedSurah}`
        );
        const data = await res.json();

        setSurah(data.data.ayahs);
        console.log(surah);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    Fetch();
  }, [clickedSurah]);

  async function copySiteUrl() {
    try {
      const siteUrl = window.location.href;
      await navigator.clipboard.writeText(siteUrl);
      alert("Site URL copied to clipboard");
    } catch (error) {
      console.error("Unable to copy site URL to clipboard: ", error);
    }
  }

  //! remove the state for c;icked surrah and change it with getting it from the link
  //! make container for info and for surahs
  if (loading) return <Loader />;
  {
    surah?.map((item) => {
      return (
        <motion.div className={styles.wrapper} key={Date.now()}>
          <div className={styles.container}>
            <div className={styles.first}>
              <p>1:1</p>
              <h2>سشيشيشيشيشسي</h2>
            </div>
            <div className={styles.second}>
              <div>
                {" "}
                <p>English - something </p>
                <span>|</span>
                <button> SEE TAFSIR </button>
              </div>

              <p>In the name of Allah,</p>
            </div>
            <div className={styles.third}>
              <div
                className={`${styles.icon1} cursor-pointer`}
                onClick={() => setBtn1((previous) => !previous)}
              >
                a{" "}
              </div>
              <div
                className={`${styles.icon2} cursor-pointer`}
                onClick={() => {
                  setBtn2((previous) => !previous);
                  copySiteUrl();
                }}
              ></div>
              <div
                className={`${styles.icon3} cursor-pointer`}
                onClick={() => setBtn3((previous) => !previous)}
              >
                a
              </div>
              <span className={styles.line}></span>
            </div>
          </div>
        </motion.div>
      );
    });
  }
}

export default SurahInfo;
