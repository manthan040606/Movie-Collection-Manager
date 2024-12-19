let movies = [
    { title: "3 Idiots", genre: "Comedy", rating: 8.4, releaseYear: 2009 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, releaseYear: 2001 },
    { title: "Kabhi Khushi Kabhie Gham", genre: "Drama", rating: 7.4, releaseYear: 2001 },
    { title: "Zindagi Na Milegi Dobara", genre: "Adventure", rating: 8.1, releaseYear: 2011 }
];

function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    if (genre !== "Romance") {
        movies.push(newMovie);
        console.log(`Added new movie: ${title}`);
    }
}

function listMoviesByGenre() {
    const genre = document.getElementById('genre-filter').value;
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.title} (${movie.releaseYear})`;
        movieList.appendChild(listItem);
    });
}

function findHighestRatedMovie() {
    const highestRatedMovie = movies.reduce((max, movie) => (movie.rating > max.rating ? movie : max), movies[0]);
    document.getElementById('highest-rated-movie').textContent = `${highestRatedMovie.title} with a rating of ${highestRatedMovie.rating}`;
}

function listAllMovieTitles() {
    const titleList = document.getElementById('title-list');
    titleList.innerHTML = '';
    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = movie.title;
        titleList.appendChild(listItem);
    });
}

function findMoviesAfterYear() {
    const year = document.getElementById('year-filter').value;
    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    const yearList = document.getElementById('year-list');
    yearList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.textContent = `${movie.title} (${movie.releaseYear})`;
        yearList.appendChild(listItem);
    });
}

document.getElementById('movie-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);
    addMovie(title, genre, rating, releaseYear);
    listAllMovieTitles();
    document.getElementById('movie-form').reset();
});

listAllMovieTitles();
findHighestRatedMovie();
