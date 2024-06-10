import { Menu } from "../../components/menu/Menu"
import { Btn } from "../../components/button/Btn"
import { StyledHeader, HeaderConteiner, Navibar, ButtonToogle } from "./HeaderStyles"
import { useMoviesContext } from "../../contexts/MoviesContext"


export const Header = ({ title }) => {

    const { hendleCategoriaMovies, setToogleMenu, toogleMenu,  } = useMoviesContext()

    const API_BASE = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=';

    return (
        <StyledHeader>
            <HeaderConteiner>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ButtonToogle onClick={() => setToogleMenu(!toogleMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </ButtonToogle>
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