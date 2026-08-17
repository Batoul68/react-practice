import List from './List.jsx'

function App() {

  const animes = [{id:1, name:"My Hero Academia", seasons:8}, 
                {id:2, name:"Jujutsu Kaisen", seasons:3}, 
                {id:3, name:"Haikyuu", seasons:5}];

  const shows = [{id:6, name:"Shameless", seasons:8}, 
                {id:7, name:"The Vampire Diaries", seasons:9}, 
                {id:8, name:"The Originals", seasons:7}];
  return(
    <>
      {animes.length > 0 && <List items={animes} category="animes"/>}
      {shows.length > 0 && <List items={shows} category="shows" />}
    </>
  );
}

export default App
