function Model() {
    this.onGetBooks = new EventEmitter;
    this.onGetBook = new EventEmitter;
    this.onRenderRating = new EventEmitter;
    this.onAddBookForm = new EventEmitter;
    this.onShowInfo = new EventEmitter;
    this.onDelForm = new EventEmitter;
    this.books = [];
}

Model.prototype.getAllBooks = function () {
    return fetch('/api/books')
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => {
            this.saveBooks(data.payload);
            this.onGetBooks.notify(data.payload)
        });
};

Model.prototype.saveBooks = function(receivedBooks){
    this.books = receivedBooks;
};

Model.prototype.getBook = function(id) { //Получить книгу по id
    return fetch(`/api/books/${id}`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBook.notify(data.payload))
};

Model.prototype.getPopularBooks = function () { //Получить популярные книги
    return fetch(`/api/books?filter=most-popular`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBooks.notify(data.payload));
};

Model.prototype.getRecentBooks = function() { //Получить недавние книги
    return fetch(`/api/books?filter=most-recent`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBooks.notify(data.payload));
};

Model.prototype.getFreeBooks = function() { //Получить бесплатные книги
    return fetch(`/api/books?filter=free-books`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBooks.notify(data.payload));
};

Model.prototype.getBooksByMatch = function(match) { //Получить книги по запросу
    return fetch(`/api/books?match=${match}`)
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBooks.notify(data.payload));
};

Model.prototype.deleteBook = function(id) { //Удалить книгу
    this.onDelForm.notify();
    return fetch(`/api/books/${id}`, { method: 'delete' })
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => this.onGetBooks.notify(data.payload));
};



Model.prototype.addBook = function(){ //Добавить книгу в список
    let form = new FormData(document.getElementById("addForm"));
    this.onDelForm.notify();
    let data = Array.from(form.entries()).reduce((memo, pair) => ({
        ...memo,
        [pair[0]]: pair[1],
    }), {});
    console.log(data);
    return fetch(`/api/books/add`, { method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)} )
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => {
            this.onGetBooks.notify(data.payload);
            this.view.showMessage();
};



Model.prototype.changeBook = function(thisBook) { //Изменить книгу
    console.log(thisBook);
    let bookId = thisBook.id;
    let bookModel = books.find(book => book.id === +bookId);
    let form = new FormData(document.getElementById("addForm"));
    this.onDelform.notify();
    let data = Array.from(form.entries()).reduce((memo, pair) => ({
        ...memo,
        [pair[0]]: pair[1],
    }), {});
    let rating = thisBook.rating;
    data = {...data, rating};
    console.log(data);
    return fetch(`/api/books/${bookId}`, { method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)} )
        .then(responce => {
            if (responce.ok) {
                return responce.json();
            }

            throw new Error('Somethon goes wrong =(');
        })
        .then(data => {
            Object.assign(bookModel, data.payload);
            this.onGetBooks.notify(this.books);
        });
};

Model.prototype.addRating = function(event) { //Добавить рейтинг
    event.stopPropagation();
    let star = event.target.closest('.wrapStars > i');
    if (star) {
        let rating = star.dataset.rating;
        let book = event.target.closest('[data-id]');
        let bookId = book.dataset.id;

        let bookModel = this.books.find(book => book.id === +bookId);
        let updatedBook = {...bookModel, rating};
        return fetch(`/api/books/${bookId}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBook)
        })
            .then(responce => {
                if (responce.ok) {
                    return responce.json();
                }

                throw new Error('Somethon goes wrong =(');
            })
            .then(data => {
                Object.assign(bookModel, updatedBook);
                this.onGetBooks.notify(this.books);
            });
    }
};

Model.prototype.searchBook = function(){ //Поиск книги
    let form = new FormData(document.getElementById("searchForm"));
    let input = document.querySelector('form > input');
    if (this.timer){
        clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => this.getBooksByMatch((form.get('search').toLowerCase()), 1000));
};