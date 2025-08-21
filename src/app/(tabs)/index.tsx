import { StyleSheet, Text, View } from 'react-native';

export default function Homescreen() {
  return ( 
    <View style={styles.container}>
      <Text>
        Hi Krystian! I'm an app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fffbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
