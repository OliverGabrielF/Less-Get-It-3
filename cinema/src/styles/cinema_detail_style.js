import { StyleSheet } from "react-native";

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
  buttonTxt: {
    alignText: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  contact_info_container: {
    marginTop: 8,
    width: '90%',
    height: '30%',
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
    borderBottomColor: '#555555',
    textAlign: 'left',
    marginTop: 10,
  },
})

export default styles;