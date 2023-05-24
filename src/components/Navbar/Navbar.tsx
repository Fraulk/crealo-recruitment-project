import { NavLink, Outlet } from "react-router-dom";
import "./style.scss"

const Navbar = () => (
    <div className="Navbar">
        <div className="navlinks">
            <NavLink to={"/"} className="navlink">Home</NavLink>
            <NavLink to={"/books"} className="navlink">Books</NavLink>
        </div>
        <Outlet />
    </div>
)

export default Navbar