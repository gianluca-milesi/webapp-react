import axios from "axios"
//Hooks
import { useEffect, useState } from "react"
//Components
import MovieCard from "../components/MovieCard/MovieCard"

function HomePage() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`)
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
                <h1 className="fs-3 text-center mb-4">Movie Catalog</h1>
            </div>

            <section className="movie-cards">
                <div className="container">
                    <div className="row">
                        {movies.map((movie) => (
                            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
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