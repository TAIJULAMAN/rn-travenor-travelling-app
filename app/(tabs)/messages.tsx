import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const chats = [
    {
        id: 1,
        name: 'Sajib Rahman',
        message: 'Hi, John! 👋 How are you doing?',
        time: '09:24',
        avatar: require('../../assets/avatar/a1.png'),
        online: true,
        unread: false,
        isTyping: false,
    },
    {
        id: 2,
        name: 'Adom Shafi',
        message: 'Typing...',
        time: '08:42',
        avatar: require('../../assets/avatar/a2.png'),
        online: false,
        unread: false,
        isTyping: true,
    },
    {
        id: 3,
        name: 'HR Rumen',
        message: 'You: Cool! 😊 Let\'s meet at 18:00 near the traveling!',
        time: 'Yesterday',
        avatar: require('../../assets/avatar/a3.png'),
        online: true,
        unread: false,
        isTyping: false,
    },
    {
        id: 4,
        name: 'Anjelina',
        message: 'You: Hey, will you come to the party on Saturday?',
        time: '07:56',
        avatar: require('../../assets/avatar/a4.png'),
        online: false,
        unread: true,
        isTyping: false,
    },
    {
        id: 5,
        name: 'Alexa Shorna',
        message: 'Thank you for coming! Your or...',
        time: '05:52',
        avatar: require('../../assets/avatar/a5.png'),
        online: true,
        unread: false,
        isTyping: false,
    },
];

export default function MessagesScreen() {
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
                <Text style={styles.headerTitle}>Messages</Text>
                <TouchableOpacity style={styles.moreButton}>
                    <Ionicons name="ellipsis-vertical" size={24} color="#1B1E28" />
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Title and Compose */}
                <View style={styles.titleSection}>
                    <Text style={styles.pageTitle}>Messages</Text>
                    <TouchableOpacity style={styles.composeButton}>
                        <Ionicons name="create-outline" size={24} color="#1B1E28" />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#7D848D" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for chats & messages"
                        placeholderTextColor="#7D848D"
                    />
                </View>

                {/* Chat List */}
                <View style={styles.chatList}>
                    {chats.map((chat) => (
                        <TouchableOpacity
                            key={chat.id}
                            style={styles.chatItem}
                            onPress={() => router.push('/chat-detail')}
                        >
                            <View style={styles.avatarContainer}>
                                <Image
                                    source={chat.avatar}
                                    style={styles.avatar}
                                />
                                {chat.online && <View style={styles.onlineIndicator} />}
                            </View>
                            <View style={styles.chatContent}>
                                <View style={styles.chatHeader}>
                                    <Text style={styles.chatName}>{chat.name}</Text>
                                    <View style={styles.timeContainer}>
                                        {!chat.isTyping && chat.unread && (
                                            <Ionicons name="checkmark" size={16} color="#7D848D" />
                                        )}
                                        {!chat.isTyping && !chat.unread && (
                                            <Ionicons name="checkmark-done" size={16} color="#4CAF50" />
                                        )}
                                        <Text style={styles.chatTime}>{chat.time}</Text>
                                    </View>
                                </View>
                                <Text
                                    style={[
                                        styles.chatMessage,
                                        chat.isTyping && styles.typingMessage
                                    ]}
                                    numberOfLines={2}
                                >
                                    {chat.message}
                                </Text>
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
    moreButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1B1E28',
    },
    composeButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
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
    chatList: {
        paddingHorizontal: 20,
    },
    chatItem: {
        flexDirection: 'row',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F9',
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    chatContent: {
        flex: 1,
        justifyContent: 'center',
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    chatName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1B1E28',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    chatTime: {
        fontSize: 12,
        color: '#7D848D',
    },
    chatMessage: {
        fontSize: 14,
        color: '#7D848D',
        lineHeight: 20,
    },
    typingMessage: {
        color: '#24BAEC',
        fontStyle: 'italic',
    },
});
