import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const galleryImages = [
    require('../assets/destinations/destination1.png'),
    require('../assets/destinations/destination2.png'),
    require('../assets/destinations/d1.png'),
    require('../assets/destinations/d2.png'),
    require('../assets/destinations/d3.png'),
];

export default function DestinationDetailsScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Hero Image */}
                <View style={styles.heroContainer}>
                    <Image
                        source={require('../assets/destinations/destination1.png')}
                        style={styles.heroImage}
                    />
                    {/* Header Overlay */}
                    <View style={styles.headerOverlay}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => router.back()}
                        >
                            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Details</Text>
                        <TouchableOpacity style={styles.bookmarkButton}>
                            <Ionicons name="bookmark-outline" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Content Card */}
                <View style={styles.contentCard}>
                    {/* Title Section */}
                    <View style={styles.titleSection}>
                        <View style={styles.titleLeft}>
                            <Text style={styles.destinationName}>Niladri Reservoir</Text>
                            <Text style={styles.destinationLocation}>Tekergat, Sunamgnj</Text>
                        </View>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../assets/images/user-avatar.png')}
                                style={styles.avatar}
                            />
                        </View>
                    </View>

                    {/* Info Row */}
                    <View style={styles.infoRow}>
                        <View style={styles.locationInfo}>
                            <Ionicons name="location-outline" size={16} color="#7D848D" />
                            <Text style={styles.locationText}>Tekergat</Text>
                        </View>
                        <View style={styles.ratingInfo}>
                            <Ionicons name="star" size={16} color="#FFD700" />
                            <Text style={styles.ratingText}>4.7 </Text>
                            <Text style={styles.reviewCount}>(2498)</Text>
                        </View>
                        <Text style={styles.priceText}>$59/Person</Text>
                    </View>

                    {/* Gallery */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.gallery}
                        contentContainerStyle={styles.galleryContent}
                    >
                        {galleryImages.map((image, index) => (
                            <View key={index} style={styles.galleryImageContainer}>
                                <Image
                                    source={image}
                                    style={styles.galleryImage}
                                />
                                {index === galleryImages.length - 1 && (
                                    <View style={styles.moreOverlay}>
                                        <Text style={styles.moreText}>+16</Text>
                                    </View>
                                )}
                            </View>
                        ))}
                    </ScrollView>

                    {/* About Section */}
                    <View style={styles.aboutSection}>
                        <Text style={styles.aboutTitle}>About Destination</Text>
                        <Text style={styles.aboutText}>
                            You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended Hotel rooms, Transportation, Have you ever been on holiday to the Greek ETC...{' '}
                            <Text style={styles.readMore}>Read More</Text>
                        </Text>
                    </View>

                    {/* Book Now Button */}
                    <TouchableOpacity
                        style={styles.bookButton}
                        onPress={() => router.push('/booking')}
                    >
                        <Text style={styles.bookButtonText}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24BAEC',
    },
    scrollView: {
        flex: 1,
    },
    heroContainer: {
        position: 'relative',
        height: 450,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
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
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    bookmarkButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentCard: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: -32,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    titleLeft: {
        flex: 1,
    },
    destinationName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 4,
    },
    destinationLocation: {
        fontSize: 14,
        color: '#7D848D',
    },
    avatarContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#C8F5D9',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        gap: 16,
    },
    locationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationText: {
        fontSize: 14,
        color: '#7D848D',
    },
    ratingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
    },
    reviewCount: {
        fontSize: 14,
        color: '#7D848D',
    },
    priceText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#24BAEC',
        marginLeft: 'auto',
    },
    gallery: {
        marginBottom: 24,
    },
    galleryContent: {
        gap: 12,
    },
    galleryImageContainer: {
        position: 'relative',
        width: 80,
        height: 80,
        borderRadius: 16,
        overflow: 'hidden',
    },
    galleryImage: {
        width: '100%',
        height: '100%',
    },
    moreOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    aboutSection: {
        marginBottom: 32,
    },
    aboutTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 12,
    },
    aboutText: {
        fontSize: 14,
        color: '#7D848D',
        lineHeight: 22,
    },
    readMore: {
        color: '#FF6B35',
        fontWeight: '600',
    },
    bookButton: {
        backgroundColor: '#24BAEC',
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
    },
    bookButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
