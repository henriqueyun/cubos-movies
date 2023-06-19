import './MovieItem.css';

function MovieItem({ movie }: any) {

    function formatDate(date: string): string {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`; 
    }

    return (
        <section className='movie'>
            {movie.poster_path 
                ? <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={`${movie.description} poster`} />
                : <div className='no-image-movie'>Não há imagem disponível</div>
            }
            <section className='movie-info'>
                <div className='movie-header'>
                    <div className='circle-wrapper'>
                        <div className="rating-circle">
                            <div className="rating-border">
                                {Math.round(movie.vote_average * 10)}%
                            </div>
                        </div>
                    </div>
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
                        <span className='movie-tag'>Ação</span>
                        <span className='movie-tag'>Aventura</span>
                        <span className='movie-tag'>Terror</span>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default MovieItem;