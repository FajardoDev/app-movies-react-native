import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.interface.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieAPI } from "../api/movieApi";

export const getNowMoviesAction = async () => {
	try {
		const { data } = await movieAPI.get<MovieDBMoviesResponse>("/now_playing");
		// console.log(JSON.stringify(data, null, 2));
		// const movies = data.results.map((movie) => MovieMapper.fromTheMovieDBToMovie(movie))

		const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
		// console.log(movies);

		return movies;
	} catch (error) {
		console.log(error);
		throw "Cannot load now playing movies";
	}
};
