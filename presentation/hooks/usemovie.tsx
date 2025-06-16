/* eslint-disable react-hooks/rules-of-hooks */
import { getMovieByIdAction } from "@/core/movie/get-movie-by-id.action";
import { getMovieCastAction } from "@/core/movie/getMovieCastAction";
import { useQuery } from "@tanstack/react-query";

// Para tener la data prepargada de una petición anterior
export default function usemovie(id: number | string) {
	const movieQuery = useQuery({
		queryKey: ["movie", id],
		queryFn: () => getMovieByIdAction(id), // queryFn: () => getNowMoviesAction(page)
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	});

	const castQuery = useQuery({
		queryKey: ["movie", id, "cast"],
		queryFn: () => getMovieCastAction(id),
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	});

	return {
		movieQuery,
		castQuery,
	};
}
