import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BestDestination from '../../components/BestDestination';
import PopularPlaces from '../../components/PopularPlaces';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.userInfo}
                        onPress={() => router.push('/(tabs)/profile')}
                    >
                        <Image
                            source={require('../../assets/images/user-avatar.png')}
                            style={styles.avatar}
                        />
                        <Text style={styles.userName}>Leonardo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.notificationButton}
                        onPress={() => router.push('/notification')}
                    >
                        <Ionicons name="notifications-outline" size={24} color="#FF6B35" />
                    </TouchableOpacity>
                </View>

                {/* Hero Section */}
                <View style={styles.heroSection}>
                    <Text style={styles.heroText}>Explore the</Text>
                    <View style={styles.heroHighlight}>
                        <Text style={styles.heroTextBold}>Beautiful </Text>
                        <Text style={styles.heroTextOrange}>world!</Text>
                    </View>
                </View>


                {/* Best Destination */}
                <BestDestination />



                {/* Popular Places */}
                <PopularPlaces />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 30,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
    },
    notificationButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroSection: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    heroText: {
        fontSize: 36,
        fontWeight: '400',
        color: '#1B1E28',
        lineHeight: 44,
    },
    heroHighlight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heroTextBold: {
        fontSize: 36,
        fontWeight: '700',
        color: '#1B1E28',
        lineHeight: 44,
    },
    heroTextOrange: {
        fontSize: 36,
        fontWeight: '700',
        color: '#FF6B35',
        lineHeight: 44,
        textDecorationLine: 'underline',
        textDecorationColor: '#FF6B35',
        textDecorationStyle: 'solid',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1B1E28',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FF6B35',
    },
});
