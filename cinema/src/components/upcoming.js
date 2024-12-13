import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import styles from '../styles/upcoming_style.js';

const Upcoming = ({ navigation, id, name, thumbnail, releaseDate }) => {

  return (
    <Pressable 
      style={styles.pressable} 
      onPress = {() => navigation.navigate("Movie", { movieId: id })}
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

export default Upcoming;