import Notiflix from "notiflix";
base_API = 'https://books-backend.p.goit.global/books/category-list';

function fetchCategories() {
  fetch(base_API)
    .then(response => response.json())
    .then(data => {
      const categories = data;
      const categoriesContainer = document.getElementById('categories-container');
      const categoryRow = document.getElementById('category-row')

      categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.innerText = category.list_name;
        categoryButton.addEventListener('click', () => fetchBooksByCategory(category.list_name));
        categoryRow.appendChild(categoryButton);
      });

      categoriesContainer.appendChild(categoryRow);
    })
    .catch(error => {
      Notiflix.Notify.error('Помилка при отриманні категорій книг:', error);
    });
}

function fetchBooksByCategory(category) {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';

  fetch(base_API/category)
    .then(response => response.json())
    .then(booksData => {
      if (booksData.length === 0) {
        const message = document.createElement('p');
        message.innerText = 'Немає книг у цій категорії.';
        booksContainer.appendChild(message);
      } else {
        booksData.forEach(book => {
          const bookElement = document.createElement('p');
          bookElement.innerText = book.title;
          booksContainer.appendChild(bookElement);
        });
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Помилка при отриманні книг');
    });
}

fetchCategories();