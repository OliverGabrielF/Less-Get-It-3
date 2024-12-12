import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import styles from '../styles/cinema_style.js';

const Cinema = ({ navigation, id, name, city, phone, website, description }) => {
  return (
    <Pressable 
      style={styles.pressable} 
      onPress = {() => navigation.navigate("Cinema", { cinemaId: id })}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Cinema;
