interface Movie {
    id: number,
    title: string,
    overview: string,
    status: string,
    language: string,
    duration: string,
    budget: number,
    revenue: number
    popularity: number,
    release_date: Date,
}


interface SearchResponse {
    page: number,
    total_pages: number,
    total_results: number,
    results: Movie[],
}

export default Movie;