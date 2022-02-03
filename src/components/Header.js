import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">WebProg.io</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={(data)=>data.isActive?"nav-link active":"nav-link"} to='/' >Home</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className={(data)=>data.isActive?"nav-link active":"nav-link"} to='/todos'>Todos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;