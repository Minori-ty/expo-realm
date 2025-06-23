import { IconSymbol } from '@/components/ui/IconSymbol'
import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../../components/PageHeader'

const schedule = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerTitle: '动漫追番',
            headerTitleAlign: 'center',
        })
    }, [navigation])
    const router = useRouter()
    return (
        <SafeAreaView>
            <PageHeader
                title="动漫追番"
                actions={[
                    <TouchableOpacity onPress={() => router.push('/addAnime')}>
                        <IconSymbol size={35} name="plus.app.fill" color="black" />
                    </TouchableOpacity>,
                ]}
            />
        </SafeAreaView>
    )
}

export default schedule

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
