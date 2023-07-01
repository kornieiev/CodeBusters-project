import { getBooksByCategory } from "../api";
const a = document.querySelector(".bestsellers-item-name")
const bookTitle = document.querySelectorAll(".bookcard-name")
const bookAuthor = document.querySelectorAll(".bookcard-author")
const image = document.querySelectorAll("bookcard-image")
const category = a.textContent
console.log(a.textContent)

getBooksByCategory(category)
    .then(response => {
        console.log(response)
        bookTitle.forEach(element => {
            element.textContent = response.data[0].title
        });
        bookAuthor.forEach(element => {
            element.textContent = response.data[0].author
        });
        image.forEach(element => {
            element.src = response.data[0].book_image
        });
    })

