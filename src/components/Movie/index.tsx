import './Movie.css';

function Movie({ movie }: any) {

    function formatDate(date: string): string {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`; 
    }

    return (
        <section className='movie'>
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Fear the walking dead poster" />
            <section className='movie-info'>
                <div className='movie-header'>
                    <div className='circle-wrapper'>
                        <div className="rating-circle">
                            <div className="rating-border">
                                {Math.round(movie.vote_average * 10)}
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

export default Movie;