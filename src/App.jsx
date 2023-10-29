import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./components/SideNav";
import Adzkar from "./pages/Adzkar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import PrayerTime from "./pages/PrayerTime";
import Quran from "./pages/Quran";
// import "./index.css";

function App() {
  const [selected, setSelected] = useState();

  // console.log(clickedSurah);
  return (
    <div className="bigContainer">
      <SideNav selected={selected} setSelected={setSelected} />
      <Routes>
        <Route path="/" element={<Home setSelected={setSelected} />} />
        <Route
          path="quran"
          element={<Quran setSelected={setSelected} />}
        ></Route>
        <Route
          path="prayerTime"
          element={<PrayerTime setSelected={setSelected} />}
        />
        <Route path="Adzkar" element={<Adzkar setSelected={setSelected} />} />
        <Route
          path="bookmarks"
          element={<Bookmarks setSelected={setSelected} />}
        />
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
