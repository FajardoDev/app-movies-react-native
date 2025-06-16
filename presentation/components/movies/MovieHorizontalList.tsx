import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useEffect, useRef } from "react";
import {
	FlatList,
	NativeScrollEvent,
	NativeSyntheticEvent,
	Text,
	View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
	title?: string;
	movies: Movie[];
	className?: string;

	loadNextPage?: () => void;
}

export default function MovieHorizontalList({
	movies,
	title,
	className,
	loadNextPage,
}: Props) {
	const isLoading = useRef(false);

	useEffect(() => {
		setTimeout(() => {
			isLoading.current = false;
		}, 200);
	}, [movies]);

	// Determinar el final de la listScroll
	const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		if (isLoading.current) return;

		const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

		// Determinar si estoy cerca del final del scroll
		const estaCerca =
			contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

		if (!estaCerca) return;

		isLoading.current = true;
		console.log("Cargar siguientes peliculas");

		loadNextPage && loadNextPage();

		// isLoading.current = false;
	};

	return (
		<View className={`${className}`}>
			{title && <Text className="text-3xl font-bold px-4 mb-3">{title}</Text>}

			<FlatList
				horizontal
				data={movies}
				showsHorizontalScrollIndicator={false}
				// keyExtractor={(item) => `${item.id}`}
				keyExtractor={(item, i) => `${item.id}-${i}`}
				renderItem={({ item }) => (
					<MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
				)}
				onScroll={onScroll}
			/>
		</View>
	);
}
