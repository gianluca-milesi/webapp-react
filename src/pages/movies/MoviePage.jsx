import axios from "axios"
//Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//Components
import SmallMovieCard from "../../components/SmallMovieCard/SmallMovieCard.jsx"
import StarsRating from "../../components/StarsRating/StarsRating.jsx"
import ReviewCard from "../../components/ReviewCard/ReviewCard.jsx"
import FormReview from "../../components/FormReview/FormReview.jsx"


function MoviePage() {

    const [movie, setMovie] = useState(null)
    const { id } = useParams()

    function fetchMovie() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])


    return (
        movie ? <>
            <section className="movie-card">
                <div className="container">
                    <SmallMovieCard item={movie} />
                </div>
            </section>
            <hr />
            <section className="reviews">
                <div className="container">
                    <div className="reviews_title d-flex align-items-center justify-content-between">
                        <h4>Our community reviews</h4>
                        <div className="d-flex align-items-center gap-2">
                            <strong>Average:</strong>
                            <StarsRating vote={movie.avg_vote} />
                        </div>
                    </div>
                    {movie.reviews.length ?
                        <ul className="d-flex flex-column gap-3">
                            {movie.reviews.map(review => (
                                <ReviewCard item={review} key={review.id} />
                            ))}
                        </ul> :
                        <div>No reviews...</div>
                    }
                </div>
            </section>
            <hr />
            <section className="create-review">
                <div className="container">
                    <FormReview />
                </div>
            </section>
        </> :
            <div className="d-flex align-items-center justify-content-center">Loading...</div>
    )
}

export default MoviePage