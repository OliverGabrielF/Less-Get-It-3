import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    flexBasis: '45%',
    maxWidth: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    marginHorizontal: '1%',
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
    textAlign: 'center',
  },
  thumbnail_container: {
    width: 100,
    height: 100,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 20,
    aspectRatio: 1,
  },
});

export default styles;