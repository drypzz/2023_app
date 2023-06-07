/**
 * globals.jsx
 * @author @drypzz @function404
 */

import { StyleSheet } from 'react-native';

/**
 * HomeScreen.jsx
 * @since 30-05-2023
 * @version 1.0.0
 * @author @drypzz @function404
 * @description Styles that will be used in the whole app
 * @returns {Object} styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    width: "100%",
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 50,
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    outlineStyle: 'solid',
    outlineColor: 'rgb(53, 153, 204)',
    outlineWidth: 2,
  },
  btnSubmit: {
    backgroundColor: '#32cd74',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  sumitText: {
    color: '#fff',
    fontSize: 18,
  },
  btnCreate: {
    marginTop: 10,
  },
  createText: {
    color: '#fff',
  },

  hyperlinkStyle: {
    color: '#32cd74',
    marginLeft: 5,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    color: '#FFF',
  },
  checkbox: {
    marginRight: 5,
  }
});

/**
 * @author @drypzz
 * @exports styles
 * @description Exporting the styles object
 */
export default styles;
