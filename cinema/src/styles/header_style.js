
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#DAE2DF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
  },
  back_home: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    backgroundColor: '#DAE2DF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    marginTop: 13,
  },
  button_text: {
    alignText: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
})

export default styles;