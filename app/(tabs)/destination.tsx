import { StyleSheet, Text, View } from 'react-native';

export default function DestinationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Destination Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B1E28',
    },
});
