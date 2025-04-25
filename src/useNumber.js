import { useState, useEffect, useCallback, useRef } from "react";

const generate18UniqueNumbers = () => {
  const set = new Set();
  while (set.size < 18) {
    set.add(Math.floor(Math.random() * 100) + 1);
  }
  return Array.from(set);
};

export const useNumber = (start) => {
  const [allNumbers, setAllNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroup, setCurrentGroup] = useState([]);
  const prevStart = useRef(start);

  // Todo: Sadece false ➝ true geçişinde tetiklen
  useEffect(() => {
    if (!prevStart.current && start) {
      const generated = generate18UniqueNumbers();
      setAllNumbers(generated);
      setCurrentIndex(0);
      setCurrentGroup(generated.slice(0, 3));
    }
    prevStart.current = start;
  }, [start]);

  const regenerate = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const startIndex = nextIndex * 3;
      const nextGroup = allNumbers.slice(startIndex, startIndex + 3);
      if (nextGroup.length > 0) {
        setCurrentGroup(nextGroup);
        return nextIndex;
      }
      return prevIndex;
    });
  }, [allNumbers]);

  return [currentIndex, currentGroup, regenerate];
};
