/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {
  return (
    <>
    <div className="logo">
      <img src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg" />
    </div>
    <div className="App">
      <div className="inputs">
        <div className="form">
          <i class="fas fa-user icon"></i>
          <input className="control" type="text" placeholder="Utilisateur" />
        </div>
        <br />
        <div className="form">
          <i class="fas fa-user icon"></i>
          <input className="control" type="text" placeholder="Mot de passe" />
        </div>
        <br />
        <div className="submit">
          <button className="login" type="submit">Connexion</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
