import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import usemovie from "@/presentation/hooks/usemovie";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function DetallesPelis() {
	const { id } = useLocalSearchParams();
	// getMovieByIdAction(+id);

	const { movieQuery, castQuery } = usemovie(+id);

	// Loading
	if (movieQuery.isLoading || !movieQuery.data) {
		return (
			<View className="flex justify-center items-center flex-1">
				<Text className="mb-4 animate-pulse text-slate-700">
					Espere por favor...
				</Text>
				<ActivityIndicator color="purple" size={40} />
			</View>
		);
	}

	return (
		<ScrollView>
			<MovieHeader
				originalTitle={movieQuery.data.originalTitle}
				poster={movieQuery.data.poster}
				title={movieQuery.data.title}
			/>

			<MovieDescription movie={movieQuery.data} />

			{/* Movie Cast */}
			<MovieCast cast={castQuery.data ?? []} />
		</ScrollView>
	);
}

// Tarea - Actores de las películas
