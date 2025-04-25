import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Loader from "./component/Loader";
import { useEffect, useState } from "react";
import { useNumber } from "./useNumber";

function App() {
  const [pokes, setPokes] = useState([]);
  const [myPokes, setMyPokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const [numbers, regenerate] = useNumber(start);

  function handleSelected(poke) {
    if (myPokes.length > 5) return;
    setMyPokes((cur) => [...cur, poke]);
    regenerate();
    if (myPokes.length === 5) setStart(false);
  }

  function handleToggle() {
    setStart((cur) => !cur);
  }

  function handleAgain() {
    setMyPokes([]);
    setTimeout(() => setStart(true), 0);
  }

  useEffect(() => {
    async function fetchPokes() {
      setLoading(true);
      try {
        const responses = await Promise.all(
          numbers.map((num) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res) =>
              res.json(),
            ),
          ),
        );
        setPokes(responses);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    }

    if (numbers.length) {
      fetchPokes();
    }
  }, [numbers]);

  return (
    <div className="app">
      <Header />
      {loading && <Loader />}
      {!loading && start && myPokes.length < 6 && (
        <Main pokes={pokes} onSelected={handleSelected} />
      )}
      <Footer
        myPokes={myPokes}
        start={start}
        onToggle={handleToggle}
        onAgain={handleAgain}
      />
    </div>
  );
}

export default App;
