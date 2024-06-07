import { Menu } from "../../components/menu/Menu"
import { Btn } from "../../components/button/Btn"
import { StyledHeader, HeaderConteiner, Navibar, Toogle } from "./HeaderStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"


export const Header = ({ title }) => {

    const { hendleCategoriaMovies, setToogle, toogle  } = useMoviesContext()

    const API_BASE = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1';

    return (
        <StyledHeader>
            <HeaderConteiner>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Toogle onClick={() => setToogle(!toogle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Toogle>
                    <h1 onClick={() => hendleCategoriaMovies(API_BASE)}>
                        {title}
                    </h1>
                </div>
                <Navibar>
                    <Menu />
                    <Btn />
                </Navibar>
            </HeaderConteiner>
        </StyledHeader>
    )
}