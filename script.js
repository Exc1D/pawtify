import { moviesData } from "./data.js";

// TODO: Get all DOM elements you need
const genreRadios = null; // Replace with correct element
const getMovieBtn = null; // Replace with correct element
const classicsOnlyOption = null; // Replace with correct element
const movieModalInner = null; // Replace with correct element
const movieModal = null; // Replace with correct element
const movieModalCloseBtn = null; // Replace with correct element

// TODO: Add event listeners
// 1. Add 'change' event to genreRadios to highlight selected option
// 2. Add 'click' event to movieModalCloseBtn to close the modal
// 3. Add 'click' event to getMovieBtn to render a movie

// TODO: Function to highlight the checked radio option
function highlightCheckedOption(e) {
  // Get all elements with class 'radio'
  // Remove 'highlight' class from all of them
  // Add 'highlight' class to the parent element of the checked radio
}

// TODO: Function to close the modal
function closeModal() {
  // Set modal display to 'none'
}

// TODO: Function to render a movie
function renderMovie() {
  // Get a single movie object
  // Update movieModalInner innerHTML with movie card HTML
  // Include: poster, title, year, description, rating
  // Show the modal by setting display to 'flex'
}

// TODO: Function to get a single movie object
function getSingleMovieObject() {
  // Get the matching movies array
  // If array has only 1 movie, return it
  // Otherwise, return a random movie from the array
}

// TODO: Function to get matching movies array
function getMatchingMoviesArray() {
  // Check if a radio button is selected
  // Get the selected genre value
  // Check if 'classics only' checkbox is checked
  // Filter moviesData based on genre and classic preference
  // Return the filtered array
}

// TODO: Function to get unique genres from movies data
function getGenresArray(movies) {
  // Create an empty array for genres
  // Loop through all movies
  // Loop through each movie's genreTags
  // If genre is not in array, add it
  // Return the genres array
}

// TODO: Function to render genre radio buttons
function renderGenreRadios(movies) {
  // Get unique genres array
  // Create HTML string for radio buttons
  // Loop through genres and create radio button HTML
  // Set genreRadios innerHTML
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
