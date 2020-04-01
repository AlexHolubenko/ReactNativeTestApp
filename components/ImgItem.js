import React from 'react';
import 'react-native-gesture-handler';
import {
    View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import styles from '../styles/styles';

function Item(props) {
 const { bigItem, url, user_name, img_title } = props;
 return (
   <View style={styles.item}>
   <TouchableOpacity  onPress={bigItem}>
    <Image style={styles.img} source={{uri: url}}/>
   </TouchableOpacity>
     <View>
       <Text style={styles.imgName}>{img_title}</Text>
       <Text style={styles.userName}>{user_name}</Text>
     </View>
   </View>
 );
}
export default Item;