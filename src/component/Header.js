import ash from "../assets/ash.png";

function Header() {
  return (
    <header>
      <img src={ash || ""} alt="ash" />
      <h1 className="title">
        Trainer’s <span>Choice</span>
      </h1>
    </header>
  );
}

export default Header;
