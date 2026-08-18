import React, {useState} from 'react';

function ArrayUpdate() {

  const [animes, setAnimes] = useState(["My Hero Academia", "Jujutsu Kaisen", "Haikyuu"]);

  function handleAddAnime() {

    const newAnime = document.getElementById("animeInput").value;
    document.getElementById("animeInput").value = "";

    setAnimes(a => [...a, newAnime]);
  }

  function handleRemoveAnime(index) {
    setAnimes(animes.filter((_, i) => i !== index));
  }

  return(
    <div>
      <h2>List of Animes</h2>
      <ul>
        {animes.map((anime, index) => 
                    <li className="updater-list-item" key={index} onClick={() => handleRemoveAnime(index)}>
                      {anime}
                    </li>)}
      </ul>
      <input type="text" id="animeInput" placeholder="Enter anime name"/>
      <button onClick={handleAddAnime}>Add Anime</button>
    </div>
  );
}
export default ArrayUpdate