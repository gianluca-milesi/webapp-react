import axios from "axios"
//Hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//Components
import SmallMovieCard from "../../components/SmallMovieCard/SmallMovieCard.jsx"
import StarsRating from "../../components/StarsRating/StarsRating.jsx"
import ReviewCard from "../../components/ReviewCard/ReviewCard.jsx"


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

                    <form className="d-flex flex-column gap-2 bg-transparent p-3">
                        <h4>Add review</h4>
                        <div className="d-flex flex-column align-items-start">
                            <label htmlFor="name" className="form-label m-0">Name</label>
                            <input type="text" placeholder="insert your name" name="name" id="name" />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="text" className="form-label m-0">Review</label>
                            <textarea name="text" id="text" placeholder="insert review" />
                        </div>
                        <div className="d-flex gap-2 align-items-start">
                            <label className="m-0" htmlFor="vote">Vote</label>
                            <select name="vote" id="vote">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </div>
                        <button className="btn btn-secondary align-self-end">Send</button>
                    </form>

                </div>
            </section>
        </> :
            <div className="d-flex align-items-center justify-content-center">Loading...</div>
    )
}

export default MoviePage