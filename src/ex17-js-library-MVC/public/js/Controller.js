function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this)
}

Controller.prototype.start = function() {
    this.view.init();
    this.model.getAllBooks()
};

Controller.prototype.getAllBooks = function(){
    this.model.getAllBooks()
};

Controller.prototype.saveBooks = function(){
    this.model.saveBooks()
};

Controller.prototype.getBook = function(id){
    this.model.getBook(id)
};

Controller.prototype.getPopularBooks = function(){
    this.model.getPopularBooks()
};

Controller.prototype.getRecentBooks = function(){
    this.model.getRecentBooks()
};

Controller.prototype.getFreeBooks = function(){
    this.model.getFreeBooks()
};

Controller.prototype.getBooksByMatch = function(match){
    this.model.getBooksByMatch(match)
};

Controller.prototype.deleteBook = function(id){
    this.model.deleteBook(id)
};

Controller.prototype.addBook = function(){
    this.model.addBook()
};

Controller.prototype.changeBook = function(thisBook){
    this.model.changeBook(thisBook)
};

Controller.prototype.addRating = function(event){
    this.model.addRating(event)
};

Controller.prototype.searchBook = function(){
    this.model.searchBook()
};