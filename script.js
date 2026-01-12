import { moviesData } from "./data.js";

const genreRadios = document.getElementById("genre-radios");
const getMovieBtn = document.getElementById("get-movie-btn");
const classicsOnlyOption = document.getElementById("classics-only-option");
const movieModalInner = null; // Replace with correct element
const movieModal = null; // Replace with correct element
const movieModalCloseBtn = null; // Replace with correct element

// Event listeners
genreRadios.addEventListener("change", highlightCheckedOption);
// 2. Add 'click' event to movieModalCloseBtn to close the modal
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

// TODO: Function to close the modal
function closeModal() {
  // Set modal display to 'none'
}

// TODO: Function to render a movie
function renderMovie() {
  // Get a single movie object
  const movie = getSingleMovieObject();
  // Update movieModalInner innerHTML with movie card HTML
  // Include: poster, title, year, description, rating
  // Show the modal by setting display to 'flex'
}

// TODO: Function to get a single movie object
function getSingleMovieObject() {
  // Get the matching movies array
  const movieMatches = getMatchingMoviesArray();
  // If array has only 1 movie, return it
  if (movieMatches.length === 1) {
    return movieMatches[0];
  }
  return movieMatches[Math.floor(Math.random() * movieMatches.length)];
  // Otherwise, return a random movie from the array
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
  // Create an empty array for genres
  const genres = [];
  // Loop through all movies
  for (const movie of movies) {
    // Loop through each movie's genreTags
    for (const genre of movie.genreTags) {
      // If genre is not in array, add it
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    }
  }
  return genres;
}

// TODO: Function to render genre radio buttons
function renderGenreRadios(movies) {
  // Get unique genres array
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
  // Set genreRadios innerHTML
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
