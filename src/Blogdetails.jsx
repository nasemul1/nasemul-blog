import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const Blogdetails = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, error } = useFetch('https://projects-data-uqsa.onrender.com/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('https://projects-data-uqsa.onrender.com/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/nasemul-blog/');
        })
    }
    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>{ blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default Blogdetails;