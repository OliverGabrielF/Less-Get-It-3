import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 70,
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
    marginBottom: 20,
  },
  name_container: {
    width: 160,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
  },
  website: {
    color: 'blue',
  },
});

export default styles;
