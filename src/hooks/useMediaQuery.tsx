import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }
    const listener = () => {
      setMatches(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [mediaQuery, matches]);
  return matches;
}

export default useMediaQuery;
