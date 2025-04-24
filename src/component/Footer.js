import CardSlot from "./CardSlot";
import SelectedCard from "./SelectedCard";

function Footer({ myPokes }) {
  const slot = 6 - myPokes.length;

  return (
    <footer className="footer-box">
      {myPokes.map((poke) => (
        <SelectedCard poke={poke} key={poke.name} />
      ))}
      {Array.from({ length: slot }, (_, i) => (
        <CardSlot key={i} />
      ))}
    </footer>
  );
}

export default Footer;
