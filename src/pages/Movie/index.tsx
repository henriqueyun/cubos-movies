import './Movie.css';

function Movie() {
    return (
        <div className='movie-container'>
            <div className='movie-info-header'>
                <h2 className="title">Thor: Ragnarok (2023)</h2>
                <h6>25/10/2013</h6>
            </div>
            <div className='movie-info'>
                <section>
                    <div className='subtitle-wrapper'>
                        <span className='subtitle'>Sinopse</span>
                        <hr className="subtitle-divider" />
                        <span className='subtitle-content'>We don't have an overview translated in English. Help us expand our database by adding one.</span>
                    </div>
                    <div className='subtitle-wrapper'>
                        <span className='subtitle'>Informações</span>
                        <hr className="subtitle-divider" />
                        <div className='sub-infos'>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $100
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $100
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $100
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $100
                            </span>
                            <span className='sub-info'>
                                <span className='sub-info-title'>
                                    Orçamento
                                </span>
                                $100
                            </span>
                        </div>
                    </div>
                </section>
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg" />
            </div>
        </div>
    );
}

export default Movie;