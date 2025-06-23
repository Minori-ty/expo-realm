import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { createContext } from 'react'
import 'react-native-reanimated'
import Realm from 'realm'
import { AnimeSchema } from '../schema/anime'

import { useColorScheme } from '../hooks/useColorScheme'
const realm = new Realm({ schema: [AnimeSchema] })
const RealmContext = createContext<Realm | undefined>(undefined)
export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    if (!loaded) {
        // Async font loading only occurs in development.
        return null
    }

    return (
        <RealmContext.Provider value={realm}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </RealmContext.Provider>
    )
}
