/*This document adds functionality to the webiste*/

/**
 * Function that adds a random greeting to the page.
 */
function addWelcome() {
    const aboutMe =
        ['Welcome', 
        'Bienvenido', 
        'herzlich willkommen', 
        '欢迎', 
        'akeyi'];

    // Pick a random welcome.
    const moreText = aboutMe[Math.floor(Math.random() * aboutMe.length)];

    // Add it to the page.
    const moreContainer = document.getElementById('more-container');
    moreContainer.innerText = moreText;
}

/*
// Initialize and add the map
function initMap() {
    // The location of Hampton 
    const uluru = { lat: 37.061894, lng:  -76.308254 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
*/