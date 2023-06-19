import { AxiosStatic } from "axios"
// import Movie from "../models/Movie";

function MoviesService(http: AxiosStatic) {
    return {
        search: async (query = "2023", page = 1) => {
            const { data } = await http.get(`/search/movie?query=${query}&page=${page}&api_key=dac67aca7688e3f7d6b2bc7850308633`)
            console.log(data)
            return data;
        },
        discover: async (page = 1) => {
            const { data } = await http.get(`/discover/movie?page=${page}&api_key=dac67aca7688e3f7d6b2bc7850308633`)
            console.log(data)
            return data;
        }
    }
}

export default MoviesService