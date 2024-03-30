import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class TitleHeader extends Component {
  render() {
    return (
      <view style={styles.container}>
        <View style={styles.taskheader}>
          <Text style={styles.titleSection}>Today's Tasks</Text>
        </View>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskheader: {
    marginTop: 0,
    marginHorizontal: 16,
    marginBottom: 0,
  },
  titleSection: {
    fontSize: 30,
  },
});

export default TitleHeader;
