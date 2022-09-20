const searchButton = document.querySelector('#search-button')
const searchButtonContent = document.querySelector('#search-button div')

// console.log(searchButton)

searchButton.addEventListener('click', toggleButton)

function toggleButton() {
    searchButtonContent.classList.toggle('loading')
}