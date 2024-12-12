import { StyleSheet } from "react-native";

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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
  buttonTxt: {
    alignText: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  contact_info_container: {
    marginTop: 20,
    width: '90%',
    height: '35%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  contact_text_container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  contact_text: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#DAE2DF',
    textAlign: 'left',
    marginTop: 10,
  },
  contact_text_name: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    borderBottomColor: '#DAE2DF',
  },
  movies_shown_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    textAlign: 'left', // Align text to the left
    borderBottomWidth: 4,
    borderBottomColor: 'black', // Ensure a clear underline
    alignSelf: 'flex-start', // Align the text to the left of the parent container
    marginLeft: 20, // Add padding to the left for better spacing
  },
  movies_shown_container: {

  }

})

export default styles;