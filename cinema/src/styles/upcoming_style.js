import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    flexBasis: '45%',
    maxWidth: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: '2%',
  },
  container: {
    height: 250,
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
    paddingBottom: 10,
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