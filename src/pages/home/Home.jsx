import { Header } from "../../layouts/header/Header"
import { Main } from "../../layouts/main/Main"
import { Footer } from "../../layouts/footer/Footer"
import { Pagination } from "../../components/pagination/Pagination"

export const Home = () => {
    return (
        <>
            <Header title={"O Movies"}/>
            <Main/>
            <Pagination/>
            <Footer/>
        </>
    )
}