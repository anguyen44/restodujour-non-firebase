import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Navigator} from 'react-native';

import Search from './component/Search';

export default function App() {

 /* renderScene(route, navigator) {
    var globalProps = {navigator}
    switch(route.id){
      case 'Search': 
        return (
          <Search />
        )
    }
  }

    return (
      <Navigator 
        initialRoute={{
          id: 'Serach'
        }}
        renderScene={this.renderScene}
      />
    );
*/
 
  return (
    <Search/>
    /*<View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
    </View>*/
 );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);