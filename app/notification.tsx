import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notificationsData = [
    {
        id: 1,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Sun,12:40pm',
        avatar: require('../assets/avatar/a1.png'),
        backgroundColor: '#E3F2FD',
        category: 'Recent',
    },
    {
        id: 2,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Mon,11:50pm',
        avatar: require('../assets/avatar/a2.png'),
        backgroundColor: '#E1F5FE',
        category: 'Recent',
    },
    {
        id: 3,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Tue,10:56pm',
        avatar: require('../assets/avatar/a3.png'),
        backgroundColor: '#E8F5E9',
        category: 'Recent',
    },
    {
        id: 4,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Wed,12:40pm',
        avatar: require('../assets/avatar/a4.png'),
        backgroundColor: '#FFF3E0',
        category: 'Earlier',
    },
    {
        id: 5,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Fri,11:50pm',
        avatar: require('../assets/avatar/a5.png'),
        backgroundColor: '#FCE4EC',
        category: 'Earlier',
    },
    {
        id: 6,
        title: 'Super Offer',
        message: 'Get 60% off in our first booking',
        time: 'Sat,10:56pm',
        avatar: require('../assets/avatar/a6.png'),
        backgroundColor: '#F3E5F5',
        category: 'Archieved',
    },
];

const tabs = ['Recent', 'Earlier', 'Archieved'];

export default function NotificationScreen() {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState('Recent');

    const filteredNotifications = notificationsData.filter(
        notification => notification.category === selectedTab
    );

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
                <Text style={styles.headerTitle}>Notification</Text>
                <TouchableOpacity>
                    <Text style={styles.clearAllText}>Clear all</Text>
                </TouchableOpacity>
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={styles.tab}
                        onPress={() => setSelectedTab(tab)}
                    >
                        <Text style={[
                            styles.tabText,
                            selectedTab === tab && styles.tabTextActive
                        ]}>
                            {tab}
                        </Text>
                        {selectedTab === tab && <View style={styles.tabIndicator} />}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Notifications List */}
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {filteredNotifications.map((notification) => (
                    <TouchableOpacity
                        key={notification.id}
                        style={styles.notificationItem}
                    >
                        <View style={[
                            styles.avatarContainer,
                            { backgroundColor: notification.backgroundColor }
                        ]}>
                            <Image
                                source={notification.avatar}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.notificationContent}>
                            <View style={styles.notificationHeader}>
                                <Text style={styles.notificationTitle}>{notification.title}</Text>
                                <Text style={styles.notificationTime}>{notification.time}</Text>
                            </View>
                            <Text style={styles.notificationMessage}>{notification.message}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Empty State */}
                {filteredNotifications.length === 0 && (
                    <View style={styles.emptyState}>
                        <Ionicons name="notifications-outline" size={64} color="#E5E5E5" />
                        <Text style={styles.emptyStateText}>No notifications</Text>
                        <Text style={styles.emptyStateSubtext}>
                            You don't have any {selectedTab.toLowerCase()} notifications
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
    clearAllText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FF6B35',
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 40,
    },
    tab: {
        paddingBottom: 8,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7D848D',
    },
    tabTextActive: {
        color: '#FF6B35',
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: '#FF6B35',
    },
    scrollView: {
        flex: 1,
    },
    notificationItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: '#F7F7F9',
        marginBottom: 1,
    },
    avatarContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    notificationContent: {
        flex: 1,
        justifyContent: 'center',
    },
    notificationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
    },
    notificationTime: {
        fontSize: 12,
        color: '#7D848D',
    },
    notificationMessage: {
        fontSize: 14,
        color: '#7D848D',
        lineHeight: 20,
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
