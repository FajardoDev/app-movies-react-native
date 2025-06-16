import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.interface.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieAPI } from "../api/movieApi";

export const getPopularMoviesAction = async () => {
	try {
		const { data } = await movieAPI.get<MovieDBMoviesResponse>("/popular");

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
		// console.log(movies);

		return movies;
	} catch (error) {
		console.log(error);
		throw "Cannot load now playing movies";
	}
};
