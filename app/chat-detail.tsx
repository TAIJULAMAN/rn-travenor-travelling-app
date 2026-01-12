import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const messages = [
    {
        id: 1,
        text: 'Hello!',
        time: '9:24',
        isSent: true,
        isRead: true,
    },
    {
        id: 2,
        text: 'Thank you very mouch for your traveling, we really like the apartments. we will stay here for anather 5 days...',
        time: '9:30',
        isSent: true,
        isRead: true,
    },
    {
        id: 3,
        text: 'Hello!',
        time: '9:34',
        isSent: false,
        avatar: require('../assets/avatar/a3.png'),
    },
    {
        id: 4,
        text: 'I\'m very glad you like it👍',
        time: '9:35',
        isSent: false,
        avatar: require('../assets/avatar/a3.png'),
    },
    {
        id: 5,
        text: 'We are arriving today at 01:45, will someone be at home?',
        time: '9:37',
        isSent: false,
        avatar: require('../assets/avatar/a2.png'),
    },
    {
        id: 6,
        text: 'I will be at home',
        time: '9:39',
        isSent: true,
        isRead: true,
    },
];

export default function ChatDetailScreen() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="chevron-back" size={24} color="#1B1E28" />
                </TouchableOpacity>
                <View style={styles.headerCenter}>
                    <Text style={styles.headerName}>Sajib Rahman</Text>
                    <Text style={styles.headerStatus}>Active Now</Text>
                </View>
                <TouchableOpacity style={styles.callButton}>
                    <Ionicons name="call-outline" size={24} color="#1B1E28" />
                </TouchableOpacity>
            </View>

            {/* Messages */}
            <ScrollView
                style={styles.messagesContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Date Separator */}
                <View style={styles.dateSeparator}>
                    <Text style={styles.dateText}>Today</Text>
                </View>

                {/* Message List */}
                {messages.map((message) => (
                    <View
                        key={message.id}
                        style={[
                            styles.messageRow,
                            message.isSent ? styles.sentMessageRow : styles.receivedMessageRow
                        ]}
                    >
                        {!message.isSent && message.avatar && (
                            <Image
                                source={message.avatar}
                                style={styles.messageAvatar}
                            />
                        )}
                        <View
                            style={[
                                styles.messageBubble,
                                message.isSent ? styles.sentBubble : styles.receivedBubble
                            ]}
                        >
                            <Text
                                style={[
                                    styles.messageText,
                                    message.isSent && styles.sentMessageText
                                ]}
                            >
                                {message.text}
                            </Text>
                            <View style={styles.messageFooter}>
                                <Text
                                    style={[
                                        styles.messageTime,
                                        message.isSent && styles.sentMessageTime
                                    ]}
                                >
                                    {message.time}
                                </Text>
                                {message.isSent && (
                                    <Ionicons
                                        name="checkmark-done"
                                        size={16}
                                        color={message.isRead ? "#4CAF50" : "#FFFFFF"}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Input Bar */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type you message"
                    placeholderTextColor="#7D848D"
                />
                <TouchableOpacity style={styles.attachButton}>
                    <Ionicons name="attach-outline" size={24} color="#7D848D" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.micButton}>
                    <Ionicons name="mic" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F7F7F9',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1B1E28',
    },
    headerStatus: {
        fontSize: 12,
        color: '#4CAF50',
        marginTop: 2,
    },
    callButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messagesContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    dateSeparator: {
        alignItems: 'center',
        marginVertical: 20,
    },
    dateText: {
        fontSize: 12,
        color: '#7D848D',
        backgroundColor: '#F7F7F9',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 12,
    },
    messageRow: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'flex-end',
    },
    sentMessageRow: {
        justifyContent: 'flex-end',
    },
    receivedMessageRow: {
        justifyContent: 'flex-start',
    },
    messageAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    messageBubble: {
        maxWidth: '70%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
    },
    sentBubble: {
        backgroundColor: '#E3F2FD',
        borderBottomRightRadius: 4,
    },
    receivedBubble: {
        backgroundColor: '#F7F7F9',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        fontSize: 14,
        color: '#1B1E28',
        lineHeight: 20,
        marginBottom: 4,
    },
    sentMessageText: {
        color: '#1B1E28',
    },
    messageFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 4,
    },
    messageTime: {
        fontSize: 11,
        color: '#7D848D',
    },
    sentMessageTime: {
        color: '#7D848D',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#F7F7F9',
        gap: 12,
    },
    input: {
        flex: 1,
        backgroundColor: '#F7F7F9',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: '#1B1E28',
    },
    attachButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    micButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#24BAEC',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
