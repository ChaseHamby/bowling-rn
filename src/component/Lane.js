import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Lane = props => {
  return <View style={styles.container}>{props.children}</View>;
};

Lane.propTypes = {
  children: PropTypes.object
};

export default Lane;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'tan'
  }
});
