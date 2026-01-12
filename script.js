import { moviesData } from "./data.js";

const genreRadios = document.getElementById("genre-radios");
const getMovieBtn = document.getElementById("get-movie-btn");
const classicsOnlyOption = document.getElementById("classics-only-option");
const movieModalInner = document.getElementById("movie-modal-inner");
const movieModal = document.getElementById("movie-modal");
const movieModalCloseBtn = document.getElementById("movie-modal-close-btn");

// Event listeners
genreRadios.addEventListener("change", highlightCheckedOption);
// 2. Add 'click' event to movieModalCloseBtn to close the modal
movieModalCloseBtn.addEventListener("click", closeModal);
// 3. Add 'click' event to getMovieBtn to render a movie
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
  movieModalInner.innerHTML = `
  <button id="movie-modal-close-btn">×</button>
  <div>
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
    const isClassicsOnly = classicsOnlyOption.ariaChecked;

    return moviesData.filter((movie) => {
      if (isClassicsOnly) {
        return movie.genreTags.includes(selectedGenre) && movie.isClassicsOnly;
      }
      return movie.genreTags.includes(selectedGenre);
    });
  }
  prompt("Select a movie genre so we can start chillin.");
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

// TODO: Call renderGenreRadios with moviesData to initialize the page

/*
        CHALLENGES:
        
        YES! This uses the EXACT SAME LOGIC as the cat/dog projects, just with different data:
        
        - Instead of emotions/moods → genres
        - Instead of isGif/isVideo → isClassic
        - Instead of cat/dog images → movie posters and info
        
        The functions are identical in structure:
        
        1. Extract unique values from nested arrays (getGenresArray)
           - Same as getEmotionsArray/getMoodsArray
        
        2. Render radio buttons dynamically (renderGenreRadios)
           - Same pattern as before
        
        3. Highlight selected option (highlightCheckedOption)
           - Identical logic
        
        4. Filter by genre and classic preference (getMatchingMoviesArray)
           - Same as filtering by emotion/mood and gif/video
        
        5. Get random item from array (getSingleMovieObject)
           - Identical logic
        
        6. Display in modal (renderMovie)
           - Same pattern, just different HTML structure
        
        7. Close modal (closeModal)
           - Identical
        
        BONUS: Make the movie card look amazing with all the movie details!
        */

renderGenreRadios(moviesData);
