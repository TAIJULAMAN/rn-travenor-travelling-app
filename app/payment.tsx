import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PaymentScreen() {
    const router = useRouter();
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handlePayment = () => {
        // Simulate payment processing
        setShowSuccessModal(true);
    };

    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        // Navigate to home after closing modal
        router.push('/(tabs)/home');
    };

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
                <Text style={styles.headerTitle}>Payment</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Payment Method Selection */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Payment Method</Text>
                    <View style={styles.paymentMethods}>
                        <TouchableOpacity style={[styles.methodCard, styles.selectedMethod]}>
                            <Ionicons name="card-outline" size={24} color="#FF6B35" />
                            <Text style={styles.methodText}>Credit Card</Text>
                            <View style={styles.radioOuter}>
                                <View style={styles.radioInner} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.methodCard}>
                            <Ionicons name="logo-paypal" size={24} color="#7D848D" />
                            <Text style={[styles.methodText, styles.inactiveText]}>PayPal</Text>
                            <View style={styles.radioOuter} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.methodCard}>
                            <Ionicons name="wallet-outline" size={24} color="#7D848D" />
                            <Text style={[styles.methodText, styles.inactiveText]}>Google Pay</Text>
                            <View style={styles.radioOuter} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Card Details */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Card Details</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Card Number</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="card-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="1234 5678 9012 3456"
                                placeholderTextColor="#7D848D"
                                value={cardNumber}
                                onChangeText={setCardNumber}
                                keyboardType="number-pad"
                                maxLength={19}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Cardholder Name</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="person-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="John Doe"
                                placeholderTextColor="#7D848D"
                                value={cardName}
                                onChangeText={setCardName}
                            />
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>Expiry Date</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="calendar-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="MM/YY"
                                    placeholderTextColor="#7D848D"
                                    value={expiryDate}
                                    onChangeText={setExpiryDate}
                                    maxLength={5}
                                />
                            </View>
                        </View>

                        <View style={[styles.inputGroup, styles.halfWidth]}>
                            <Text style={styles.label}>CVV</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="123"
                                    placeholderTextColor="#7D848D"
                                    value={cvv}
                                    onChangeText={setCvv}
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    secureTextEntry
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Order Summary */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order Summary</Text>
                    <View style={styles.summaryCard}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Niladri Reservoir</Text>
                            <Text style={styles.summaryValue}>$118</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Service fee</Text>
                            <Text style={styles.summaryValue}>$10</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryRow}>
                            <Text style={styles.totalLabel}>Total Amount</Text>
                            <Text style={styles.totalValue}>$128</Text>
                        </View>
                    </View>
                </View>

                {/* Pay Button */}
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={handlePayment}
                >
                    <Text style={styles.payButtonText}>Pay Now</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Success Modal */}
            <Modal
                visible={showSuccessModal}
                transparent
                animationType="fade"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.successIcon}>
                            <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
                        </View>
                        <Text style={styles.successTitle}>Payment Successful!</Text>
                        <Text style={styles.successMessage}>
                            Your booking has been confirmed. Check your email for details.
                        </Text>
                        <TouchableOpacity
                            style={styles.doneButton}
                            onPress={handleSuccessClose}
                        >
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    paymentMethods: {
        gap: 12,
    },
    methodCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        borderRadius: 12,
        padding: 16,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedMethod: {
        borderColor: '#FF6B35',
        backgroundColor: '#FFF5F2',
    },
    methodText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
    },
    inactiveText: {
        color: '#7D848D',
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF6B35',
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    inputIcon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1B1E28',
    },
    row: {
        flexDirection: 'row',
        gap: 12,
    },
    halfWidth: {
        flex: 1,
    },
    summaryCard: {
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        padding: 16,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#7D848D',
    },
    summaryValue: {
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
    payButton: {
        backgroundColor: '#FF6B35',
        marginHorizontal: 20,
        marginBottom: 40,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    payButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 32,
        alignItems: 'center',
        width: '100%',
        maxWidth: 400,
    },
    successIcon: {
        marginBottom: 24,
    },
    successTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 12,
        textAlign: 'center',
    },
    successMessage: {
        fontSize: 14,
        color: '#7D848D',
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 22,
    },
    doneButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },
    doneButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
