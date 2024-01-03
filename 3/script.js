const CLIENT_ID = "wlmYfqJO_jbVDqecx-Y5kcGRujimp1IQXlSHJMvtPEg";
const slider = document.getElementById("slider");

let slides;
let state = [];
let currentSlide;

const fetchPhotos = async () => {
  try {
    const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=1& like`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok && data.length) {
      state = data;
      currentSlide = data[0].id;
      setPhotos();
    }
  } catch (err) {
    console.log(err);
  }
};

const renderItem = () => {
  return state
    .map(({ urls: { regular }, user: { name }, id }) => {
      const isActive = currentSlide === id ? "active" : "";
      return `<div class="slide ${isActive}" data-id="${id}" style="background-image: url(${regular})">
                <div class="slide-text">
                  <span>photo by</span>
                  ${name}             
                <div class="like-icon">
                    <img src="like-icon_red.png" id="like-btn" onclick="like()" />
                </div>
                </div>
              </div>`;
    })
    .join("");
};

const setPhotos = () => {
  slider.innerHTML = renderItem();
};

fetchPhotos();

function like() {
  let likeBtn = document.getElementById("like-btn");
  likeBtn.classList.toggle("liked");
}
