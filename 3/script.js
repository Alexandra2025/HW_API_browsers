"use strict";
const CLIENT_ID = "wlmYfqJO_jbVDqecx-Y5kcGRujimp1IQXlSHJMvtPEg";
const slider = document.getElementById("slider");

let state = [];

const fetchPhotos = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok && data.length) {
      state = data;
      setPhotos();
    }
  } catch (err) {
    console.log(err);
  }
};
const setPhotos = () => {
  state.map(({urls: {regular}, user{name} }) => {
    return <div class="slide">
            <div class="slide-text">
              <span>photo by</span>
    </div>
  </div>
  } )
  // slider;
};
fetchPhotos();
