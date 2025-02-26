import style from "./FormReview.module.css"
import axios from "axios"
//Hooks
import { useState } from "react"

const initialFormData = {
    name: "",
    text: "",
    vote: ""
}

function FormReview({ id, fetch = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)
    const [validFormData, setValidFormData] = useState(true)

    function handleFormData(event) {
        const { value, name: propName } = event.target
        // console.log(value)

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function storeReview(event) {
        event.preventDefault()

        const data = {
            name: formData.name.trim(),
            text: formData.text.trim() || undefined,
            vote: parseInt(formData.vote)
        }

        //Gestione errori
        if (!data.name || !data.vote) return setValidFormData(false)


        axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, data)
            .then(res => {
                setFormData(initialFormData)
                setValidFormData(true)
                fetch()
            })
            .catch(err => {
                console.error(err)
                setValidFormData(false)
            })
    }


    return (
        <form className={style.form_review} onSubmit={storeReview}>
            <h4>Add review</h4>
            <div className={style.form_control}>
                <label htmlFor="name" className="form-label m-0">Name *</label>
                <input type="text" name="name" id="name" placeholder="insert your name" required className={style.input_field} value={formData.name} onChange={handleFormData} />
            </div>
            <div className={style.form_control}>
                <label htmlFor="text" className="form-label m-0">Review</label>
                <textarea name="text" id="text" placeholder="insert review" className={style.input_field} value={formData.text} onChange={handleFormData} />
            </div>
            <div className={style.form_control_select}>
                <label className="m-0" htmlFor="vote">Vote *</label>
                <select name="vote" id="vote" className={style.input_field_select} required value={formData.vote} onChange={handleFormData}>
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            {validFormData === false ? <div className="text-danger text-center fst-italic">Invalid form data</div> : ""}
            <button className={style.button}>Send</button>
        </form>
    )
}

export default FormReview