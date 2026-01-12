import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const menuItems = [
    {
        id: 1,
        title: 'Edit Profile',
        icon: 'person-outline',
        route: '/profile-edit',
    },
    {
        id: 2,
        title: 'Bookmarked',
        icon: 'bookmark-outline',
        route: '/bookmarked',
    },
    {
        id: 3,
        title: 'Previous Trips',
        icon: 'airplane-outline',
        route: '/previous-trips',
    },
    {
        id: 4,
        title: 'Logout',
        icon: 'log-out-outline',
        route: '/logout',
    },
];

export default function ProfileScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Ionicons name="chevron-back" size={24} color="#1B1E28" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Profile</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Ionicons name="create-outline" size={24} color="#24BAEC" />
                    </TouchableOpacity>
                </View>

                {/* Profile Info */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('../../assets/profile.png')}
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.userName}>Leonardo</Text>
                    <Text style={styles.userEmail}>leonardo@gmail.com</Text>
                </View>

                {/* Stats Section */}
                <View style={styles.statsSection}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Reward Points</Text>
                        <Text style={styles.statValue}>360</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Travel Trips</Text>
                        <Text style={styles.statValue}>238</Text>
                    </View>
                    <View style={styles.statDivider} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Bucket List</Text>
                        <Text style={styles.statValue}>473</Text>
                    </View>
                </View>

                {/* Menu Items */}
                <View style={styles.menuSection}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.menuItem,
                                index === menuItems.length - 1 && styles.menuItemLast
                            ]}
                            onPress={() => {
                                if (item.title === 'Logout') {
                                    // Show logout confirmation
                                    console.log('Logout');
                                } else {
                                    router.push(item.route as any);
                                }
                            }}
                        >
                            <View style={styles.menuItemLeft}>
                                <Ionicons name={item.icon as any} size={24} color="#7D848D" />
                                <Text style={styles.menuItemText}>{item.title}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#7D848D" />
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
    scrollView: {
        flex: 1,
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
    editButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileSection: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userName: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: '#7D848D',
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 24,
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statLabel: {
        fontSize: 12,
        color: '#1B1E28',
        marginBottom: 8,
        textAlign: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FF6B35',
    },
    statDivider: {
        width: 1,
        height: 40,
        backgroundColor: '#E5E5E5',
    },
    menuSection: {
        marginTop: 32,
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F9',
    },
    menuItemLast: {
        borderBottomWidth: 0,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1B1E28',
    },
});
