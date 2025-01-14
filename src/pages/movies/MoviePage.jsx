import axios from "axios"
//Contexts
import GlobalContext from "../../contexts/GlobalContext.js"
//Hooks
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
//Components
import SmallMovieCard from "../../components/SmallMovieCard/SmallMovieCard.jsx"
import StarsRating from "../../components/StarsRating/StarsRating.jsx"
import ReviewCard from "../../components/ReviewCard/ReviewCard.jsx"
import FormReview from "../../components/FormReview/FormReview.jsx"


function MoviePage() {

    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    const { setIsLoading } = useContext(GlobalContext)

    function fetchMovie() {

        setIsLoading(true)

        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])


    return (
        movie && <>
            <section className="hero">
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
            <section className="form-review">
                <div className="container">
                    <FormReview id={id} fetch={fetchMovie} />
                </div>
            </section>
        </>
    )
}

export default MoviePage