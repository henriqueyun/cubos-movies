import './MoviePage.css';
import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { client } from '../../client/client';
import Movie from '../../client/models/Movie';
import { formatDate } from '../../util';
import VoteCircle from '../../components/VoteCircle';
import MovieTag from '../../components/MovieTag';

function MoviePage() {

    const { id }: Readonly<Params<string>> = useParams();
    const [movie, setMovie] = useState<Movie>();


    const formatCurrency = (currency: number): string => {
        return currency.toLocaleString('en-US');
    }

    async function getMovie() {
        if (id) {
            const response = await client.movies.find(parseInt(id));
            setMovie(response);
        }
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className='movie-container'>
            <div className='movie-info-header'>
                <h2 className="title">{movie?.title}</h2>
                <h6>{movie && formatDate(movie.release_date)}</h6>
            </div>
            <div className='movie-info'>
                <section>
                    <div className='subtitle-wrapper'>
                        <span className='subtitle'>Sinopse</span>
                        <hr className="subtitle-divider" />
                        <span className='subtitle-content'>
                            {movie?.overview}</span>
                    </div>
                    <div className='subtitle-wrapper'>
                        <span className='subtitle'>Informações</span>
                        <hr className="subtitle-divider" />
                        <div className='sub-infos'>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Situação
                                </span>
                                {movie?.status}
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Idioma
                                </span>
                                {movie?.original_language.toUpperCase()}
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Duração
                                </span>
                                {movie && `${Math.floor(parseFloat((movie?.runtime)) / 60)}h ${parseFloat(movie?.runtime) % 60}m`}
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $ {movie && formatCurrency(movie?.budget)}
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Receita
                                </span>
                                $ {movie && formatCurrency(movie?.revenue)}
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Lucro
                                </span>
                                $ {movie ? movie && formatCurrency(movie?.revenue - movie?.budget) : ''}
                            </span>
                        </div>
                    </div>
                    <div className='movie-info-footer'>
                        <div className='movie-tags'>
                            {movie && movie.genres && movie.genres.map(genre => <MovieTag key={genre.id} tagName={genre.name}/>)}
                            
                        </div>
                        {movie && <VoteCircle width={126} voteAverage={movie.vote_average} />}
                    </div>
                </section>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`} />
            </div>
        </div>
    );
}

export default MoviePage;