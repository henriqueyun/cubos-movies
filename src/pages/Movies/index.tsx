import './Movies.css';
import Movie from "../../components/Movie";
import Searchbar from "../../components/Searchbar";
import { PropsWithoutRef, useEffect, useState } from 'react';
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
        const response = await client.movies.search(searchText)
        setMovies(response.results);
    }

    useEffect(() => {
        if (!searchText) {
            discoverMovies()
        }
        searchMovies();
    }, [searchText])

    useEffect(() => {
        discoverMovies();
    }, [])

    return (
        <div className="container">
            <main>
                <Searchbar onChange={setsearchText} searchText={searchText} />
                {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
                <ul className='pager'>
                    {Array.from({ length: page + 4 }, (_, i) => i + 1)
                        .map(pageNumber =>
                            <PageNumberLink pageNumber={pageNumber} isSelected={pageNumber === page} />
                        )}
                </ul>
                <span>
                </span>
            </main>
        </div>
    );
}

function PageNumberLink({ pageNumber, isSelected }: any) {
    return isSelected
        ? (<li className='selected'><span>{pageNumber}</span></li>)
        : (<li>{pageNumber}</li>)
}
export default Movies;