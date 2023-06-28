interface Movie {
    id: number,
    title: string,
    overview: string,
    status: string,
    original_language: string,
    runtime: string,
    budget: number,
    revenue: number
    popularity: number,
    release_date: string,
    vote_average: number,
    poster_path: string,
    genres: any[],
}

export default Movie;