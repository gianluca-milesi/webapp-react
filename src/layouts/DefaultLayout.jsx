import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function DefaultLayout() {
    return (
        <>
            <Header />
            <main className="flex-grow-1 my-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout