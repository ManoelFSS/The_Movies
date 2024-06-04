import { Menu } from "../../components/menu/Menu"
import { Search } from "../../components/button/Search"
import { StyledHeader, HeaderConteiner, Navibar } from "./HeaderStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"


export const Header = ({ title }) => {

    const { hendleCategoriaMovies } = useMoviesContext()

    const API_BASE = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';

    return (
        <StyledHeader>
            <HeaderConteiner>
                <h1 onClick={() => hendleCategoriaMovies(API_BASE)}>
                    {title}
                </h1>
                <Navibar>
                    <Menu />
                    <Search />
                </Navibar>
            </HeaderConteiner>
        </StyledHeader>
    )
}