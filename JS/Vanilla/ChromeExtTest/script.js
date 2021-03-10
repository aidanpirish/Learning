// const display = document.querySelector('.o-bolt-grid__cell')
//const leftDisplay = document.querySelector('.u-bolt-width-3/12@medium')

// document.addEventListener("DOMContentLoaded", function(){
//   const leftDisplay = document.querySelector('.u-bolt-width-3/12@medium')
//   console.log(leftDisplay)
//   leftDisplay.style.visibility = 'hidden !important'
// });

document.addEventListener('readystatechange', event => { 

  // When HTML/DOM elements are ready:
  if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
      alert("hi 1");
  }

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {
    const leftDisplay = document.querySelectorAll('.o-bolt-grid__cell')
    const headerNav = document.querySelectorAll('.c-page-header__utility-nav')
    leftDisplay[4].remove()
    headerNav.style.backgroundColor = '#bfbfbf'
  }
});