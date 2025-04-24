function SelectedCard({ poke }) {
  return (
    <div className="cart-open">
      <img
        src={poke.sprites?.other?.dream_world?.front_default}
        alt={poke?.name}
      />
      <div className="info">
        <h3>{poke.name}</h3>
        <div className="stats">
          <p>
            ❤️ HP <span>{poke?.stats[0]?.base_stat}</span>
          </p>
          <p>
            🗡️ Attack <span>{poke?.stats[1]?.base_stat}</span>
          </p>
          <p>
            🛡️ Defense <span>{poke?.stats[2]?.base_stat}</span>
          </p>
          <p>
            🏃🏻‍♂️ Speed <span>{poke?.stats[5]?.base_stat}</span>
          </p>
        </div>
      </div>
      <span className={`type ${poke?.types[0]?.type?.name}`}>
        {poke?.types[0]?.type?.name}
      </span>
    </div>
  );
}

export default SelectedCard;
