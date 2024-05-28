const newProfilePictureURL =
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600";

function changeProfilePictures() {
  const profilePictures = document.querySelectorAll("img");

  profilePictures.forEach((img) => {
    if (img.src.includes("profile")) {
      img.src = newProfilePictureURL;
    }
  });
}
changeProfilePictures();
const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
