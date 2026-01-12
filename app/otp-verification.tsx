import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function OTPVerificationScreen() {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];

    const handleOtpChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs[index - 1].current?.focus();
        }
    };

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
                        <Ionicons name="mail-outline" size={64} color="#FF6B35" />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>OTP Verification</Text>
                    <Text style={styles.subtitle}>
                        We have sent a verification code to{'\n'}
                        <Text style={styles.email}>your***@email.com</Text>
                    </Text>
                </View>

                {/* OTP Input */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={[
                                styles.otpInput,
                                digit && styles.otpInputFilled
                            ]}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                {/* Resend Code */}
                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>Didn't receive the code? </Text>
                    <TouchableOpacity>
                        <Text style={styles.resendLink}>Resend</Text>
                    </TouchableOpacity>
                </View>

                {/* Verify Button */}
                <TouchableOpacity
                    style={styles.verifyButton}
                    onPress={() => router.push('/reset-password')}
                >
                    <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>
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
    email: {
        color: '#1B1E28',
        fontWeight: '600',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
        gap: 12,
    },
    otpInput: {
        flex: 1,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#F7F7F9',
        fontSize: 24,
        fontWeight: '700',
        color: '#1B1E28',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    otpInputFilled: {
        borderColor: '#FF6B35',
        backgroundColor: '#FFE5E5',
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    resendText: {
        fontSize: 14,
        color: '#7D848D',
    },
    resendLink: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF6B35',
    },
    verifyButton: {
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    verifyButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
