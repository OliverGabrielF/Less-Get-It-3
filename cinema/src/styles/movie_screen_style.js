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
})

export default styles;