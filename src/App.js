function App() {
  return (
    <div className="app">
      <h1 className="title">
        poke<span>Box</span>
      </h1>

      <div className="card-box">
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg"
            alt="butterfly"
          />
          <div className="info">
            <h3>Golem</h3>
            <div className="stats">
              <p>
                ❤️hp <span>45</span>
              </p>
              <p>
                🗡️attack <span>45</span>
              </p>
              <p>
                🛡️defense <span>45</span>
              </p>
              <p>
                🏃🏻‍♂️speed <span>45</span>
              </p>
            </div>
          </div>
          <span className="type poison">Poison</span>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg"
            alt="butterfly"
          />
          <div className="info">
            <h3>Pidgeotto</h3>
            <div className="stats">
              <p>
                ❤️hp <span>45</span>
              </p>
              <p>
                🗡️attack <span>45</span>
              </p>
              <p>
                🛡️defense <span>45</span>
              </p>
              <p>
                🏃🏻‍♂️speed <span>45</span>
              </p>
            </div>
            <span className="type grass">Grass</span>
          </div>
        </div>
        <div className="card">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg"
            alt="butterfly"
          />
          <div className="info">
            <h3>Arbok</h3>
            <div className="stats">
              <p>
                ❤️hp <span>45</span>
              </p>
              <p>
                🗡️attack <span>45</span>
              </p>
              <p>
                🛡️defense <span>45</span>
              </p>
              <p>
                🏃🏻‍♂️speed <span>45</span>
              </p>
            </div>
            <span className="type electric">Electric</span>
          </div>
        </div>
      </div>

      <div className="footer-box">
        <div className="cart-open">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg"
            alt="butterfly"
          />
          <div className="info">
            <h3>Hitmonli</h3>
            <div className="stats">
              <p>
                ❤️hp <span>45</span>
              </p>
              <p>
                🗡️attack <span>45</span>
              </p>
              <p>
                🛡️defense <span>45</span>
              </p>
              <p>
                🏃🏻‍♂️speed <span>45</span>
              </p>
            </div>
          </div>
          <span className="type poison">Poison</span>
        </div>
        <div className="card-slot">
          <div className="card-cover"></div>
        </div>
        <div className="card-slot">
          {" "}
          <div className="card-cover"></div>
        </div>
        <div className="card-slot">
          {" "}
          <div className="card-cover"></div>
        </div>
        <div className="card-slot">
          {" "}
          <div className="card-cover"></div>
        </div>
        <div className="card-slot">
          {" "}
          <div className="card-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
