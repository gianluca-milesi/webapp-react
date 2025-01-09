import MovieCard from "../components/MovieCard/MovieCard"

function HomePage() {
    return (
        <>
            <div className="container">
                <h1 className="fs-3 text-center">Catalogo film</h1>
            </div>

            <section className="movie-cards">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <MovieCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage