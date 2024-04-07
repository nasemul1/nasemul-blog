import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <h1><a href="https://nasemul1.github.io/nasemul-blog/" id="logo">Nasemul Blog</a></h1>
            <div>
                <Link to="/nasemul-blog/">Home</Link>
                <Link to="/create">New blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;