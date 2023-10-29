import { useEffect } from "react";

function PrayerTime({ setSelected }) {
  useEffect(() => {
    setSelected(2);
  }, []);

  return <div>PrayerTime</div>;
}

export default PrayerTime;
