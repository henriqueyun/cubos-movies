import axios from 'axios';
import MoviesService from './services/MoviesService';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const client = {
    movies: MoviesService(axios)
}

export { client }