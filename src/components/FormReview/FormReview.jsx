import { useState } from "react"
import style from "./FormReview.module.css"

const initialFormData = {
    name: "",
    text: "",
    vote: ""
}

function FormReview() {

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {

    }


    return (
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
    )
}

export default FormReview