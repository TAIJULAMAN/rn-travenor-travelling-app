import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const previousTrips = [
    {
        id: 1,
        destination: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        date: 'Dec 15-20, 2023',
        image: require('../assets/destinations/destination1.png'),
        status: 'Completed',
        rating: 4.7,
    },
    {
        id: 2,
        destination: 'Darma Reservoir',
        location: 'Darma, Sunamgnj',
        date: 'Nov 10-15, 2023',
        image: require('../assets/destinations/destination2.png'),
        status: 'Completed',
        rating: 4.8,
    },
    {
        id: 3,
        destination: 'High Rech Park',
        location: 'Zero Point, Sylhet',
        date: 'Oct 5-8, 2023',
        image: require('../assets/destinations/d1.png'),
        status: 'Completed',
        rating: 4.7,
    },
];

export default function PreviousTripsScreen() {
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
                <Text style={styles.headerTitle}>Previous Trips</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Trips List */}
                <View style={styles.tripsContainer}>
                    {previousTrips.map((trip) => (
                        <TouchableOpacity
                            key={trip.id}
                            style={styles.tripCard}
                        >
                            <Image
                                source={trip.image}
                                style={styles.tripImage}
                            />
                            <View style={styles.tripContent}>
                                <View style={styles.tripHeader}>
                                    <View style={styles.tripInfo}>
                                        <Text style={styles.tripDestination}>{trip.destination}</Text>
                                        <View style={styles.locationRow}>
                                            <Ionicons name="location-outline" size={14} color="#7D848D" />
                                            <Text style={styles.locationText}>{trip.location}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.ratingBadge}>
                                        <Ionicons name="star" size={14} color="#FFD700" />
                                        <Text style={styles.ratingText}>{trip.rating}</Text>
                                    </View>
                                </View>
                                <View style={styles.tripFooter}>
                                    <View style={styles.dateContainer}>
                                        <Ionicons name="calendar-outline" size={14} color="#7D848D" />
                                        <Text style={styles.dateText}>{trip.date}</Text>
                                    </View>
                                    <View style={styles.statusBadge}>
                                        <Text style={styles.statusText}>{trip.status}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Empty State */}
                {previousTrips.length === 0 && (
                    <View style={styles.emptyState}>
                        <Ionicons name="airplane-outline" size={64} color="#E5E5E5" />
                        <Text style={styles.emptyStateText}>No trips yet</Text>
                        <Text style={styles.emptyStateSubtext}>
                            Start your journey and create amazing memories
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
    tripsContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    tripCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 16,
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
    tripImage: {
        width: 120,
        height: 140,
    },
    tripContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    tripHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    tripInfo: {
        flex: 1,
        marginRight: 8,
    },
    tripDestination: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    locationText: {
        fontSize: 12,
        color: '#7D848D',
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        backgroundColor: '#FFF9E6',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1B1E28',
    },
    tripFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    dateText: {
        fontSize: 12,
        color: '#7D848D',
    },
    statusBadge: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 11,
        fontWeight: '600',
        color: '#4CAF50',
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
