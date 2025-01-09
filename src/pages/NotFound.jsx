import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <main>
            <section>
                <div className="d-flex flex-column align-items-center gap-1">
                    <h1>404 <span>Pagina non trovata</span></h1>
                    <Link to="/" >Torna alla Home</Link>
                </div>
            </section>
        </main>
    )
}

export default NotFound