import { Text, View } from 'react-native';
// import { MenuProvider } from 'react-native-popup-menu';
import styles from '../styles/general_style.js';

export default function HomeScreen({ }) {
    return (
        <View>
            <View style={StyleSheet.container}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Home</Text>
                </View>
            </View>
        </View>
    );
}