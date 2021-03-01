//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  const list = document.createElement('ul');
  list.style.listStyle = 'none';
  for (const book of books) {
    const items = document.createElement('li');
    items.style.padding = '10px';
    items.style.margin = '10px';
    items.style.float = 'left';
    const image = document.createElement('img');
    image.style.width = '150px';
    image.style.height = '150px';

    if (book.title === 'The Design of Everyday Things') {
      image.src = './assets/the_design_of_everyday_things.jpg';
    } else if (book.title === 'The Most Human Human') {
      image.src = './assets/the_most_human_human.jpg';
    } else {
      image.src = './assets/the_pragmatic_programmer.jpg';
    }
    image.alt = `${book.title}`;
    (items.innerHTML = `<p> ${book.title}, ${book.author} </p>`),
      items.appendChild(image);
    list.appendChild(items);

    if (book.alreadyRead === true) {
      items.style.backgroundColor = 'green';
    } else {
      items.style.backgroundColor = 'red';
    }
  }
  return list;
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
