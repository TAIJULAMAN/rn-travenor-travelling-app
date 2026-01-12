import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BestDestination from '../../components/BestDestination';

export default function HomeScreen() {
    const router = useRouter();



    const popularPlaces = [
        {
            id: 1,
            name: 'Niladri Reservoir',
            location: 'Tekergat, Sunamgnj',
            rating: 4.7,
            price: 459,
            image: require('../../assets/popular/popular1.png'),
        },
        {
            id: 2,
            name: 'Casa Las Tirtugas',
            location: 'Av Damero, Mexico',
            rating: 4.8,
            price: 894,
            image: require('../../assets/popular/popular2.png'),
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <Image
                            source={require('../../assets/images/user-avatar.png')}
                            style={styles.avatar}
                        />
                        <Text style={styles.userName}>Leonardo</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
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


                {/* Best Destination Section */}
                <BestDestination />


                {/* Popular Places Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Best Places</Text>
                    <TouchableOpacity onPress={() => router.push('/(tabs)/destination')}>
                        <Text style={styles.viewAllText}>View all</Text>
                    </TouchableOpacity>
                </View>
                {/* Popular Places Cards */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.popularSection}>
                    <View style={styles.popularGrid}>
                        {popularPlaces.map((place) => (
                            <TouchableOpacity
                                key={place.id}
                                style={styles.popularCard}
                            >
                                <View style={styles.popularImageContainer}>
                                    <Image
                                        source={place.image}
                                        style={styles.popularImage}
                                    />
                                    <TouchableOpacity style={styles.favoriteButton}>
                                        <Ionicons name="heart-outline" size={20} color="#FFFFFF" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.popularCardContent}>
                                    <Text style={styles.popularPlaceName}>{place.name}</Text>
                                    <View style={styles.popularLocationRow}>
                                        <Ionicons name="location-outline" size={12} color="#7D848D" />
                                        <Text style={styles.popularLocationText}>{place.location}</Text>
                                    </View>
                                    <View style={styles.popularFooter}>
                                        <View style={styles.popularRating}>
                                            <Ionicons name="star" size={12} color="#FFD700" />
                                            <Text style={styles.popularRatingText}>{place.rating}</Text>
                                        </View>
                                        <Text style={styles.popularPrice}>${place.price}/Person</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
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
    // Popular Places Styles
    popularSection: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    },
    popularTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 16,
    },
    popularGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16,
    },
    popularCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    popularImageContainer: {
        position: 'relative',
        width: '100%',
        height: 120,
    },
    popularImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    favoriteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popularCardContent: {
        padding: 12,
    },
    popularPlaceName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
        marginBottom: 4,
    },
    popularLocationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginBottom: 8,
    },
    popularLocationText: {
        fontSize: 11,
        color: '#7D848D',
    },
    popularFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    popularRating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    popularRatingText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#1B1E28',
    },
    popularPrice: {
        fontSize: 12,
        fontWeight: '600',
        color: '#24BAEC',
    },
});
