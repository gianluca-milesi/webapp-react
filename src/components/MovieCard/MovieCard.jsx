import style from "./MovieCard.jsx"

function MovieCard({ item = {} }) {

    const { id, title, directior, abstract } = item


    return (
        <div className={style.card}>
            <figure>
                <img className={style.card_image} src="..." />
            </figure>
            <div className={style.card_body}>
                <h3 className="fs-5">{title}</h3>
                <p>{directior}</p>
                <p>{abstract}</p>
            </div>
        </div>
    )
}

export default MovieCard