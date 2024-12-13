import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import styles from '../styles/movie_style.js';

const Movie = ({ navigation, id, name, thumbnail, releaseDate, genres, description }) => {

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Movie", { movieId: id })}
    >
      <View style={styles.container}>
        <View style={styles.thumbnail_container}>
            <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.release_date}>{releaseDate}</Text>
      </View>
    </Pressable>
  );
};

export default Movie;