"use strict";

window.addEventListener("load", () => {

const deliveryParent = document.querySelector('#delivery');
const labels = deliveryParent.querySelectorAll('.order__way-label');

labels.forEach(el => {
  el.addEventListener('click', (e) => {
    deleteClass();
    el.classList.add('active')
  })
  
});

function deleteClass() {
  labels.forEach(el => {
    el.classList.remove('active')
  })
}

});
