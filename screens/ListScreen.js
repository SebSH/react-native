import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

export default function ListScreen() {
  state = {
    stations: []
  }
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => {
        return (
          <View>
          <Text>{item.title}</Text>
          <Text>{item.position}</Text>
          <Text>{item.distance}m</Text>
          <Text></Text>
          </View>
        ) 
      }}
      data={[
        { id: "1", title: "Louis", position: "Paris", distance: "300" },
        { id: "2", title: "Stalingrad", position: "Lyon", distance: "1680" },
        { id: "3", title: "Saint-Bart", position: "Lille", distance: "12" },
        { id: "4", title: "Charles", position: "Nice", distance: "3698" },
      ]}
      keyExtractor={item => item.id}
    />
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
