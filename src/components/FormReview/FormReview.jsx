import { useState } from "react"
import axios from "axios"
import style from "./FormReview.module.css"

const initialFormData = {
    name: "",
    text: "",
    vote: ""
}

function FormReview({ id, fetch = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)

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
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: parseInt(formData.vote)
        }

        axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, data)
            .then(res => {
                setFormData(initialFormData)
                fetch()
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <form className="d-flex flex-column gap-2 bg-transparent p-3" onSubmit={storeReview}>
            <h4>Add review</h4>
            <div className="d-flex flex-column align-items-start">
                <label htmlFor="name" className="form-label m-0">Name</label>
                <input type="text" placeholder="insert your name" name="name" id="name" value={formData.name} onChange={handleFormData} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="text" className="form-label m-0">Review</label>
                <textarea name="text" id="text" placeholder="insert review" value={formData.text} onChange={handleFormData} />
            </div>
            <div className="d-flex gap-2 align-items-start">
                <label className="m-0" htmlFor="vote">Vote</label>
                <select name="vote" id="vote" value={formData.vote} onChange={handleFormData}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="btn btn-secondary align-self-end">Send</button>
        </form>
    )
}

export default FormReview