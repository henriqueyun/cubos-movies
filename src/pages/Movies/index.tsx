import './Movies.css';
import Movie from "../../components/Movie";
import Searchbar from "../../components/Searchbar";
import { useEffect, useState } from 'react';
import { client } from '../../client/client';
import MovieModel from '../../client/models/Movie';

function Movies() {
    const [searchText, setsearchText] = useState("");
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [page, setPage] = useState<number>(1);

    async function discoverMovies() {
        const response = await client.movies.discover(page)
        setMovies(response.results);
    }

    async function searchMovies() {
        const response = await client.movies.search(searchText, page)
        setMovies(response.results);
    }

    useEffect(() => {
        setPage(1);
        if (!searchText) {
            discoverMovies()
            return;
        }
        searchMovies();
    }, [searchText])

    useEffect(() => {
        if (!searchText) {
            discoverMovies()
            return;
        }
        searchMovies();
    }, [page])

    useEffect(() => {
        discoverMovies();
    }, [])

    function pageNumbers(): number[] {
        let numbers: number[] = [];
        if (page < 3) {
            let beforeSelected = page - 1;
            let afterSelected = (page - 1) + 5 - beforeSelected;
            while (afterSelected > 0) {
                numbers.push(afterSelected)
                afterSelected--;
            }
            numbers = numbers.reverse();
            console.log(beforeSelected);
            while (beforeSelected > 1) {
                numbers.unshift(page - beforeSelected);
                beforeSelected--;
            }
        }

        if (page >= 3) {
            let beforeSelected = 0;
            let afterSelected = 0;
            while (beforeSelected < 2) {
                beforeSelected++;
                numbers.unshift(page - beforeSelected)
            }
            numbers.push(page)
            while (afterSelected < 2) {
                afterSelected++;
                numbers.push(page + afterSelected);
            }
        }
        return numbers;
    }

    return (
        <div className="container">
            <main>
                <Searchbar onChange={setsearchText} searchText={searchText} />
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
                <ul className='pager'>
                    {pageNumbers().map(pn =>
                        <PageNumberLink key={pn} pageNumber={pn} isSelected={pn === page} onClick={setPage} />
                    )}
                </ul>
                <span>
                </span>
            </main>
        </div>
    );
}

function PageNumberLink({ pageNumber, isSelected, onClick }: any) {
    return isSelected
        ? (<li className='selected'><span>{pageNumber}</span></li>)
        : (<li onClick={() => onClick(pageNumber)}>{pageNumber}</li>)
}
export default Movies;