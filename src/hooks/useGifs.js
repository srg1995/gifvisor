import { useEffect, useState } from "react";
import getGifs from "../services/gifService";

export function useGift({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);

      const keywordToUse =
        keyword || localStorage.getItem("LastKeyword") || "elefante";
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        if (keyword) localStorage.setItem("LastKeyword", keyword);
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
