import { useEffect } from "react";

function Adzkar({ setSelected }) {
  useEffect(() => {
    setSelected(3);
  }, []);
  return <div>Adzkar</div>;
}

export default Adzkar;
