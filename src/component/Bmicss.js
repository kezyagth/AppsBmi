import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    marginTop: 50,
    alignItems: 'center',
    width: 500,
    height: 700,
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    width: 500,
    height: 700,
    alignItems: 'center',
  },
  textBmi: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 90,
  },
  text:{
    marginTop: 30
  },
  textHasil :{
    marginTop:50
  },
  textHasil2 :{
    marginTop:10
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 200,
    height: 40,
    backgroundColor: 'white',
    marginTop: 5
  },
  button: {
    backgroundColor: 'white',
    marginTop: 50,
    alignItems: 'center',
    width: 70,
    height: 20,
  },

  buttonContainer:{
    alignItems: 'center',
    width: 100,
    height: 20,
    marginTop: 30,

},
});
export default style;
