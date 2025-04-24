import MainCard from "./MainCard";

function Main({ pokes, onSelected }) {
  return (
    <main className="card-box">
      {pokes.map((poke) => (
        <MainCard key={poke.name} poke={poke} onSelected={onSelected} />
      ))}
    </main>
  );
}

export default Main;
