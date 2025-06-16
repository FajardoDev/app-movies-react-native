import { getNowMoviesAction } from "@/core/actions/getNowMoviesAction";
import { getPopularMoviesAction } from "@/core/actions/getPopularMoviesAction";
import { getTopRatedMoviesAction } from "@/core/actions/getTopRatedMoviesAction";
import { getUpcomingMoviesAction } from "@/core/actions/getUpcomingMoviesAction";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
	// Queries para manejar el cache etc..
	const nowPlayingQuery = useQuery({
		queryKey: ["movies", "nowPlaying"],
		queryFn: getNowMoviesAction, // queryFn: () => getNowMoviesAction(page)
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	});

	const popularQuery = useQuery({
		queryKey: ["movies", "popular"],
		queryFn: getPopularMoviesAction, // queryFn: () => getNowMoviesAction(page)
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	});

	// const topRatedQuery = useQuery({
	// 	queryKey: ["movies", "mejorCalificadas"],
	// 	queryFn: getTopRatedMoviesAction,
	// 	staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	// });

	// Infinit Scroll
	const topRatedQuery = useInfiniteQuery({
		initialPageParam: 1,
		queryKey: ["movies", "mejorCalificadas"],
		// queryFn: () => getTopRatedMoviesAction({ page: 1 }),
		queryFn: ({ pageParam }) => {
			console.log({ pageParam });
			return getTopRatedMoviesAction({ page: pageParam });
		},
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
		getNextPageParam: (lastPage, pages) => pages.length + 1,
	});

	const UpcomingQuery = useQuery({
		queryKey: ["movies", "proximamenteCines"],
		queryFn: getUpcomingMoviesAction, // queryFn: () => getNowMoviesAction(page)
		staleTime: 1000 * 60 * 60 * 24, // Mantener fresca la data * un tiempo 24h
	});

	return {
		nowPlayingQuery,
		popularQuery,
		topRatedQuery,
		UpcomingQuery,
	};
};
