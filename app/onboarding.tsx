import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native';
import Onboarding1 from '../components/Onboarding1';
import Onboarding2 from '../components/Onboarding2';
import Onboarding3 from '../components/Onboarding3';

const { width, height } = Dimensions.get('window');

const slides = [
    { id: '1', component: <Onboarding1 /> },
    { id: '2', component: <Onboarding2 /> },
    { id: '3', component: <Onboarding3 /> },
];

export default function OnboardingScreen() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList>(null);

    const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems && viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollToNext = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
        } else {
            router.replace('/home');
        }
    };

    const handleSkip = () => {
        router.replace('/home');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            <FlatList
                data={slides}
                renderItem={({ item }) => item.component}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                getItemLayout={(data, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />

            <View style={styles.footer}>
                {/* Paginator */}
                <View style={styles.paginatorContainer}>
                    {slides.map((_, i) => {
                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 24, 10], // Active dot is wider
                            extrapolate: 'clamp',
                        });

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        });

                        const backgroundColor = scrollX.interpolate({
                            inputRange,
                            outputRange: ['#CAEAFF', '#24BAEC', '#CAEAFF'],
                            extrapolate: 'clamp',
                        });

                        return (
                            <Animated.View
                                key={i.toString()}
                                style={[styles.dot, { width: dotWidth, opacity, backgroundColor }]}
                            />
                        );
                    })}
                </View>

                <TouchableOpacity onPress={scrollToNext} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
    },
    skipText: {
        color: '#CAEAFF', // Light blue from design
        fontSize: 18,
        fontWeight: '500',
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
    },
    dot: {
        height: 6,
        borderRadius: 3,
        marginHorizontal: 4,
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
