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
  list: { 
    padding: 16 
  },
  movieContainer: { 
    flexDirection: 'row', 
    marginBottom: 16, 
    backgroundColor: '#DAE2DF', 
    borderRadius: 8, 
    overflow: 'hidden' 
  },
  thumbnail: { 
    width: 100, 
    height: 150 
  },
  details: { 
    flex: 1, 
    padding: 8 
  },
  movieName: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
  releaseDate: { 
    fontSize: 14, 
    color: 'black' 
  },
});

export default styles;
