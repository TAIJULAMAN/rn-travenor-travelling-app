import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ResetPasswordScreen() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                        <Ionicons name="shield-checkmark-outline" size={64} color="#FF6B35" />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.subtitle}>
                        Your new password must be different from previously used passwords
                    </Text>
                </View>

                {/* Form */}
                <View style={styles.formContainer}>
                    {/* New Password Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>New Password</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter new password"
                                placeholderTextColor="#7D848D"
                                value={newPassword}
                                onChangeText={setNewPassword}
                                secureTextEntry={!showNewPassword}
                            />
                            <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                                <Ionicons
                                    name={showNewPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color="#7D848D"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Confirm Password Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm new password"
                                placeholderTextColor="#7D848D"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Ionicons
                                    name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color="#7D848D"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Password Requirements */}
                    <View style={styles.requirementsContainer}>
                        <Text style={styles.requirementsTitle}>Password must contain:</Text>
                        <View style={styles.requirementItem}>
                            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                            <Text style={styles.requirementText}>At least 8 characters</Text>
                        </View>
                        <View style={styles.requirementItem}>
                            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                            <Text style={styles.requirementText}>At least one uppercase letter</Text>
                        </View>
                        <View style={styles.requirementItem}>
                            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                            <Text style={styles.requirementText}>At least one number</Text>
                        </View>
                    </View>

                    {/* Reset Button */}
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={() => {
                            // Show success and navigate to sign in
                            router.push('/sign-in');
                        }}
                    >
                        <Text style={styles.resetButtonText}>Reset Password</Text>
                    </TouchableOpacity>
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
    requirementsContainer: {
        backgroundColor: '#F7F7F9',
        borderRadius: 12,
        padding: 16,
        marginBottom: 32,
    },
    requirementsTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1B1E28',
        marginBottom: 12,
    },
    requirementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    requirementText: {
        fontSize: 14,
        color: '#7D848D',
    },
    resetButton: {
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    resetButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});
