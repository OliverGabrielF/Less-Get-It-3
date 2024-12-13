import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454B66',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  contact_info_container: {
    marginTop: 20,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  contact_text_container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    textAlign: 'left',
    borderBottomWidth: 4,
    borderBottomColor: 'black',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  movies_shown_container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  movies_shown_container: {
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'left',
    justifyContent: 'flex-start',
    width: '100%',
  },
  scrollview: {
    flex: 1,
    width: '100%',
  },
  scrollview_container: {
    flex: 1,
    paddingBottom: 70,
    marginBottom: '10%'
  },
  horizontal_scrollview: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '50%',
  },
})

export default styles;