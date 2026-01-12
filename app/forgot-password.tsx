import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Header */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="chevron-back" size={24} color="#1B1E28" />
                </TouchableOpacity>

                {/* Illustration */}
                <View style={styles.illustrationContainer}>
                    <View style={styles.illustrationCircle}>
                        <Ionicons name="lock-closed-outline" size={64} color="#FF6B35" />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Forgot Password?</Text>
                    <Text style={styles.subtitle}>
                        Don't worry! It happens. Please enter the email address associated with your account.
                    </Text>
                </View>

                {/* Form */}
                <View style={styles.formContainer}>
                    {/* Email Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#7D848D" style={styles.inputIcon} />
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
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => router.push('/otp-verification')}
                    >
                        <Text style={styles.submitButtonText}>Send Code</Text>
                    </TouchableOpacity>

                    {/* Back to Sign In */}
                    <View style={styles.backToSignInContainer}>
                        <Text style={styles.backToSignInText}>Remember your password? </Text>
                        <TouchableOpacity onPress={() => router.push('/sign-in')}>
                            <Text style={styles.backToSignInLink}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 40,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    illustrationContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    illustrationCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#FFE5E5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#7D848D',
        textAlign: 'center',
        lineHeight: 24,
    },
    formContainer: {
        flex: 1,
    },
    inputGroup: {
        marginBottom: 32,
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
    submitButton: {
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 24,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    backToSignInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backToSignInText: {
        fontSize: 14,
        color: '#7D848D',
    },
    backToSignInLink: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF6B35',
    },
});
