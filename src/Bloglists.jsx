import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglists = (props) => {
    const blogs = props.blog;
    const title = props.title;
    
    return (
        <div className="blog-lists">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by - { blog.author }</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Bloglists;