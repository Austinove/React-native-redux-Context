import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//for many context files imports you use a reference e.g
//import { Context as BlogContext } from '../context/BlogContext';

const Home = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <Text style={{fontSize: 15, marginHorizontal: 15, marginVertical: 10}}>
        Click plus icon to add post
      </Text>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowScreen', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Button
                  onPress={() =>
                    navigation.navigate('EditScreen', {id: item.id})
                  }
                  title="Edit"
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <Button
        onPress={() => navigation.navigate('Profile', {id: 'none'})}
        title="Route"
      /> */}
    </View>
  );
};

// Home.navigationOptions = () => {
//   return {
//     // headerTitle: 'Test App',
//     headerRight: () => <MaterialCommunityIcons name="plus" size={30} />,
//   };
// };
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 5,
  //   paddingHorizontal: 5,
  //   // marginHorizontal: 140,
  //   width: 50,
  //   position: 'relative',
  //   bottom: 15,
  //   left: 250,
  //   borderRadius: 15,
  //   elevation: 3,
  //   backgroundColor: 'black',
  // },
  // flatlistItem: {
  //   marginTop: 20,
  // },
  // text: {
  //   fontSize: 12,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },
});

export default Home;
