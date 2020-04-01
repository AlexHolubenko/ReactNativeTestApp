import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Image,
} from 'react-native';
import styles from '../styles/styles';

function OpenedImg({route}) {
 const currentImage = route.params; 
 return (
   <View>
      <Image style={styles.openedImage} source={{uri: currentImage.urls.small}}></Image>
   </View>
 );
}
export default OpenedImg;
