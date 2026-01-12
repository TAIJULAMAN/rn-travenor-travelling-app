import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const popularPlaces = [
    {
        id: 1,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        price: 459,
        image: require('../assets/popular/popular1.png'),
    },
    {
        id: 2,
        name: 'Casa Las Tirtugas',
        location: 'Av Damero, Mexico',
        rating: 4.8,
        price: 894,
        image: require('../assets/popular/popular2.png'),
    },
    {
        id: 3,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        price: 459,
        image: require('../assets/popular/p1.png'),
    },
    {
        id: 4,
        name: 'Casa Las Tirtugas',
        location: 'Av Damero, Mexico',
        rating: 4.8,
        price: 894,
        image: require('../assets/popular/p2.png'),
    },
];

export default function PopularPlaces() {
    const router = useRouter();

    return (
        <View style={styles.container}>
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
                style={styles.popularSection}
            >
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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
    popularSection: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    },
    popularGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16,
    },
    popularCard: {
        width: 180,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginRight: 16,
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
