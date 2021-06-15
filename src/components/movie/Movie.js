/*export const MoviesProvider = (props) => {
    const [movies, setMovies] = useState([])


    const getMovies = () => {
        return fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "371b53e263msh23e127f5f88ef58p100627jsnf5082aed932c",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(setMovies()); 
    }

    const addMovie = movieObj => {
        return fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
            "method": "POST",
            "headers": {
                "x-rapidapi-key": "371b53e263msh23e127f5f88ef58p100627jsnf5082aed932c",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            },
            body: JSON.stringify(movieObj)
        })
            .then(getMovies)
    }

    const deleteMovie = movieId => {
    return fetch(`http://localhost:8088/movies/${movieId}`, {
        method: "DELETE"
    })
        .then(getMovies)
}

    return (
        <MovieContext.Provider value={{
            movies, getMovies, addMovie, deleteMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}*/