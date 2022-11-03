import { StyleSheet, Text, View } from "react-native";
const Title = () => {
  const { container, heading, subheading } = styles;
  return (
    <View style={container}>
      <Text style={heading}>Daily</Text>
      <Text style={subheading}>What did you do today?</Text>
    </View>
  );
};
export default Title;
const styles = StyleSheet.create({
  container: { alignItems: "center", width: "100%" },
  heading: {
    fontSize: 30,
  },
  subheading: {
    fontWeight: "bold",
  },
});
