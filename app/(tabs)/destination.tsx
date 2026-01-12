import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const allDestinations = [
    {
        id: 1,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        image: require('../../assets/destinations/destination1.png'),
        visitors: 50,
        category: 'Popular',
    },
    {
        id: 2,
        name: 'Darma Reservoir',
        location: 'Darma, Sunamgnj',
        rating: 4.8,
        image: require('../../assets/destinations/destination2.png'),
        visitors: 45,
        category: 'Popular',
    },
    {
        id: 3,
        name: 'High Rech Park',
        location: 'Zero Point, Sylhet',
        rating: 4.7,
        image: require('../../assets/destinations/d1.png'),
        visitors: 50,
        category: 'Recommended',
    },
    {
        id: 4,
        name: 'Casa Las Flores',
        location: 'Casa Las Flores, Sylhet',
        rating: 4.7,
        image: require('../../assets/destinations/d3.png'),
        visitors: 50,
        category: 'Most Viewed',
    },
    {
        id: 5,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        rating: 4.7,
        image: require('../../assets/destinations/destination1.png'),
        visitors: 50,
        category: 'Popular',
    },
    {
        id: 6,
        name: 'Darma Reservoir',
        location: 'Darma, Sunamgnj',
        rating: 4.8,
        image: require('../../assets/destinations/destination2.png'),
        visitors: 45,
        category: 'Recommended',
    }
];

const categories = ['All', 'Popular', 'Recommended', 'Most Viewed'];

export default function DestinationScreen() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDestinations = allDestinations.filter(dest => {
        const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
        const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Destinations</Text>
                    <Text style={styles.headerSubtitle}>Explore amazing places</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#7D848D" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search destinations..."
                        placeholderTextColor="#7D848D"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchQuery('')}>
                            <Ionicons name="close-circle" size={20} color="#7D848D" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Category Tabs */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoryScroll}
                    contentContainerStyle={styles.categoryScrollContent}
                >
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.categoryTab,
                                selectedCategory === category && styles.categoryTabActive
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text style={[
                                styles.categoryText,
                                selectedCategory === category && styles.categoryTextActive
                            ]}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Results Count */}
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsText}>
                        {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
                    </Text>
                </View>

                {/* Destinations Grid */}
                <View style={styles.gridContainer}>
                    {filteredDestinations.map((destination) => (
                        <TouchableOpacity
                            key={destination.id}
                            style={styles.destinationCard}
                            onPress={() => router.push('/destination-details')}
                        >
                            <Image
                                source={destination.image}
                                style={styles.destinationImage}
                            />
                            <View style={styles.cardContent}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.destinationName} numberOfLines={1}>
                                        {destination.name}
                                    </Text>
                                    <View style={styles.ratingContainer}>
                                        <Ionicons name="star" size={14} color="#FFD700" />
                                        <Text style={styles.ratingText}>{destination.rating}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardFooter}>
                                    <View style={styles.locationContainer}>
                                        <Ionicons name="location-outline" size={12} color="#7D848D" />
                                        <Text style={styles.locationText} numberOfLines={1}>
                                            {destination.location}
                                        </Text>
                                    </View>
                                    <View style={styles.visitorsContainer}>
                                        <View style={styles.avatarGroup}>
                                            <Image
                                                source={require('../../assets/destinations/destination1.png')}
                                                style={[styles.visitorAvatar, styles.visitorAvatar1]}
                                            />
                                            <Image
                                                source={require('../../assets/destinations/destination2.png')}
                                                style={[styles.visitorAvatar, styles.visitorAvatar2]}
                                            />
                                        </View>
                                        <Text style={styles.visitorsText}>+{destination.visitors}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Empty State */}
                {filteredDestinations.length === 0 && (
                    <View style={styles.emptyState}>
                        <Ionicons name="location-outline" size={64} color="#E5E5E5" />
                        <Text style={styles.emptyStateText}>No destinations found</Text>
                        <Text style={styles.emptyStateSubtext}>Try adjusting your search or filters</Text>
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
    scrollView: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#7D848D',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        marginHorizontal: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1B1E28',
    },
    categoryScroll: {
        paddingLeft: 20,
        marginBottom: 20,
    },
    categoryScrollContent: {
        paddingRight: 20,
        gap: 12,
    },
    categoryTab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#F7F7F9',
    },
    categoryTabActive: {
        backgroundColor: '#FF6B35',
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#7D848D',
    },
    categoryTextActive: {
        color: '#FFFFFF',
    },
    resultsContainer: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    resultsText: {
        fontSize: 14,
        color: '#7D848D',
        fontWeight: '500',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
        gap: 16,
        paddingBottom: 20,
    },
    destinationCard: {
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
    destinationImage: {
        width: '100%',
        height: 160,
    },
    cardContent: {
        padding: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    destinationName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
        flex: 1,
        marginRight: 4,
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
    cardFooter: {
        flexDirection: 'column',
        gap: 6,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    locationText: {
        fontSize: 11,
        color: '#7D848D',
        flex: 1,
    },
    visitorsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    avatarGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    visitorAvatar: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    visitorAvatar1: {
        zIndex: 2,
    },
    visitorAvatar2: {
        zIndex: 1,
        marginLeft: -6,
    },
    visitorsText: {
        fontSize: 10,
        color: '#7D848D',
        fontWeight: '500',
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
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
    },
});
