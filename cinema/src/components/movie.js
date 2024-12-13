import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import styles from '../styles/movie_style.js';

const Movie = ({ navigation, id, name, thumbnail, releaseDate, genres, description }) => {

  const genre_names = genres.map((genre) => genre.Name).join(", ");

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
        <Text style={styles.genre}>{genre_names}</Text>
      </View>
    </Pressable>
  );
};

export default Movie;