import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    AMIR HOSSEIN
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon small"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link">cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}