// CinemasScreen.js
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import AppContext from '../../context.js';
import styles from '../styles/general_style.js';


const CinemasScreen = ({ }) => {
  const { fetchCinemas } = useContext(AppContext);
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    const loadCinemas = async () => {
      const cinemaList = await fetchCinemas();
      setCinemas(cinemaList);
    };
    loadCinemas();
  }, [fetchCinemas]);

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_text}>HomeScreen</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <View>
            {cinemas.map((cinema) => (
              <View key={cinema.id} style={styles.cinema_item}>
                <Text style={styles.cinema_name}>{cinema.name}</Text>
                <Text style={styles.cinema_website}>{cinema.website}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </MenuProvider>
  );
};

export default CinemasScreen;
