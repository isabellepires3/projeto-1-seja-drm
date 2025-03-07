import {View, Text, StyleSheet } from 'react-native'

function Button () {
  return (
    <View>
    <Text style={styles.button}>
    Inicie sua jornada na DRM.
    </Text>
     </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'lightblue',
    height: 55,
    color: 'blue',
    fontSize: 20,
    padding: 5,
    textAlign: 'center'
  }
})

export default Button
