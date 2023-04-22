
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <NavLink exact to="/">Home&nbsp;</NavLink>
            <NavLink to="/news">News&nbsp;</NavLink>
            <NavLink to="/games">Games&nbsp;</NavLink>
            <NavLink to="/giveaways">Giveaways</NavLink>
        </nav>
    )
}

export default NavBar