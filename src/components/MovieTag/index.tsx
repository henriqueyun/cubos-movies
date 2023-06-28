import './MovieTag.css'

function MovieTag({ tagName }: any) {
    return (
        <span className='movie-tag'>{tagName}</span>
    );
}

export default MovieTag;