import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { movieAPI } from "../api/movieApi";

export const getMovieCastAction = async (movieId: number | string) => {
	try {
		const { data } = await movieAPI.get<MovieDBCreditsResponse>(
			`/${movieId}/credits`,
		);

		console.log("Película HTTP Cargada Cast");

		return data.cast.map(MovieMapper.fromMovieDBCastToEntity);
	} catch (error) {
		console.log(error);
		throw "Cannot load cast movies";
	}
};
