import { useState, useCallback } from "react";

const generateUniqueNumbers = (excludedNumbers) => {
  const set = new Set();
  const excludedSet = new Set(excludedNumbers);

  while (set.size < 3) {
    const random = Math.floor(Math.random() * 100) + 1;
    if (!excludedSet.has(random)) {
      set.add(random);
    }
  }
  return Array.from(set);
};

export const useNumber = () => {
  const [history, setHistory] = useState([]); // Tüm geçmiş sayılar burada
  const [numbers, setNumbers] = useState(() => {
    const initial = generateUniqueNumbers([]);
    setHistory(initial); // ilk değerle geçmişi başlat
    return initial;
  });

  const regenerate = useCallback(() => {
    const newNumbers = generateUniqueNumbers(history);
    setNumbers(newNumbers);
    setHistory((prev) => [...prev, ...newNumbers]); // geçmişe yeni 3 sayıyı ekle
  }, [history]);

  return [numbers, regenerate];
};
