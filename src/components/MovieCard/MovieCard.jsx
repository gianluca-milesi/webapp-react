import style from "./MovieCard.jsx"

function MovieCard() {
    return (
        <div className={style.card}>
            <figure>
                <img className={style.card_image} src="..." />
            </figure>
            <div className={style.card_body}>
                <h3 className="fs-5">Titolo</h3>
                <p>Autore</p>
                <p>Abstact</p>
            </div>
        </div>
    )
}

export default MovieCard