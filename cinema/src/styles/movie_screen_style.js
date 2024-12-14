import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454B66',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  background_container: {
    flex: 1,
    width: '95%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#DAE2DF',
  },
  flex_row_container: {
    height: '35%',
    flexDirection: 'row',
  },
  poster_container: {
    width: '50%',
    overflow: 'hidden',
  },
  poster: {
    resizeMode: 'cover',
    aspectRatio: 3 / 4,
    borderRadius: 10,
  },

  movie_details_container: {
    width: '50%',
    padding: 10,
  },
  movie_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#454B66',
    textAlign: 'center',
    marginBottom: 20,
  },

  detail_duration_row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detail_duration_title: {
    fontWeight: 'bold',
    width: 50,
    fontSize: 14,
  },
  detail_duration_info: {
    fontWeight: 'normal',
    fontSize: 14,
  },

  detail_year_row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detail_year_title: {
    fontWeight: 'bold',
    width: 76,
    fontSize: 14,
  },
  detail_year_info: {
    fontWeight: 'normal',
    fontSize: 14,
  },

  genre_container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  genre_title: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 58,
    marginRight: 3,
  },
  genre_text: {
    fontSize: 14,
    marginRight: 3,
  },

  description_container: {
    marginBottom: 20,
  },
  description_title: {
    fontWeight: 'bold',
  },

  showtime_container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  showtime_title: {
    fontWeight: 'bold',
  },
  purchase_button: {
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#454B66',
  },
})

export default styles;