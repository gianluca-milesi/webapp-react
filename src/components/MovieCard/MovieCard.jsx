import style from "./MovieCard.module.css"
import { Link } from "react-router-dom"

function MovieCard({ item = {} }) {

    const { id, title, director, abstract } = item


    return (
        <div className={style.card}>
            <figure>
                <img className={style.card_image} src="..." />
            </figure>
            <div className={style.card_body}>
                <h3 className="fs-5">{title}</h3>
                <p>{director}</p>
                <p>{abstract}</p>
            </div>
            <Link className={style.movie_details} to={`/movies/${id}`}>Read more</Link>
        </div>
    )
}

export default MovieCard