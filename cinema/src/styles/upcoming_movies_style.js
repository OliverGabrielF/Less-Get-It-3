import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#454B66' 
  },
  container_upcoming: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: '40%',
  },
  scrollview: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
});

export default styles;