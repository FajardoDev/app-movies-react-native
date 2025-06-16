import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieAPI } from "../api/movieApi";

export const getMovieByIdAction = async (
	id: number | string,
): Promise<CompleteMovie> => {
	try {
		const { data } = await movieAPI.get<MovieDBMovieResponse>(`/${id}`);
		// console.log(data);

		// console.log("Película HTTP Cargada");

		return MovieMapper.fromTheMovieDBToCompleteMovie(data);
	} catch (error) {
		console.log(error);
		throw "Cannot load id movies";
	}
};
