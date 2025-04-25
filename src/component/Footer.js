import CardSlot from "./CardSlot";
import SelectedCard from "./SelectedCard";
import poke1 from "../assets/poke1.png";

function Footer({ myPokes, onToggle, onAgain, start }) {
  const slot = 6 - myPokes.length;

  return (
    <footer
      className={`footer ${start && myPokes.length < 6 ? "footer-start" : ""}`}
    >
      {!start && myPokes.length < 6 && (
        <button className="footer-btn" onClick={onToggle}>
          Lets Start
        </button>
      )}
      {myPokes.length > 5 && (
        <button className="footer-btn" onClick={onAgain}>
          Lets Again
        </button>
      )}
      <div className="footer-title">
        <h1>Pokémon Deck</h1>
        <div className="footer-title-properties">
          <p className="properties-p">number of</p>
          <img src={poke1 || ""} alt="poke topu" />
          <p className="properties-p">selected</p>
          <p className="count">{myPokes.length}</p>
        </div>
      </div>
      <div className="footer-box">
        {myPokes.map((poke) => (
          <SelectedCard poke={poke} key={poke.name} />
        ))}
        {Array.from({ length: slot }, (_, i) => (
          <CardSlot key={i} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
