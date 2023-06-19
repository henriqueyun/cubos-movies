import './Movies.css';
import Movie from "../../components/Movie";
import Searchbar from "../../components/Searchbar";

function Movies() {
    return (
        <div className="container">
            <main>
                <Searchbar />
                <Movie />
            </main>
        </div>
    );
}

export default Movies;