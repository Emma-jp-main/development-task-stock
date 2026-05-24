import { NavLink, Outlet } from "react-router-dom";


export default function
        Layout() {
    return (
        <>
            <header className="border-bottom bg-light">
                <div className="container py-3">
                    <h1 className="h4 mb-3">
                        めいがらますた☆
                    </h1>
                    <ul className="nav nav-pills gap-2">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Stocks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/stocks/new"
                                end
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                Register New Stock
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="container py-4">
                <Outlet />
            </main>
        </>
    );
}