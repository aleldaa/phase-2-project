
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <div className="main-title">
                <h1>MMI Gamer Zone 🎮</h1>
            </div>
            <div className="navbar-elements">
                <ul>
                    <li><NavLink exact to="/" className='navlink'>Home</NavLink></li>
                    <li><NavLink to="/news" className='navlink'>News</NavLink></li>
                    <li><NavLink to="/games" className='navlink'>Games</NavLink></li>
                    <li><NavLink to="/giveaways" className='navlink'>Giveaways</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar