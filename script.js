import { moviesData } from "./data.js";

const genreRadios = document.getElementById("genre-radios");
const getMovieBtn = document.getElementById("get-movie-btn");
const classicsOnlyOption = document.getElementById("classics-only-option");
const movieModalInner = document.getElementById("movie-modal-inner");
const movieModal = document.getElementById("movie-modal");
const movieModalCloseBtn = document.getElementById("movie-modal-close-btn");

// Event listeners
genreRadios.addEventListener("change", highlightCheckedOption);
movieModalCloseBtn.addEventListener("click", closeModal);
movieModal.addEventListener("click", closeModal);
getMovieBtn.addEventListener("click", renderMovie);

function highlightCheckedOption(e) {
  const radioBtns = document.getElementsByClassName("radio");
  // Remove 'highlight' class from all of them
  for (const radioBtn of radioBtns) {
    radioBtn.classList.remove("highlight");
  }
  e.target.parentElement.classList.add("highlight");
}

function closeModal() {
  movieModal.style.display = "none";
}

function renderMovie() {
  // Get a single movie object
  const movie = getSingleMovieObject();

  if (!movie) {
    alert("No movies found. Try a different genre or uncheck 'Classics Only'.");
    return;
  }

  movieModalInner.innerHTML = `
  <div class="movie-card">
    <h3>${movie.title}</h3>
    <p>${movie.year}</p>
    <img 
      src="${movie.poster}" 
      alt="${movie.title} movie poster"
      />
    <p>${movie.description}</p>
    <p>${movie.rating}</p>
  </div>
  `;
  // Show the modal by setting display to 'flex'
  movieModal.style.display = "flex";
}

function getSingleMovieObject() {
  const movieMatches = getMatchingMoviesArray();

  if (!movieMatches.length) {
    return null;
  }

  // If array has only 1 movie, return it
  if (movieMatches.length === 1) {
    return movieMatches[0];
  }
  // Otherwise, return a random movie from the array
  return movieMatches[Math.floor(Math.random() * movieMatches.length)];
}

function getMatchingMoviesArray() {
  // Check if a radio button is selected
  if (document.querySelector("input[type='radio']:checked")) {
    // Get the selected genre value
    const selectedGenre = document.querySelector(
      "input[type='radio']:checked"
    ).value;
    // Check if 'classics only' checkbox is checked
    const isClassicsOnly = classicsOnlyOption.checked;

    return moviesData.filter((movie) => {
      if (isClassicsOnly) {
        return movie.genreTags.includes(selectedGenre) && movie.isClassic;
      }
      return movie.genreTags.includes(selectedGenre);
    });
  }
  alert("Select a movie genre so we can chill");
  return [];
}

// Function to get unique genres from movies data
function getGenresArray(movies) {
  const genres = [];

  // Loop through all movies
  for (const movie of movies) {
    for (const genre of movie.genreTags) {
      // If genre is not in array, add it
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    }
  }
  return genres;
}

function renderGenreRadios(movies) {
  const genres = getGenresArray(movies);

  // Create HTML string for radio buttons
  let radioBtns = "";

  // Loop through genres and create radio button HTML
  for (const genre of genres) {
    radioBtns += `
    <div class="radio">
      <input 
        type="radio"
        id="${genre}"
        value="${genre}"
        name="genres"
      />
      <label 
      for="${genre}"
      class="label"
      >${genre.charAt(0).toUpperCase() + genre.slice(1)}
      </label>
    </div>
    `;
  }
  genreRadios.innerHTML = radioBtns;
}

// BONUS: Make the movie card look amazing with all the movie details!

renderGenreRadios(moviesData);
