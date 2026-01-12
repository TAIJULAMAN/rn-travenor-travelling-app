import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const bookmarkedPlaces = [
    {
        id: 1,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        image: require('../assets/destinations/destination1.png'),
        price: 459,
    },
    {
        id: 2,
        name: 'Darma Reservoir',
        location: 'Darma, Sunamgnj',
        rating: 4.8,
        image: require('../assets/destinations/destination2.png'),
        price: 520,
    },
    {
        id: 3,
        name: 'High Rech Park',
        location: 'Zero Point, Sylhet',
        rating: 4.7,
        image: require('../assets/destinations/d1.png'),
        price: 380,
    },
    {
        id: 4,
        name: 'Casa Las Flores',
        location: 'Casa Las Flores, Sylhet',
        rating: 4.7,
        image: require('../assets/destinations/d3.png'),
        price: 650,
    },
];

export default function BookmarkedScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="chevron-back" size={24} color="#1B1E28" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Bookmarked</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Bookmarked Places Grid */}
                <View style={styles.gridContainer}>
                    {bookmarkedPlaces.map((place) => (
                        <TouchableOpacity
                            key={place.id}
                            style={styles.placeCard}
                        >
                            <View style={styles.imageContainer}>
                                <Image
                                    source={place.image}
                                    style={styles.placeImage}
                                />
                                <TouchableOpacity style={styles.bookmarkButton}>
                                    <Ionicons name="bookmark" size={20} color="#FF6B35" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.placeName} numberOfLines={1}>
                                    {place.name}
                                </Text>
                                <View style={styles.locationRow}>
                                    <Ionicons name="location-outline" size={12} color="#7D848D" />
                                    <Text style={styles.locationText} numberOfLines={1}>
                                        {place.location}
                                    </Text>
                                </View>
                                <View style={styles.footer}>
                                    <View style={styles.ratingContainer}>
                                        <Ionicons name="star" size={14} color="#FFD700" />
                                        <Text style={styles.ratingText}>{place.rating}</Text>
                                    </View>
                                    <Text style={styles.priceText}>${place.price}/Person</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Empty State */}
                {bookmarkedPlaces.length === 0 && (
                    <View style={styles.emptyState}>
                        <Ionicons name="bookmark-outline" size={64} color="#E5E5E5" />
                        <Text style={styles.emptyStateText}>No bookmarks yet</Text>
                        <Text style={styles.emptyStateSubtext}>
                            Start exploring and bookmark your favorite places
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1B1E28',
    },
    placeholder: {
        width: 40,
    },
    scrollView: {
        flex: 1,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        gap: 16,
        paddingBottom: 20,
    },
    placeCard: {
        width: '47%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
    },
    placeImage: {
        width: '100%',
        height: 160,
    },
    bookmarkButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        padding: 12,
    },
    placeName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        marginBottom: 8,
    },
    locationText: {
        fontSize: 11,
        color: '#7D848D',
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1B1E28',
    },
    priceText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#24BAEC',
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 80,
    },
    emptyStateText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1B1E28',
        marginTop: 16,
    },
    emptyStateSubtext: {
        fontSize: 14,
        color: '#7D848D',
        marginTop: 8,
        textAlign: 'center',
    },
});
