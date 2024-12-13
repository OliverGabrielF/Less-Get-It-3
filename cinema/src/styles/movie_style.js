import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /*pressable: {
    flex: 1,
    flexBasis: '80%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: '1%',
  },*/
  pressable: {
    marginTop: '1%',
    flexBasis: '40%',
    maxWidth: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  container: {
    height: 350,
    width: 200,
    backgroundColor: '#DAE2DF',
    justifyContent: 'flex-start',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
    paddingBottom: 10,
  },
  name_container: {
    width: 160,
  },
  thumbnail_container: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555555',
    textAlign: 'center',
  },
  release_date: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginTop: 2,
  },
  genre: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  }
});

export default styles;