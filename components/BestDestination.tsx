import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const destinations = [
    {
        id: 1,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        image: require('../assets/destinations/destination1.png'),
        visitors: 50,
    },
    {
        id: 2,
        name: 'Darma Reservoir',
        location: 'Darma, Sunamgnj',
        rating: 4.8,
        image: require('../assets/destinations/destination2.png'),
        visitors: 45,
    },
    {
        id: 3,
        name: 'High Rech Park',
        location: 'Zero Point, Sylhet',
        rating: 4.7,
        image: require('../assets/destinations/d1.png'),
        visitors: 50,
    },
    {
        id: 4,
        name: 'Casa Las Flores',
        location: 'Casa Las Flores, Sylhet',
        rating: 4.7,
        image: require('../assets/destinations/d3.png'),
        visitors: 50,
    },
];

export default function BestDestination() {
    const router = useRouter();

    return (
        <>
            {/* Best Destination Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Best Destination</Text>
                <TouchableOpacity onPress={() => router.push('/(tabs)/destination')}>
                    <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
            </View>

            {/* Destination Cards */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.destinationScroll}
                contentContainerStyle={styles.destinationScrollContent}
            >
                {destinations.map((destination) => (
                    <TouchableOpacity
                        key={destination.id}
                        style={styles.destinationCard}
                    >
                        <Image
                            source={destination.image}
                            style={styles.destinationImage}
                        />
                        <View style={styles.cardContent}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.destinationName}>{destination.name}</Text>
                                <View style={styles.ratingContainer}>
                                    <Ionicons name="star" size={16} color="#FFD700" />
                                    <Text style={styles.ratingText}>{destination.rating}</Text>
                                </View>
                            </View>
                            <View style={styles.cardFooter}>
                                <View style={styles.locationContainer}>
                                    <Ionicons name="location-outline" size={14} color="#7D848D" />
                                    <Text style={styles.locationText}>{destination.location}</Text>
                                </View>
                                <View style={styles.visitorsContainer}>
                                    <View style={styles.avatarGroup}>
                                        <Image
                                            source={require('../assets/destinations/destination1.png')}
                                            style={[styles.visitorAvatar, styles.visitorAvatar1]}
                                        />
                                        <Image
                                            source={require('../assets/destinations/destination2.png')}
                                            style={[styles.visitorAvatar, styles.visitorAvatar2]}
                                        />
                                        <Image
                                            source={require('../assets/destinations/d1.png')}
                                            style={[styles.visitorAvatar, styles.visitorAvatar3]}
                                        />
                                    </View>
                                    <Text style={styles.visitorsText}>+{destination.visitors}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
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
    destinationScroll: {
        paddingLeft: 20,
    },
    destinationScrollContent: {
        paddingRight: 20,
    },
    destinationCard: {
        width: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
        overflow: 'hidden',
    },
    destinationImage: {
        width: '100%',
        height: 320,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    cardContent: {
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    destinationName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
        flex: 1,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationText: {
        fontSize: 12,
        color: '#7D848D',
    },
    visitorsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    visitorAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    visitorAvatar1: {
        zIndex: 3,
    },
    visitorAvatar2: {
        zIndex: 2,
        marginLeft: -8,
    },
    visitorAvatar3: {
        zIndex: 1,
        marginLeft: -8,
    },
    visitorsText: {
        fontSize: 12,
        color: '#7D848D',
        fontWeight: '500',
    },
});
