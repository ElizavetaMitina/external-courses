function View(model,controller){
    this.model = model;
    this.controller = controller;

    this.bookList = document.getElementById('books');
    this.shadow = document.getElementById("shadow");
    this.addWindow = document.getElementById("addWindow");
    this.slogan = document.getElementById('slogan');
    this.gridForm = document.getElementById('grid-container');
    this.formInput = this.gridForm.getElementsByTagName('input');
    this.deleteButton = document.getElementById("deleteButton");
    this.message = document.getElementById("message");
    this.all = document.getElementById("all");
    this.popular = document.getElementById("popular");
    this.recent = document.getElementById("recent");
    this.free = document.getElementById("free");
    this.add = document.getElementById("add");
    this.addButton = document.getElementById("addButton");
    this.searchButton = document.getElementById("searchButton");
    this.bookContainer = document.getElementById('books');


View.prototype.init = function () {
    var that = this;

    this.model.onGetBooks.subscribe(function (books) {
        that.renderBooks(books);
    });

    this.model.onRenderRating.subscribe(function (number) {
        that.renderRating(number);
    });

    this.model.onAddBookForm.subscribe(function () {
        that.addBookForm();
    });

    this.model.onShowInfo.subscribe(function (elem) {
        that.showInfo(elem);
    });

    this.model.onDelForm.subscribe(function () {
        that.delForm();
    });


    this.bookContainer.addEventListener("click", function (elem) {
        that.showInfo(elem);
    });
    this.bookList.addEventListener('click', function () {
        that.controller.addRating(event);
    });

    this.all.onclick = function (){controller.getAllBooks();};
    this.popular.onclick = function (){controller.getPopularBooks();};
    this.recent.onclick = function () {controller.getRecentBooks()};
    this.free.onclick = function () {controller.getFreeBooks()};
    this.add.onclick = function () {controller.addBookForm()};
    this.addButton.onclick = function () {controller.addBook()};
    this.searchButton.onclick = function () {controller.searchBook()};
}
}

View.prototype.renderBooks = function(books) { //Вывести книги
    this.del(this.bookList);
    for (let i = 0; i < books.length; i++) {
        this.renderBook(books[i])
    }
};

View.prototype.renderBook = function(book) { //Алгоритм вывода одной книги
    const bookDiv = document.createElement('div');
    bookDiv.dataset.id = book.id;
    const image = document.createElement('img');
    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    const author = document.createElement('div');
    image.src = book.image;
    title.textContent = book.title;
    author.textContent = `by ${book.author}`;
    const rating = this.renderRating(book.rating);

    bookDiv.append(image);
    bookDiv.append(title);
    bookDiv.append(author);
    bookDiv.append(rating);

    this.bookList.append(bookDiv)
};

View.prototype.renderRating = function(number) { //Вывод звездочек рейтинга
    const wrapStars = document.createElement('div');
    wrapStars.setAttribute('class', 'wrapStars');
    for (let i = 1; i <= 5; i++){
        const star = document.createElement('i');
        if (number >= i){
            star.setAttribute('class', 'fa fa-star');
        } else if (number < i && number > i-1){
            star.setAttribute('class', 'fa fa-star-half-o');
        } else {
            star.setAttribute('class', 'fa fa-star-o');
        }
        star.setAttribute('aria-hidden', 'true');
        star.dataset.rating = i;
        wrapStars.append(star);
    }
    return wrapStars;
};

View.prototype.del = function(container) { //Очистить пространство
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

View.prototype.showForm = function(){ //Показать форму
    this.shadow.style.visibility = 'visible'; //Сделать тень видимой
    this.addWindow.style.display = 'block'; //Сделать форму видимой

    this.shadow.onclick = function (){this.delForm()} // При клике на слой затемнения все исчезнет
};

View.prototype.addBookForm = function() { //Показать форму добавления книги
    this.showForm();
    this.slogan.textContent = 'Add a book';
    for (let i = 0; i < this.formInput.length; i++){
        this.formInput[i].value = '';
    }
    this.addButton.style.display = 'block';
    this.deleteButton.style.display = 'none';
};

View.prototype.delForm = function() { //Удалить форму
    this.shadow.style.visibility = 'hidden';
    this.addWindow.style.display = 'none';
    return false;
};

View.prototype.showInfo = function(elem) { //Показать форму с информацией о книге
    if (!elem.target.classList.contains('fa')) {
        let parentItem = elem.target.closest('div');
        let book = this.books.find(function (books) {
            return books.id === +parentItem.dataset.id
        });
        this.showForm();
        this.deleteButton.style.display = 'block';
        this.addButton.onclick = function (){this.controller.changeBook(book)};
        this.deleteButton.onclick = function () {
            this.deleteBook(parentItem.dataset.id)
        };

        this.slogan.textContent = `${book.title} info`;
        this.formInput[0].value = book.title;
        this.formInput[1].value = book.author;
        this.formInput[2].value = book.price;
        this.formInput[3].value = book.created_at;
    }
};

View.prototype.showMessage = function () {
    this.message.style.display = 'block';
    this.shadow.style.visibility = 'visible';
    setTimeout(function () {message.style.display = 'none';
        this.shadow.style.visibility = 'hidden';}, 2000)
};