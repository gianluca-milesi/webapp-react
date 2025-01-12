import style from "./ReviewCard.module.css"
//Components
import StarsRating from "../StarsRating/StarsRating"

function ReviewCard({ item = {} }) {

    const { text, vote, name } = item

    return (
        <div className={style.card}>
            <div className={style.card_body}>
                <p className="fst-italic">{text}</p>
                <StarsRating vote={vote} />
                <p className="fw-bold">{name}</p>
            </div>
        </div>
    )
}

export default ReviewCard