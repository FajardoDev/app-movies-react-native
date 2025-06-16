import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.interface.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieAPI } from "../api/movieApi";

interface Options {
	page?: number;
	limit?: number;
}

export const getTopRatedMoviesAction = async ({
	page = 1,
	limit = 10,
}: Options) => {
	try {
		const { data } = await movieAPI.get<MovieDBMoviesResponse>("/top_rated", {
			params: {
				page: page,
			},
		});
		// console.log(JSON.stringify(data, null, 2));
		// const movies = data.results.map((movie) => MovieMapper.fromTheMovieDBToMovie(movie))

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
		// console.log(movies);

		return movies;
	} catch (error) {
		console.log(error);
		throw "Cannot load top rated movies";
	}
};
