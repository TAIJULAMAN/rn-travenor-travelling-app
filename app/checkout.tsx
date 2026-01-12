import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CheckoutScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');

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
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Contact Information */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Information</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            placeholderTextColor="#7D848D"
                            value={fullName}
                            onChangeText={setFullName}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#7D848D"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone number"
                            placeholderTextColor="#7D848D"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                {/* Special Requests */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Special Requests</Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Any special requests or requirements?"
                        placeholderTextColor="#7D848D"
                        value={specialRequests}
                        onChangeText={setSpecialRequests}
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                {/* Booking Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Booking Details</Text>
                    <View style={styles.detailCard}>
                        <View style={styles.detailRow}>
                            <Ionicons name="location-outline" size={20} color="#FF6B35" />
                            <View style={styles.detailContent}>
                                <Text style={styles.detailLabel}>Destination</Text>
                                <Text style={styles.detailValue}>Niladri Reservoir</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <Ionicons name="calendar-outline" size={20} color="#FF6B35" />
                            <View style={styles.detailContent}>
                                <Text style={styles.detailLabel}>Date</Text>
                                <Text style={styles.detailValue}>Jan 15, 2024</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <Ionicons name="people-outline" size={20} color="#FF6B35" />
                            <View style={styles.detailContent}>
                                <Text style={styles.detailLabel}>Guests</Text>
                                <Text style={styles.detailValue}>2 Persons</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Price Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Price Summary</Text>
                    <View style={styles.priceCard}>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Price per person</Text>
                            <Text style={styles.priceValue}>$59</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Number of guests</Text>
                            <Text style={styles.priceValue}>× 2</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Service fee</Text>
                            <Text style={styles.priceValue}>$10</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.priceRow}>
                            <Text style={styles.totalLabel}>Total</Text>
                            <Text style={styles.totalValue}>$128</Text>
                        </View>
                    </View>
                </View>

                {/* Proceed Button */}
                <TouchableOpacity
                    style={styles.proceedButton}
                    onPress={() => router.push('/payment')}
                >
                    <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
                </TouchableOpacity>
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
    section: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 16,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F7F7F9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1B1E28',
    },
    textArea: {
        backgroundColor: '#F7F7F9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1B1E28',
        minHeight: 100,
    },
    detailCard: {
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        padding: 16,
        gap: 16,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    detailContent: {
        flex: 1,
    },
    detailLabel: {
        fontSize: 12,
        color: '#7D848D',
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
    },
    priceCard: {
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        padding: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    priceLabel: {
        fontSize: 14,
        color: '#7D848D',
    },
    priceValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
    },
    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: 8,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1B1E28',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FF6B35',
    },
    proceedButton: {
        backgroundColor: '#FF6B35',
        marginHorizontal: 20,
        marginBottom: 40,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    proceedButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
