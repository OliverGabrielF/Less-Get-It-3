import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454B66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#E2DADB',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#DAE2DF',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  loginText: {
    color: 'black',
  },
});

export default styles;