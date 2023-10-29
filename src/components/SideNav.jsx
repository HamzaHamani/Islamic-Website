import { AnimatePresence, motion } from "framer-motion";
// --------------------start-icons
// import { House } from "@styled-icons/bootstrap";
// -------------------end-icons
import "./SideNav.css";
import iQurasn from "../assets/iQurAn.png";
import allahSvg from "../assets/Allah.svg.png";
import { Link } from "react-router-dom";

function SideNav({ selected, setSelected }) {
  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <nav className="h-[100vh] w-[25%]  p-5 flex flex-col items-center justify-start gap-8 motionContainer relative z-10 cursor-default">
      {/* Temp logo from https://logoipsum.com/ */}
      {/* <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-[100px] mt-10"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
          fill="#FFFFFF"
        ></path>
      </svg> */}
      <img src={iQurasn} width={"170px"} className=" mb-[40px] mt-[-10px]" />
      {/* <h1>QURAN</h1> */}
      <img
        src={allahSvg}
        width={"90px"}
        className={
          "absolute bottom-2 rotate-12 mix-blend-multiply opacity-30 scale-50"
        }
      />
      <NavItem
        // icon={<House />}
        selected={selected === 0}
        id={0}
        setSelected={setSelected}
        path={"/"}
      />
      <NavItem
        // icon={<GiOpenBook />}
        selected={selected === 1}
        id={1}
        setSelected={setSelected}
        path={"quran"}
      />

      <NavItem
        // icon={<BiSolidTimeFive />}
        selected={selected === 2}
        id={2}
        setSelected={setSelected}
        path={"/prayerTime"}
      />

      <NavItem
        // icon={<SiBookstack />}
        selected={selected === 3}
        id={3}
        setSelected={setSelected}
        path={"/adzkar"}
      />
      <NavItem
        // icon={<BsFillBookmarkHeartFill />}
        selected={selected === 4}
        id={4}
        setSelected={setSelected}
        path={"/bookmarks"}
      />
    </nav>
  );
}

function NavItem({ selected, id, setSelected, icon, path }) {
  //   console.log(icon);
  let name = "";
  if (id == 0) {
    name = "HOME";
  } else if (id == 1) {
    name = "QURAN";
  } else if (id == 2) {
    name = "PRAYER TIME";
  } else if (id == 3) {
    name = " ADZKAR";
  } else if (id == 4) {
    name = "BOOKMARKS";
  }
  return (
    <Link to={path}>
      <motion.button
        className="p-3 text-[1.8rem]   w-[400px] rounded-md transition-colors relative motionButton overflow-hidden"
        onClick={() => setSelected(id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center p-3 gap-6   ">
          {icon}
          <span>{name}</span>
        </span>
        <AnimatePresence>
          {selected && (
            <motion.span
              className="absolute inset-0 rounded-md bg-[#e9b845] z-0 overflow-hidden "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, fontSize: "300px" }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            ></motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </Link>
  );
}

export default SideNav;
