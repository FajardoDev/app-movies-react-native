import { router } from "expo-router";
import { Image, Pressable } from "react-native";

interface Props {
	id: number;
	poster: string;
	smallPoster?: boolean;
	className?: string;
}

export default function MoviePoster({
	id,
	poster,
	smallPoster = false,
	className,
}: Props) {
	return (
		<Pressable
			className={`active:opacity-80 px-2 ${className}`}
			onPress={() => router.push(`./movie/${id}`)}
		>
			<Image
				source={{ uri: poster }}
				className="shadow-lg rounded-2xl shadow-black w-full h-full"
				style={{
					width: smallPoster ? 85 : 150,
					height: smallPoster ? 130 : 250,
				}}
				resizeMode="cover"
			/>
		</Pressable>
	);
}
