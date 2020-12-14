import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#83ABC5",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "My App",
};

export default Header;
