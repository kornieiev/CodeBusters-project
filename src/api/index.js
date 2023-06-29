import axios from 'axios';

// звідси стартуєм усю роботу з бекендом
export const getCategories = () => {
    return axios.get('https://books-backend.p.goit.global/books/category-list')
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};

export const getBooksByCategory = (category) => {
    return axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};


export const getBookById = (bookId) => {
    return axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
  .then(function (response) {
    
    return response;
  })
  .catch(function (error) {
    
    console.log(error);
  })
  
};