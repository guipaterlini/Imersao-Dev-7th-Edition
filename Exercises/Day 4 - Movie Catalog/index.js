function addMovie() {
  var favoriteMovie = document.getElementById("movie").value;
  var movieListElement = document.getElementById("movieList");

  movieListElement.innerHTML =
    movieListElement.innerHTML + "<img src=" + favoriteMovie + ">";

  document.getElementById("movie").value = "";
}
