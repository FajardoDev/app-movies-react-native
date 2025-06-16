import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";

export default function PantallaInicio() {
	const { nowPlayingQuery, popularQuery, UpcomingQuery, topRatedQuery } =
		useMovies();
	const safeArea = useSafeAreaInsets();

	// Loading
	if (nowPlayingQuery.isLoading) {
		return (
			<View className="justify-center items-center flex-1">
				<ActivityIndicator color="purple" size={40} />
			</View>
		);
	}
	{
		/*  {JSON.stringify(nowPlayingQuery.data, null, 2)} */
	}

	return (
		<ScrollView>
			<View className="mt-4 pb-10" style={{ paddingTop: safeArea.top }}>
				<Text className="text-3xl font-bold px-4 mb-2 text-slate-700">
					Movie App
				</Text>

				{/* Carrousel de Imagenes */}
				<MainSlideshow movies={nowPlayingQuery.data ?? []} />

				{/* Popular */}
				<MovieHorizontalList
					title="Populares"
					movies={popularQuery.data ?? []}
					className="mb-5"
				/>
				<MovieHorizontalList
					title="Mejor calificadas"
					movies={topRatedQuery.data?.pages.flat() ?? []}
					className="mb-5"
					loadNextPage={topRatedQuery.fetchNextPage}
				/>
				<MovieHorizontalList
					title="Próximamente en cines"
					movies={UpcomingQuery.data ?? []}
					className="mb-5"
				/>
			</View>
		</ScrollView>
	);
}

// SafeAreaView
// FlatList

// Mejor calificadas
// Próximamente en cines

// 2 Actions
// /top_rated
// /upcoming

// Modificar hooks
// Retornar la información

// Ir al index del /home
