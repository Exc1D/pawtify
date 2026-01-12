import { dogsData } from "./data.js";

// TODO: Get all DOM elements you need
const moodRadios = document.getElementById("mood-radios");
const getImageBtn = document.getElementById("get-image-btn");
const videosOnlyOption = document.getElementById("videos-only-option");
const dogModalInner = document.getElementById("dog-modal-inner");
const dogModal = document.getElementById("dog-modal");
const dogModalCloseBtn = document.getElementById("dog-modal-close-btn");

// TODO: Add event listeners
// 1. Add 'change' event to moodRadios to highlight selected option
// 2. Add 'click' event to dogModalCloseBtn to close the modal
// 3. Add 'click' event to getImageBtn to render a dog image

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

// TODO: Function to render a dog image
function renderDog() {
  // Get a single dog object
  // Update dogModalInner innerHTML with an img tag
  // Show the modal by setting display to 'flex'
}

// TODO: Function to get a single dog object
function getSingleDogObject() {
  // Get the matching dogs array
  // If array has only 1 dog, return it
  // Otherwise, return a random dog from the array
}

// TODO: Function to get matching dogs array
function getMatchingDogsArray() {
  // Check if a radio button is selected
  // Get the selected mood value
  // Check if 'videos only' checkbox is checked
  // Filter dogsData based on mood and video preference
  // Return the filtered array
}

// TODO: Function to get unique moods from dogs data
function getMoodsArray(dogs) {
  const dogMoods = [];

  // Loop through all dogs
  for (let dog of dogs) {
    // Loop through each dog's moodTags
    for (let mood of dog.moodTags) {
      // If mood is not in array, add it
      if (!dogMoods.includes(mood)) {
        dogMoods.push(mood);
      }
    }
  }
  return dogMoods;
}

// TODO: Function to render mood radio buttons
function renderMoodRadios(dogs) {
  // Get unique moods array
  const moods = getMoodsArray(dogs);

  // Create HTML string for radio buttons
  let moodRadiosHTML = "";

  // Loop through moods and create radio button HTML
  for (let mood of moods) {
    moodRadiosHTML += `
  <div>
    <input 
      type="radio" 
      id="${mood}" 
      value="${mood}" 
      name="${mood}"/>
    <label 
      for="${mood}" 
      class="label">
      ${mood}
    </label>
  </div>
  `;
  }
  // Set moodRadios innerHTML
  moodRadios.innerHTML += moodRadiosHTML;
}

// TODO: Call renderMoodRadios with dogsData to initialize the page

/*
        CHALLENGES:
        
        1. Create a function that extracts all unique moods from the dogsData array
           - Loop through all dogs
           - Extract mood tags
           - Ensure no duplicates
        
        2. Create a function to render radio buttons dynamically
           - Use the moods array
           - Generate HTML for each mood
           - Each radio should have: id, value, name="moods", and label
        
        3. Add a highlight effect when a radio is selected
           - Listen for 'change' event on the radio buttons container
           - Remove highlight from all radios
           - Add highlight to the selected radio's parent element
        
        4. Create a function to filter dogs by mood and video preference
           - Get the selected mood from checked radio
           - Check if "videos only" is checked
           - Filter dogsData based on these conditions
           - Return matching dogs array
        
        5. Create a function to get a single random dog
           - If only one match, return it
           - If multiple matches, return a random one using Math.random()
        
        6. Create a function to display the dog image in a modal
           - Get a dog object
           - Create an img element with the dog's image and alt text
           - Show the modal
        
        7. Add functionality to close the modal
           - Listen for click on close button
           - Hide the modal
        
        BONUS: Add your own styling improvements or additional features!
        */

renderMoodRadios(dogsData);
