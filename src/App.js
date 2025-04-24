import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import { useNumber } from "./useNumber";
import Loader from "./component/Loader";

function App() {
  const [numbers, regenerate] = useNumber();
  const [pokes, setPokes] = useState([]);
  const [myPokes, setMyPokes] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSelected(poke) {
    if (myPokes.length > 5) return;
    setMyPokes((cur) => [...cur, poke]);
    regenerate();
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
      {loading ? (
        <Loader />
      ) : (
        <Main pokes={pokes} onSelected={handleSelected} />
      )}
      <Footer myPokes={myPokes} />
    </div>
  );
}

export default App;
