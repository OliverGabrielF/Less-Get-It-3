import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/header_style.js';

const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.back_home} onPress={() => navigation.goBack("Home")}>
                <Text style={styles.buttonTxt}>{"< BACK"}</Text>
            </TouchableOpacity>
            <Text style={styles.header_text}>Dr. Cinema</Text>
        </View>
    );
}     

export default Header;