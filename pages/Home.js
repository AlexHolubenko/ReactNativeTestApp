import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import Item from '../components/ImgItem';


function Home({navigation}) {
 const [data, setData] = useState([]);
 useEffect(() => {
   fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
     .then((response) => response.json())
     .then((json) => setData(json))
     .catch((error) => alert(error))
 });
  return (
   <SafeAreaView style={styles.container}>
   <TouchableOpacity>
     <FlatList
       data={data}
       renderItem={({ item }) => <Item id={item.id}
                                       url={item.urls.small} 
                                       user_name={item.user.name}
                                       img_title={item.description}
                                       bigItem={()=> navigation.navigate('OpenedImg', item)}/>}
       keyExtractor={item => item.id}
     />
     </TouchableOpacity>
   </SafeAreaView>
 );
}

export default Home;