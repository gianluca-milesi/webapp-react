import style from "./MovieCard.module.css"
//Hooks
import { Link } from "react-router-dom"

function MovieCard({ item = {} }) {

    const { id, image, title, director, abstract } = item


    return (
        <div className={style.card}>
            <Link to={`/movies/${id}`}>
                <figure>
                    <img className={style.card_image} src={image} />
                </figure>
                <div className={style.card_body}>
                    <h3 className="fs-5 text-center">{title}</h3>
                    <p className="fst-italic"><span className="fst-italic">Director: </span>{director}</p>
                    <p><span className="fst-italic">Abstract</span> <br /> {abstract}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard