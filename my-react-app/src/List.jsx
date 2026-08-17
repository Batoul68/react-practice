
function List(props) {

  // Sort alphabetical:
  //animes.sort((a, b) => a.name.localeCompare(b.name));
  // Sort reverse alphabetical:
  //animes.sort((a, b) => b.name.localeCompare(a.name));
  // Sort numeric:
  //animes.sort((a, b) => a.seasons - b.seasons);
  // Sort reverse numeric:
  //animes.sort((a, b) => b.seasons - a.seasons);
  // Filter list:
  //const highSeasonAnime = animes.filter(anime => anime.seasons > 6);
  
  const category = props.category;
  const itemList = props.items;

  const animeItems = itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.seasons}</b>
                                          </li>);

  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{animeItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category"
};

export default List