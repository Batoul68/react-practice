
function ProfilePicture() {

  const imageUrl = `./src/assets/cat.png`;

  const handleClick = (e) => {
    e.target.style.display = "none";
  }

  return(
    <img src={imageUrl} onClick={(e) => handleClick(e)}></img>
  );
}
export default ProfilePicture