import { Link, NavLink, useNavigate } from 'react-router-dom';
import {useCart} from "../../food/context/UseCart";

export const Navbar = ({onOpenCart}) => {

    const navigate = useNavigate();

    const {totalItems} = useCart();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar p-2 fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/inicio">FoodApp</Link>

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav me-auto">

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/inicio/vegetales"
                        >
                            Vegetales
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/inicio/frutos"
                        >
                            Frutos
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/inicio/semillas"
                        >
                            Semillas
                        </NavLink>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <button className="nav-item nav-link btn" onClick={onOpenCart}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="badge bg-danger ms-1">{totalItems}</span>
                        </button>

                        <button
                            className="nav-item nav-link btn"
                            onClick={onLogout}
                        >
                            Salir
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
)
}