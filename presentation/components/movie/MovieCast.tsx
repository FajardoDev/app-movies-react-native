import { Cast } from "@/infrastructure/interfaces/movie-cast.interface";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ActorCard from "./ActorCard";

interface Props {
	cast: Cast[];
}

export default function MovieCast({ cast }: Props) {
	return (
		<View className="mt-5 mb-20">
			<Text className="font-semibold text-2xl px-5 mb-3 text-slate-700">
				Actores
			</Text>
			<FlatList
				data={cast}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => `${item.id.toString()}`}
				renderItem={({ item }) => <ActorCard actor={item} />}
			/>
		</View>
	);
}
