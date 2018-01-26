import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'About'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
           <View style={styles.welcomeContainer}>
            <Image
              source={
                require('../assets/images/robot-reddit.png')
              }
              style={styles.welcomeImage}
            />
          </View>
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      , paddingTop: 15
      , backgroundColor: '#fff'
    }
  , welcomeImage: {
        width: 100
      , height: 80
      , resizeMode: 'contain'
      , marginTop: 3
      , marginLeft: -10
      , alignItems: 'center'
    }
});
