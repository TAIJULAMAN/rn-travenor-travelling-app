import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingScreen() {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState(1);
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const isDateSelected = (day: number) => {
        if (!selectedDate) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
        );
    };

    const handleDateSelect = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        setSelectedDate(date);
    };

    const goToPreviousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const goToNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
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
                <Text style={styles.headerTitle}>Select Date</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Calendar */}
                <View style={styles.calendarContainer}>
                    {/* Month Navigation */}
                    <View style={styles.monthHeader}>
                        <TouchableOpacity onPress={goToPreviousMonth}>
                            <Ionicons name="chevron-back" size={24} color="#1B1E28" />
                        </TouchableOpacity>
                        <Text style={styles.monthText}>
                            {MONTHS[currentMonth]} {currentYear}
                        </Text>
                        <TouchableOpacity onPress={goToNextMonth}>
                            <Ionicons name="chevron-forward" size={24} color="#1B1E28" />
                        </TouchableOpacity>
                    </View>

                    {/* Day Headers */}
                    <View style={styles.dayHeaders}>
                        {DAYS.map((day) => (
                            <Text key={day} style={styles.dayHeader}>
                                {day}
                            </Text>
                        ))}
                    </View>

                    {/* Calendar Grid */}
                    <View style={styles.calendarGrid}>
                        {generateCalendarDays().map((day, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.dayCell,
                                    day && isDateSelected(day) ? styles.selectedDay : undefined,
                                ]}
                                onPress={() => day && handleDateSelect(day)}
                                disabled={!day}
                            >
                                {day && (
                                    <Text
                                        style={[
                                            styles.dayText,
                                            isDateSelected(day) && styles.selectedDayText,
                                        ]}
                                    >
                                        {day}
                                    </Text>
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Guests Selection */}
                <View style={styles.guestsContainer}>
                    <Text style={styles.sectionTitle}>Number of Guests</Text>
                    <View style={styles.guestsControl}>
                        <TouchableOpacity
                            style={styles.guestButton}
                            onPress={() => setGuests(Math.max(1, guests - 1))}
                        >
                            <Ionicons name="remove" size={20} color="#1B1E28" />
                        </TouchableOpacity>
                        <Text style={styles.guestsText}>{guests}</Text>
                        <TouchableOpacity
                            style={styles.guestButton}
                            onPress={() => setGuests(guests + 1)}
                        >
                            <Ionicons name="add" size={20} color="#1B1E28" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Booking Summary */}
                <View style={styles.summaryContainer}>
                    <Text style={styles.sectionTitle}>Booking Summary</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Destination</Text>
                        <Text style={styles.summaryValue}>Niladri Reservoir</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Date</Text>
                        <Text style={styles.summaryValue}>
                            {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}
                        </Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Guests</Text>
                        <Text style={styles.summaryValue}>{guests} Person(s)</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.summaryRow}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>${59 * guests}</Text>
                    </View>
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    style={[styles.continueButton, !selectedDate && styles.disabledButton]}
                    disabled={!selectedDate}
                    onPress={() => router.push('/checkout')}
                >
                    <Text style={styles.continueButtonText}>Continue to Checkout</Text>
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
    calendarContainer: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    monthHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    monthText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1B1E28',
    },
    dayHeaders: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    dayHeader: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '600',
        color: '#7D848D',
    },
    calendarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dayCell: {
        width: `${100 / 7}%`,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    selectedDay: {
        backgroundColor: '#FF6B35',
        borderRadius: 8,
    },
    dayText: {
        fontSize: 14,
        color: '#1B1E28',
    },
    selectedDayText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    guestsContainer: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 16,
    },
    guestsControl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
    },
    guestButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    guestsText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1B1E28',
        minWidth: 40,
        textAlign: 'center',
    },
    summaryContainer: {
        paddingHorizontal: 20,
        marginBottom: 32,
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
        marginVertical: 16,
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
    continueButton: {
        backgroundColor: '#FF6B35',
        marginHorizontal: 20,
        marginBottom: 40,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#E5E5E5',
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
