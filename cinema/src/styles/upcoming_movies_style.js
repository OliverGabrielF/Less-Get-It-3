import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#454B66' 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', // Center header content
    padding: 16, 
    backgroundColor: '#DAE2DF' 
  },
  backButton: { 
    position: 'absolute', // Place it on the left
    left: 16 
  },
  buttonText: { 
    color: 'black', 
    fontSize: 16 
  },
  headerText: { 
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold' 
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