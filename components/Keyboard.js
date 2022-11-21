import { StyleSheet, Text, View } from 'react-native'
import { gStyles } from '../styles/global'

const Keyboard = () => {

    const themeColors = [
        "ffffff",
        "ffeded",
        "ff8787",
        "ff5454",
        "ff2121",
        "ed0000",
        "ffffff",
        "fff8ed",
        "ffd187",
        "ffbd54",
        "ffaa21",
        "ed9200",
      ];
  return (
    <View>
      <Text style={gStyles.subtitle}>Keyboard</Text>
      {themeColors.map(color => (
        <View style={{width: 70, height: 40, backgroundColor: 'white'}}></View>
      ))}
    </View>
  )
}
export default Keyboard
const styles = StyleSheet.create({})