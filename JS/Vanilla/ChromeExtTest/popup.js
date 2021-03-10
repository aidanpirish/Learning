const btn = document.getElementById('btn')

let darkMode = true

btn.addEventListener('click', () => {
  darkMode = !darkMode
  updateMode()
})

function updateMode() {
  if(darkMode) {
    btn.innerText = 'Dark'
    console.log("Turning on dark mode")
  } else {
    btn.innerText = 'Light'
    console.log("Turning off dark mode")
  }
}