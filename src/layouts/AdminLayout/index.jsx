import { NavLink, Outlet } from "react-router-dom";
import config from "@/config";

function AdminLayout() {
    return (
        <div className="wrapper">
            <header className="header">
                <div>Admin layout</div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to={config.routes.home}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={config.routes.products}>
                                Products
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
