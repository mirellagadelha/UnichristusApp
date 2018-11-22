import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001425',
  },
  containerLogin: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  imageLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  containerInput: {
    width: 250,
  },
  textInput: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 15,
    color: '#FFF',
    paddingLeft: 35,
    borderRadius: 4,
  },
  buttonContainer: {
    width: 250,
    backgroundColor: '#032442',
    paddingVertical: 15,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  },
  inlineIcon: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    top: 9,
  },
});
