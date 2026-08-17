import profilePic from './assets/cat.png'
function Card() {
  return(
    <div className="card">
      <img className="card-img" alt="Profile Picture" src={profilePic}></img>
      <h2 className="card-title">Tunip</h2>
      <p className="card-text">Hem shem, I'm tunip, I want to be a dev, I bub meny</p>
    </div>
  );
}

export default Card