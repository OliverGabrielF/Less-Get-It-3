import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import styles from '../styles/movie_style.js';

const Movie = ({ navigation, id, name, year, genres, description }) => {

  return (
    <Pressable 
      style={styles.pressable} 
      onPress = {() => navigation.navigate("Movie", { movieId: id })}
    >
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Movie;
