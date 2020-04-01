import 'react-native-gesture-handler';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

 const styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'row',
   flexWrap: 'wrap',
 },
 item: {
   backgroundColor: '#fff',
   padding: 5,
   margin: 2,
   height: (Dimensions.get('window').height/4) ,
   width: (Dimensions.get('window').width),
   flexDirection: 'row',
   
 },
 userName: {
   padding: 5,
   fontSize: 14,
   color: 'black',
   backgroundColor: '#99f2c8',
   width: 150,
   height: 80
 },
 imgName: {
   padding: 5,
   fontSize: 16,
   color: 'black',
   backgroundColor: '#99f2c8',
   width: 150,
   height: 80
 },
 img: {
   width: 250, 
   height: 160,
 },
 openedImage: {
   width: (Dimensions.get('window').width),
   height: (Dimensions.get('window').height),
   resizeMode: 'contain',
   alignSelf: 'center',
  }
});

export default styles;