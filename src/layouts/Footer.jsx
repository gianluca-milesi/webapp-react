import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="p-4">
            <div className="container">
                <div className="links d-flex justify-content-center align-items-center">
                    <Link to="/">Torna alla Home</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer