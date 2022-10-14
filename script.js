const storedBooks = [
  {
    title: 'Zero to One',
    author: 'Peter Till',
    isbn: 12345,
    date: '2022-03-12',
  },
  {
    title: 'Blliz Scaling',
    author: 'Peter Till',
    isbn: 34567,
    date: '2022-03-12',
  },
  {
    title: 'Lean startup',
    author: 'Eric Ries',
    isbn: 23423,
    date: '2022-03-12',
  },
];

function addBookToList(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>${book.date}</td>
      <td><i class="fa-regular fa-circle-xmark delete"></i></td>
    `;

  list.appendChild(row);
}

// event1: Display books
function displayBooks(event) {
  event.preventDefault();
  storedBooks.forEach(book => addBookToList(book));
}

document.addEventListener('DOMContentLoaded', displayBooks);

// event2: Show alert message
const showAlert = (message, className) => {
  const div = document.createElement('div');
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  container.insertBefore(div, form);

  setTimeout(() => {
    div.remove();
  }, 2500);
};

// event3: Add books
const bookForm = document.querySelector('#book-form');

const submitNewInput = event => {
  event.preventDefault();
  // Get form value
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const date = document.querySelector('#date').value;
  // Validate
  if (title === '' || author === '') {
    showAlert('Fill the all fieds!', 'danger');
  } else {
    showAlert('Succeed!', 'success');
    // Input value
    const inputBookInfo = {
      title: title,
      author: author,
      isbn: isbn,
      date: date,
    };

    addBookToList(inputBookInfo);
  }
};

bookForm.addEventListener('submit', submitNewInput);

// event4: Clear input values
const clearFeilds = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
  document.querySelector('#date').value = '';
};

const clearBtn = document.querySelector('.delete-value');
clearBtn.addEventListener('click', clearFeilds);

// event5: Remove books data
const bookList = document.querySelector('#book-list');

const deleteBooks = element => {
  if (element.classList.contains('delete')) {
    element.parentElement.parentElement.remove();
  }
};

bookList.addEventListener('click', deleteBooks);
