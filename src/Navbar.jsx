import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1>Nasemul Blog</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;