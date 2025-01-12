import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return <GestureHandlerRootView>
         <Stack screenOptions={{headerShown: false}}>

          <Stack.Screen name="no bottom/Settings" options={{ headerShown: true, headerTitle: "Settings" }} />
         </Stack>
  </GestureHandlerRootView>
}