import { Menu } from "../../components/menu/Menu"
import { Search } from "../../components/button/Search"
import { StyledHeader, HeaderConteiner, Navibar } from "./HeaderStyles"


export const Header = ({ title }) => {
    return (
        <StyledHeader>
            <HeaderConteiner>
                <h1>{title}</h1>
                <Navibar>
                    <Menu />
                    <Search />
                </Navibar>
            </HeaderConteiner>
        </StyledHeader>
    )
}