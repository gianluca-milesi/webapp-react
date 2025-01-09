import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard/MovieCard"

function HomePage() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    return (
        <>
            <div className="container">
                <h1 className="fs-3 text-center mb-4">Catalogo film</h1>
            </div>

            <section className="movie-cards">
                <div className="container">
                    <div className="row">
                        {movies.map((movie) => (
                            <div key={movie.id} className="col-3">
                                <MovieCard item={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage