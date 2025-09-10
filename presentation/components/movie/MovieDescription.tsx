import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Text, View } from "react-native";

interface Props {
	movie: CompleteMovie;
}

export default function MovieDescription({ movie }: Props) {
	return (
		<View className="mx-5">
			<View className="flex flex-row">
				<Text>{movie.rating}</Text>
				<Text> - {movie.genres.join(", ")}</Text>
			</View>

			{movie.description && (
				<>
					<Text className="font-semibold mt-5 text-slate-600 text-xl">
						Historia
					</Text>

					<Text className="font-normal mt-2 text-justify">
						{movie.description}
					</Text>
				</>
			)}

			<Text className="font-semibold mt-3 text-xl text-slate-600">
				Presupuesto: {Formatter.currency(movie.budget)}
			</Text>
		</View>
	);
}
