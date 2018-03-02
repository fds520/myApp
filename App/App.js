'use strict';

import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import {isLogin, logout} from './util/Secret';
import NewFeed from './NewFeed';
// import MinePage from './MinePage';
/*import ExplorePage from './ExplorePage';
import MainPage from './MainPage';
import AlarmPage from './AlarmPage';*/
import LoginRegPage from './LoginRegPage';

var App = React.createClass({
  getInitialState: function() {

    return {
      selectedTab:'mainTab',
      notifCount: 0,
      isLogin: true,
      token: '',
      isLogout: false,
      sent: false,
      id: '',
    };
  },

  sendOk: function(result, id) {
    this.setState({
      sent: result,
      id: id,
    });
  },

  refresh: function(isLogin, token) {
    this.setState({
      isLogin: true,
      token: token,
    });
  },

  componentDidMount: function(){
  },

  render: function() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'addTab'}
          renderIcon={() => <Image style={styles.icon} source={require('./imgs/add.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./imgs/add.png')} />}
          onPress={this.state.isLogin ? ()=>{this.props.navigator.push({
            title: '发状态',
            component: NewFeed,
            params: {sendOk:(result, id)=>this.sendOk(result, id), pop: ()=>this.props.navigator.pop()}
          })} : ()=>this.setState({ selectedTab: 'addTab' })}
          >
          {this.state.isLogin ? <View/> : <LoginRegPage refresh={this.refresh}/>}
        </TabNavigator.Item>
      </TabNavigator>
    );
  },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    icon: {
        height: 28,
        width: 28,
    },
});

module.exports = App
