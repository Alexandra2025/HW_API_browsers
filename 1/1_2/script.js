"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  let formChanged = false;

  form.addEventListener("input", () => {
    formChanged = true;
  });

  window.addEventListener("beforeunload", (event) => {
    if (formChanged) {
      event.returnValue =
        "Вы уверены, что хотите покинуть эту страницу? Введенные данные могут быть потеряны.";
    }
  });

  form.addEventListener("submit", () => {
    formChanged = false;
  });
});
