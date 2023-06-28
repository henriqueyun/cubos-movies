import './MovieItem.css';
import { formatDate } from '../../util';
import VoteCircle from '../VoteCircle';
import MovieTag from '../MovieTag';

function MovieItem({ movie }: any) {

    return (
        <section className='movie'>
            {movie.poster_path
                ? <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={`${movie.description} poster`} />
                : <div className='no-image-movie'>Não há imagem disponível</div>
            }
            <section className='movie-info'>
                <div className='movie-header'>
                    <VoteCircle width={80} voteAverage={movie.vote_average} />
                    <div className='movie-header-text'>
                        <div className='title'>
                            <h2>{movie.title}</h2>
                        </div>
                        <div className='date'>
                            <h3>{formatDate(movie.release_date)}</h3>
                        </div>
                    </div>
                </div>
                <div className='movie-description'>
                    {movie.overview}
                    <div className='movie-tags'>
                        <MovieTag tagName='Ação' />
                        <MovieTag tagName='Aventura' />
                        <MovieTag tagName='Terror' />
                    </div>
                </div>
            </section>
        </section>
    );
}

export default MovieItem;