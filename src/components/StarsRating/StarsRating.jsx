import style from "./StarsRating.module.css"
//Icons
import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarSolid } from "@heroicons/react/24/solid"

function StarsRating({ vote }) {
    return (
        <div className="d-flex">
            {[1, 2, 3, 4, 5].map((n) => {
                return n <= vote ? <StarSolid key={n} className={style.star_icon} /> : <StarIcon key={n} className={style.star_icon} />
            })}
        </div>
    )
}

export default StarsRating