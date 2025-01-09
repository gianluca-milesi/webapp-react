import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="growflex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout