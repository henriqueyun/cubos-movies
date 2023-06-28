import { AxiosStatic } from "axios"

function MoviesService(http: AxiosStatic) {
    return {
        search: async (query = "2023", page = 1) => {
            const { data } = await http.get(`/search/movie?query=${query}&page=${page}&api_key=${import.meta.env.VITE_API_KEY}`)
            return data;
        },
        discover: async (page = 1) => {
            const { data } = await http.get(`/discover/movie?page=${page}&api_key=${import.meta.env.VITE_API_KEY}`)
            return data;
        },
        find: async (id: number) => {
            const { data } = await http.get(`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
            return data;
        }
    }
}

export default MoviesService