import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const searchPlaces = [
    {
        id: 1,
        name: 'Niladri Reservoir',
        location: 'Tekergat, Sunamgnj',
        price: 894,
        image: require('../../assets/destinations/destination1.png'),
    },
    {
        id: 2,
        name: 'Casa Las Tirtugas',
        location: 'Av Damero, Mexico',
        price: 894,
        image: require('../../assets/destinations/destination2.png'),
    },
    {
        id: 3,
        name: 'High Rech Park',
        location: 'Zero Point, Sylhet',
        price: 894,
        image: require('../../assets/destinations/d1.png'),
    },
    {
        id: 4,
        name: 'Casa Las Flores',
        location: 'Casa Las Flores, Sylhet',
        price: 894,
        image: require('../../assets/destinations/d3.png'),
    },
];

export default function SearchScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

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
                <Text style={styles.headerTitle}>Search</Text>
                <TouchableOpacity>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#7D848D" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Places"
                        placeholderTextColor="#7D848D"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity style={styles.voiceButton}>
                        <Ionicons name="mic-outline" size={20} color="#7D848D" />
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <Text style={styles.sectionTitle}>Search Places</Text>

                {/* Places Grid */}
                <View style={styles.gridContainer}>
                    {searchPlaces.map((place) => (
                        <TouchableOpacity
                            key={place.id}
                            style={styles.placeCard}
                        >
                            <Image
                                source={place.image}
                                style={styles.placeImage}
                            />
                            <View style={styles.cardContent}>
                                <Text style={styles.placeName}>{place.name}</Text>
                                <View style={styles.locationRow}>
                                    <Ionicons name="location-outline" size={12} color="#7D848D" />
                                    <Text style={styles.locationText}>{place.location}</Text>
                                </View>
                                <Text style={styles.priceText}>${place.price}/Person</Text>
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
    cancelText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FF6B35',
    },
    scrollView: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        marginHorizontal: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        marginBottom: 24,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#1B1E28',
    },
    voiceButton: {
        padding: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1B1E28',
        paddingHorizontal: 20,
        marginBottom: 20,
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
    placeImage: {
        width: '100%',
        height: 140,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
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
    priceText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#24BAEC',
    },
});
