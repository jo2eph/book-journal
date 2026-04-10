const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('click', () => {
    const books = document.getElementById("books-container");
    books.scrollIntoView(
        {behavior: "smooth"}
    )
})