import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class StationItem extends React.Component {
  render() {
    const station = this.props.station
    return (
      <View style={styles.main_container}>
        <View style={styles.content_container}>
            <Text>{station.name}</Text>
            <Text>{station.position}</Text>
            <Text>{station.distance}</Text>            
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
})

export default StationItem