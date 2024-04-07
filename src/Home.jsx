import Bloglists from "./Bloglists";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('https://projects-data-uqsa.onrender.com/blogs/');
    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Bloglists blog={ blogs } title="All blogs"/>}
        </div>
    );
}
 
export default Home;