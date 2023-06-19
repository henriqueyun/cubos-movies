import './Movie.css';

function Movie() {
    return (
        <section className='movie'>
            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gX9H7c7qI0hgLSvUCsOxf7g8eUp.jpg" alt="Fear the walking dead poster" />
            <section className='movie-info'>
                <div className='movie-header'>
                    <div className='circle-wrapper'>
                        <div className="rating-circle">
                            <div className="rating-border">
                                71%
                            </div>
                        </div>
                    </div>
                    <div className='movie-header-text'>
                        <div className='title'>
                            <h2>Fear the Walking Dead</h2>
                        </div>
                        <div className='date'>
                            <h3>25/10/2017</h3>
                        </div>
                    </div>
                </div>
                <div className='movie-description'>
                    Fear Ambientada em Los Angeles, a série mostra o começo do apocalipse zumbi e a temível desintegração da sociedade pelos olhos de uma família disfuncional, que precisa se unir para tentar sobreviver ao caos do fim dos tempos.
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