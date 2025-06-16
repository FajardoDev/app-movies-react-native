import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "../global.css";

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		// Provide the client to your App
		<GestureHandlerRootView>
			<QueryClientProvider client={queryClient}>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				/>
			</QueryClientProvider>
		</GestureHandlerRootView>
	);
}
