import style from "./SmallMovieCard.module.css"

function SmallMovieCard({ item = {} }) {

    const { id, image, title, director, abstract, genre, release_year } = item

    return (
        <div className={style.card}>
            <figure>
                <img className={style.card_image} src={image} />
            </figure>
            <div className={style.card_body}>
                <h2>{title}</h2>
                <p>{director}</p>
                <p>{abstract}</p>
                <p>{genre}</p>
                <p>{release_year}</p>
            </div>
        </div>
    )
}

export default SmallMovieCard