import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUpScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

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

                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                </View>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Create Account</Text>
                    <Text style={styles.subtitle}>Fill in your details to get started</Text>
                </View>

                {/* Form */}
                <View style={styles.formContainer}>
                    {/* Full Name Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="person-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your full name"
                                placeholderTextColor="#7D848D"
                                value={fullName}
                                onChangeText={setFullName}
                            />
                        </View>
                    </View>

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

                    {/* Password Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#7D848D" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Create a password"
                                placeholderTextColor="#7D848D"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? "eye-outline" : "eye-off-outline"}
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
                                placeholder="Confirm your password"
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

                    {/* Terms and Conditions */}
                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAgreeTerms(!agreeTerms)}
                    >
                        <View style={[styles.checkbox, agreeTerms && styles.checkboxChecked]}>
                            {agreeTerms && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
                        </View>
                        <Text style={styles.checkboxText}>
                            I agree to the <Text style={styles.linkText}>Terms & Conditions</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>Or continue with</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login */}
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-google" size={24} color="#DB4437" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-facebook" size={24} color="#4267B2" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-apple" size={24} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    {/* Sign In Link */}
                    <View style={styles.signInContainer}>
                        <Text style={styles.signInText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => router.push('/sign-in')}>
                            <Text style={styles.signInLink}>Sign In</Text>
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
        marginBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    titleContainer: {
        marginBottom: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1B1E28',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#7D848D',
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#FF6B35',
        borderColor: '#FF6B35',
    },
    checkboxText: {
        fontSize: 14,
        color: '#7D848D',
    },
    linkText: {
        color: '#FF6B35',
        fontWeight: '600',
    },
    signUpButton: {
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 24,
    },
    signUpButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E5E5',
    },
    dividerText: {
        fontSize: 14,
        color: '#7D848D',
        marginHorizontal: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginBottom: 32,
    },
    socialButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        fontSize: 14,
        color: '#7D848D',
    },
    signInLink: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF6B35',
    },
});
