import { useRouter } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const Onboarding2 = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.replace('/home')} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <Image
                source={require('../assets/onboarding/a2.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    It's a big world out there go{' '}
                    <Text style={styles.highlight}>explore</Text>
                </Text>
                <Text style={styles.description}>
                    To get the best of your adventure you just need to leave and go where you like. we are waiting for you
                </Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.paginatorContainer}>
                    <View style={styles.dot} />
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                </View>

                <TouchableOpacity onPress={() => router.push('/onboarding3')} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
    },
    skipText: {
        color: '#CAEAFF',
        fontSize: 18,
        fontWeight: '500',
    },
    image: {
        width: width,
        height: height * 0.6,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    textContainer: {
        paddingHorizontal: 40,
        marginTop: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        textAlign: 'center',
        color: '#1B1E28',
        marginBottom: 16,
        lineHeight: 36,
    },
    highlight: {
        color: '#FF7029',
    },
    description: {
        fontSize: 16,
        color: '#7D848D',
        textAlign: 'center',
        lineHeight: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    paginatorContainer: {
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
    },
    dot: {
        height: 6,
        width: 10,
        borderRadius: 3,
        marginHorizontal: 4,
        backgroundColor: '#CAEAFF',
    },
    activeDot: {
        width: 24,
        backgroundColor: '#24BAEC',
    },
    button: {
        backgroundColor: '#24BAEC',
        borderRadius: 12,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Onboarding2;
