var LibController = new Controller();
LibController.start();

// let books =[];
//
// function getAllBooks() { //Получить все книги
//     return fetch('/api/books')
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => {
//             saveBooks(data.payload);
//             renderBooks(data.payload);
//         });
// }
//
// function saveBooks(receivedBooks) {
//     books = receivedBooks;
// }
//
// function getBook(id) { //Получить книгу по id
//     return fetch(`/api/books/${id}`)
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBook(data.payload))
// }
// function getPopularBooks() { //Получить популярные книги
//     return fetch(`/api/books?filter=most-popular`)
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBooks(data.payload));
// }
// function getRecentBooks() { //Получить недавние книги
//     return fetch(`/api/books?filter=most-recent`)
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBooks(data.payload));
// }
// function getFreeBooks() { //Получить бесплатные книги
//     return fetch(`/api/books?filter=free-books`)
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBooks(data.payload));
// }
// function getBooksByMatch(match) { //Получить книги по запросу
//     return fetch(`/api/books?match=${match}`)
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBooks(data.payload));
// }
// function deleteBook(id) { //Удалить книгу
//     delForm();
//     return fetch(`/api/books/${id}`, { method: 'delete' })
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => renderBooks(data.payload));
// }
//
// const bookList = document.getElementById('books');
// function renderBooks(books) { //Вывести книги
//     del(bookList);
//     for (let i = 0; i < books.length; i++) {
//         renderBook(books[i])
//     }
// }
// function renderBook(book) { //Алгоритм вывода одной книги
//     const bookDiv = document.createElement('div');
//     bookDiv.dataset.id = book.id;
//     const image = document.createElement('img');
//     const title = document.createElement('div');
//     title.setAttribute('class', 'title');
//     const author = document.createElement('div');
//     image.src = book.image;
//     title.textContent = book.title;
//     author.textContent = `by ${book.author}`;
//     const rating = renderRating(book.rating);
//
//     bookDiv.append(image);
//     bookDiv.append(title);
//     bookDiv.append(author);
//     bookDiv.append(rating);
//
//     bookList.append(bookDiv)
// }
//
// function renderRating(number) { //Вывод звездочек рейтинга
//     const wrapStars = document.createElement('div');
//     wrapStars.setAttribute('class', 'wrapStars');
//     for (let i = 1; i <= 5; i++){
//         const star = document.createElement('i');
//         if (number >= i){
//             star.setAttribute('class', 'fa fa-star');
//         } else if (number < i && number > i-1){
//             star.setAttribute('class', 'fa fa-star-half-o');
//         } else {
//             star.setAttribute('class', 'fa fa-star-o');
//         }
//         star.setAttribute('aria-hidden', 'true');
//         star.dataset.rating = i;
//         wrapStars.append(star);
//     }
//     return wrapStars;
// }
//
// function del(container) { //Очистить пространство
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
// }
// const shadow = document.getElementById("shadow");
// const addWindow = document.getElementById("addWindow");
// let slogan = document.getElementById('slogan');
// let gridForm = document.getElementById('grid-container');
// let formInput = gridForm.getElementsByTagName('input');
//
// function showForm(){ //Показать форму
//     shadow.style.visibility = 'visible'; //Сделать тень видимой
//     addWindow.style.display = 'block'; //Сделать форму видимой
//
//     shadow.onclick = function (){delForm()} // При клике на слой затемнения все исчезнет
// }
// function addBookForm() { //Показать форму добавления книги
//     showForm();
//     slogan.textContent = 'Add a book';
//     for (let i = 0; i < formInput.length; i++){
//         formInput[i].value = '';
//     }
//     addButton.style.display = 'block';
//     deleteButton.style.display = 'none';
// }
//
// function delForm() {  //Удалить форму
//     shadow.style.visibility = 'hidden';
//     addWindow.style.display = 'none';
//     return false;
// }
//
// const deleteButton = document.getElementById("deleteButton");
// const message = document.getElementById("message");
// function addBook(){ //Добавить книгу в список
//     let form = new FormData(document.getElementById("addForm"));
//     delForm();
//     let data = Array.from(form.entries()).reduce((memo, pair) => ({
//         ...memo,
//         [pair[0]]: pair[1],
//     }), {});
//     console.log(data);
//     return fetch(`/api/books/add`, { method:"POST",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)} )
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => {
//             renderBooks(data.payload);
//             message.style.display = 'block';
//             shadow.style.visibility = 'visible';
//             setTimeout(function () {message.style.display = 'none';
//                 shadow.style.visibility = 'hidden';}, 2000)
//         });
// }
//
// document.getElementById('books').addEventListener("click", showInfo);
// function showInfo(elem) { //Показать форму с информацией о книге
//     if (!elem.target.classList.contains('fa')) {
//         let parentItem = elem.target.closest('div');
//         let book = books.find(function (books) {
//             return books.id === +parentItem.dataset.id
//         });
//         showForm();
//         deleteButton.style.display = 'block';
//         addButton.onclick = function (){changeBook(book)};
//         deleteButton.onclick = function () {
//             deleteBook(parentItem.dataset.id)
//         };
//
//         slogan.textContent = `${book.title} info`;
//         formInput[0].value = book.title;
//         formInput[1].value = book.author;
//         formInput[2].value = book.price;
//         formInput[3].value = book.created_at;
//     }
// }
//
// function changeBook(thisBook) { //Изменить книгу
//     console.log(thisBook);
//     let bookId = thisBook.id;
//     let bookModel = books.find(book => book.id === +bookId);
//     let form = new FormData(document.getElementById("addForm"));
//     delForm();
//     let data = Array.from(form.entries()).reduce((memo, pair) => ({
//         ...memo,
//         [pair[0]]: pair[1],
//     }), {});
//     let rating = thisBook.rating;
//     data = {...data, rating};
//     console.log(data);
//     return fetch(`/api/books/${bookId}`, { method:"PUT",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)} )
//         .then(responce => {
//             if (responce.ok) {
//                 return responce.json();
//             }
//
//             throw new Error('Somethon goes wrong =(');
//         })
//         .then(data => {
//             Object.assign(bookModel, data.payload);
//             renderBooks(books);
//         });
// }
//
// function searchBook(){ //Поиск книги
//     let form = new FormData(document.getElementById("searchForm"));
//     let input = document.querySelector('form > input');
//     if (this.timer){
//         clearTimeout(this.timer)
//     }
//     this.timer = setTimeout(() => getBooksByMatch((form.get('search').toLowerCase()), 1000));
// }
//
// bookList.addEventListener('click', addRating);
// function addRating(event) { //Добавить рейтинг
//     event.stopPropagation();
//     let star = event.target.closest('.wrapStars > i');
//     if (star) {
//         let rating = star.dataset.rating;
//         let book = event.target.closest('[data-id]');
//         let bookId = book.dataset.id;
//
//         let bookModel = books.find(book => book.id === +bookId);
//         let updatedBook = {...bookModel, rating};
//         return fetch(`/api/books/${bookId}`, {
//             method: "PUT",
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(updatedBook)
//         })
//             .then(responce => {
//                 if (responce.ok) {
//                     return responce.json();
//                 }
//
//                 throw new Error('Somethon goes wrong =(');
//             })
//             .then(data => {
//                 Object.assign(bookModel, updatedBook);
//                 renderBooks(books);
//             });
//     }
// }
//
// const all = document.getElementById("all");
// all.onclick = function (){getAllBooks();};
// const popular = document.getElementById("popular");
// popular.onclick = function (){getPopularBooks();};
// const recent = document.getElementById("recent");
// recent.onclick = function () {getRecentBooks()};
// const free = document.getElementById("free");
// free.onclick = function () {getFreeBooks()};
//
// const add = document.getElementById("add");
// add.onclick = function () {addBookForm()};
//
// const addButton = document.getElementById("addButton");
// addButton.onclick = function () {addBook()};
//
// const searchButton = document.getElementById("searchButton");
// searchButton.onclick = function () {searchBook()};
//
// getAllBooks();