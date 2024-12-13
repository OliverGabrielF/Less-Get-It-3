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
    flexBasis: '40%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: '1%',
    marginBottom: 20,
    borderRadius: 10,
  },
  container: {
    height: 200,
    width: '100%', 
    backgroundColor: '#DAE2DF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
    padding: 10,
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
    fontSize: 16,
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
});

export default styles;