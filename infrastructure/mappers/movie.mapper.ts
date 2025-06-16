import { Cast } from "../interfaces/movie-cast.interface";
import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBCast } from "../interfaces/moviedb-credits.response";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response.interface";
import { Result } from "../interfaces/moviedb.interface.response";

export class MovieMapper {
	static fromTheMovieDBToMovie = (movie: Result): Movie => {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			rating: movie.vote_average,
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			// poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			// backdrop: movie.backdrop_path,
		};
	};

	static fromTheMovieDBToCompleteMovie = (
		movie: MovieDBMovieResponse,
	): CompleteMovie => {
		return {
			id: movie.id,
			title: movie.title,
			description: movie.overview,
			releaseDate: new Date(movie.release_date),
			rating: movie.vote_average,
			poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
			// poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
			backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
			budget: movie.budget,
			duration: movie.runtime,
			genres: movie.genres.map((g) => g.name),
			productionCompanies: movie.production_companies.map((p) => p.name),
			originalTitle: movie.original_title,
		};
	};
	static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
		return {
			id: actor.id,
			name: actor.name,
			character: actor.character ?? "No character",
			avatar: actor.profile_path
				? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
				: "https://i.stack.imgur.com/l60Hf.png", // esto en caso de no tener imagen
		};
	}
}
