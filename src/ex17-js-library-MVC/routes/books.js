const router = require('express').Router();

const BOOKS = [
    { id: 1, title: 'Jewels of Nizam', src: 2, author: 'Geeta Davi', description: 'Short story', keywords: ['Jewels', 'of', 'Nizam'], rating: 3.5, price: 10, created_at: new Date(2018,1,21), image: 'img/library_1.jpg' },
    { id: 2, title: 'Cakes & Bakes', src: 6, author: 'Sanjeev Kapoor', description: 'Long story', keywords: ['Cakes', 'Bakes'], rating: 4.1, price: 0, created_at: new Date(2018,2,14), image: 'img/library_2.jpg' },
    { id: 3, title: 'Jamie\'s kitchen', src: 9, author: 'Jamie Oliver', description: 'Short story', keywords: ['Jamie\'s', 'kitchen'], rating: 3.9, price: 0, created_at: new Date(2018,4,8),image: 'img/library_3.jpg' },
    { id: 4, title: 'Inexpensive Family Meals', src: 4, author: 'Simon Holst', description: 'Short story', keywords: ['Inexpensive', 'Family', 'Meals'], rating: 3.7, price: 0, created_at: new Date(2018,11,15), image: 'img/library_4.jpg' },
    { id: 5, title: 'Paleo Slow Cooking', src: 1, author: 'Chrissy Gower', description: 'Short story', keywords: ['Paleo', 'Slow', 'Cooking'], rating: 2.3, price: 13, created_at: new Date(2018,11,25), image: 'img/library_5.jpg' },
    { id: 6, title: 'Cook Like an Italian', src: 7, author: 'Tobie Puttock', description: 'Short story', keywords: ['Cook', 'Like', 'an', 'Italian'], rating: 3.9, price: 8, created_at: new Date(2018,10,24), image: 'img/library_6.jpg' },
    { id: 7, title: 'Suneeta Vaswani', src: 3, author: 'Geeta Davi', description: 'Short story', keywords: ['Suneeta', 'Vaswani'], rating: 3.3, price: 21, created_at: new Date(2018,11,30), image: 'img/library_7.jpg' },
    { id: 8, title: 'Jamie Does', src: 7, author: 'Jamie Oliver', description: 'Short story', keywords: ['Jamie', 'Does'], rating: 4.5, price: 0, created_at: new Date(2018,12,3), image: 'img/library_8.jpg' },
    { id: 9, title: 'Jamie\'s italy', src: 8, author: 'Jamie Oliver', description: 'Short story', keywords: ['Jamie\'s', 'italy'], rating: 4.7, price: 32, created_at: new Date(2018,1,2), image: 'img/library_9.jpg' },
    { id: 10, title: 'Vegetables Cookbook', src: 4, author: 'Matthew Biggs', description: 'Short story', keywords: ['Vegetables', 'Cookbook'], rating: 4.4, price: 0, created_at: new Date(2018,5,12), image: 'img/library_10.jpg' },
];

const MOST_POPULAR_FILTER = 'most-popular';
const MOST_RECENT_FILTER = 'most-recent';
const FREE_BOOKS_FILTER = 'free-books';
const month = 2592000000;

router.get('/', (req, res) => {
    const { query } = req; // ?filter=most-popular

    const { filter, match } = query;

    if (filter) {
        switch (filter) {
            case MOST_POPULAR_FILTER: {
                return res.json({ payload:
                    BOOKS.filter(book => book.rating > 4)
                });
            }
            case MOST_RECENT_FILTER: {
                return res.json({ payload:
                        BOOKS.filter(book => book.created_at > new Date() - month )
                });
            }
            case FREE_BOOKS_FILTER: {
                return res.json({ payload:
                        BOOKS.filter(book => book.price === 0)
                });
            }
            }}
    if (match){
        return res.json({payload:
            BOOKS.filter(
                book => book.title.toLowerCase().includes(match) ||
                    book.author.toLowerCase().includes(match) ||
                    book.keywords.find(function (keyword) {return keyword.toLowerCase() === match }))
        })
    }

    res.json({ payload: BOOKS });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ payload: BOOKS.find((book) => book.id === +id) });
});

router.post('/add', (req, res) => {
    const book = req.body;
    book.id = BOOKS[BOOKS.length - 1].id + 1;
    book.image = 'img/image.jpg';
    book.price = +req.body.price;
    book.created_at = new Date(req.body.created_at);
    console.log(book);
    BOOKS.push(book);
    res.json({ payload: BOOKS });
});

router.delete('/:id', function(req, res) {
    const id = +req.params.id;
    const bookIndex = BOOKS.findIndex(book => book.id === id);
    BOOKS.splice(bookIndex, 1);
    res.json({ payload: BOOKS });
});

router.put("/:id", function(req, res) {
    const { title, src, author, rating, price, created_at } = req.body;
    const { id } = req.params;
    let book = BOOKS.find(book => book.id === +id);
    book.title = title;
    book.src = src;
    book.author = author;
    book.rating = rating;
    book.price = price;
    book.created_at = new Date(created_at);
    res.json({ payload: book });
});

module.exports = router;
