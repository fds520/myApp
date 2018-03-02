import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

var ShareBtn = React.createClass({

  render:function() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Image
          source={require('../../imgs/share.png')}
          style={[{ width: 18, height: 18, marginRight: 18, marginTop: 15},]}/>
      </TouchableOpacity>
    );

  },
});


var styles = StyleSheet.create({
  container: {

  },
});

module.exports = ShareBtn;
