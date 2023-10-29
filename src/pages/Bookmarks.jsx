import { useEffect } from "react";

function Bookmarks({ setSelected }) {
  useEffect(() => {
    setSelected(4);
  }, []);

  return <div>Bookmarks</div>;
}

export default Bookmarks;
