import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454B66',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    height: 90,
    backgroundColor: '#DAE2DF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_text: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  back_home: {
    backgroundColor: '#DAE2DF',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  upcoming_button: {
    height: 40,
    width: 200,
    backgroundColor: '#DAE2DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  upcoming_button_text: {
    width: 200,
    textAlign: 'center',
  },
  container_cinema: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: '40%',
  },
  scrollview: {
    flex: 1,
    width: '100%',
  },
})

export default styles;
