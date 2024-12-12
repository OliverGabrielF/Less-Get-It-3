import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    height: 90,
    backgroundColor: '#555555',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  back_home: {
    backgroundColor: '#555555',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: '85%',
    aspectRatio: 1,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
})

export default styles;