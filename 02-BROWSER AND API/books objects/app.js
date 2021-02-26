const list = document.querySelector('ul');
const button = document.querySelector('button');
const userTitle = document.querySelector('[name="title"]');
const userAuthor = document.querySelector('[name="author"]');
const userYear = document.querySelector('[name="year"]');

function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

button.addEventListener('click', function () {
	const book = new Book(userTitle.value, userAuthor.value, userYear.value);
	list.innerHTML +=
		'<li>' + book.title + ', ' + book.author + ', ' + book.year + '</li>';
});
